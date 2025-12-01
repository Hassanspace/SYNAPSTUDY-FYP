from rest_framework import generics, permissions
from rest_framework.exceptions import PermissionDenied
from .models import Assignment
from .serializers import AssignmentSerializer


from rest_framework.exceptions import PermissionDenied

class AssignmentListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = AssignmentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        classroom_id = self.request.query_params.get("classroom_id")
        if classroom_id:
            return Assignment.objects.filter(classroom_id=classroom_id).order_by("-created_at")
        return Assignment.objects.all().order_by("-created_at")

    def perform_create(self, serializer):
        if self.request.user.role != "teacher":
            raise PermissionDenied("Only teachers can create assignments.")

        classroom_id = self.request.data.get("classroom_id")
        if not classroom_id:
            raise AssignmentSerializer.ValidationError({"classroom_id": "This field is required."})

        serializer.save(teacher=self.request.user, classroom_id=classroom_id)

