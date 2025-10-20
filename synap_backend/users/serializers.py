from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import User


# 🔹 Registration Serializer
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password]
    )
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'password', 'password2', 'role')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Passwords must match."})
        return attrs

    def create(self, validated_data):
        validated_data.pop('password2')
        user = User.objects.create_user(**validated_data)
        return user


# 🔹 Custom JWT Token Serializer (for Login)
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    # This ensures JWT uses email instead of username for authentication
    username_field = User.EMAIL_FIELD  

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims (optional but useful)
        token['email'] = user.email
        token['username'] = user.username
        token['role'] = user.role
        return token

    def validate(self, attrs):
        # Override default validation to accept 'email' and 'password'
        credentials = {
            'email': attrs.get('email'),
            'password': attrs.get('password')
        }

        if not credentials['email'] or not credentials['password']:
            raise serializers.ValidationError("Email and password are required.")

        # Call parent validate method
        data = super().validate(attrs)

        # Add custom response data
        data['email'] = self.user.email
        data['username'] = self.user.username
        data['role'] = self.user.role

        return data
