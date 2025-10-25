from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

class DashboardView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        if user.role == "teacher":
            data = {
                "welcome": f"Welcome, {user.username} (Teacher)",
                "stats": {
                    "classrooms_created": 2,
                    "students_total": 25
                }
            }
        else:
            data = {
                "welcome": f"Welcome, {user.username} (Student)",
                "stats": {
                    "classrooms_joined": 3,
                    "assignments_due": 5
                }
            }
        return Response(data)
