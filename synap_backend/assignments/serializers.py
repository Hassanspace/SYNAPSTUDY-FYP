from rest_framework import serializers
from .models import Assignment

class AssignmentSerializer(serializers.ModelSerializer):
    teacher_name = serializers.CharField(source='teacher.username', read_only=True)

    class Meta:
        model = Assignment
        fields = [
            "id",
            "title",
            "description",
            "file",
            "deadline",
            "classroom_id",   # <-- add this
            "created_at",
            "teacher_name"
        ]
        read_only_fields = ["teacher_name", "created_at"]
