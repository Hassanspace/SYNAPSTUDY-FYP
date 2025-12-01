from rest_framework import serializers
from .models import Classroom
from users.models import User  # import your user model

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class ClassroomSerializer(serializers.ModelSerializer):
    students = UserSerializer(many=True, read_only=True)

    class Meta:
        model = Classroom
        fields = ['id', 'name', 'description', 'join_code', 'join_link', 'created_at', 'students']
