from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .serializers import ClassroomSerializer
from .models import Classroom
from .utils import generate_join_code
from django.conf import settings

class CreateClassroomAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        if user.role != "teacher":
            return Response({"error": "Only teachers can create classrooms"}, status=403)


        name = request.data.get("name")
        description = request.data.get("description", "")

        join_code = generate_join_code()
        join_link = f"http://localhost:5173/join/{join_code}"

        classroom = Classroom.objects.create(
            teacher=user,
            name=name,
            description=description,
            join_code=join_code,
            join_link=join_link
        )

        return Response({
            "message": "Classroom created successfully",
            "id": classroom.id,
            "name": classroom.name,
            "join_code": classroom.join_code,
            "join_link": classroom.join_link,
        })


class JoinClassByCodeAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        code = request.data.get("code")
        user = request.user

        try:
            classroom = Classroom.objects.get(join_code=code)
        except Classroom.DoesNotExist:
            return Response({"error": "Invalid code"}, status=404)

        classroom.students.add(user)
        return Response({"message": "Joined classroom successfully!"})


class JoinClassByLinkAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, code):
        user = request.user

        try:
            classroom = Classroom.objects.get(join_code=code)
        except Classroom.DoesNotExist:
            return Response({"error": "Invalid link"}, status=404)

        classroom.students.add(user)
        return Response({
            "message": "Joined successfully",
            "classroom_id": classroom.id,
            "classroom_name": classroom.name
        })

class ClassroomListAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user

        if user.role == "teacher":
            classrooms = Classroom.objects.filter(teacher=user)
        else:  # student
            classrooms = Classroom.objects.filter(students=user)

        serializer = ClassroomSerializer(classrooms, many=True)
        return Response(serializer.data)