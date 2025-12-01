from django.urls import path
from .views import RegisterView, GoogleLoginView ,CustomTokenObtainPairView ,CustomLoginView, UserProfileAPIView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView 

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
     path('login/', CustomLoginView.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('google-login/', GoogleLoginView.as_view(), name='google_login'),
    path('profile/', UserProfileAPIView.as_view(), name='user-profile'),
]
