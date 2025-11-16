from django.urls import path
from .views import CreateClassroomAPIView, JoinClassByCodeAPIView, JoinClassByLinkAPIView , ClassroomListAPIView

urlpatterns = [
    path('create/', CreateClassroomAPIView.as_view(), name='create-classroom'),
    path('join/code/', JoinClassByCodeAPIView.as_view(), name='join-classroom-code'),
    path('join/<str:code>/', JoinClassByLinkAPIView.as_view(), name='join-classroom-link'),
    path('classrooms/', ClassroomListAPIView.as_view(), name='classroom-list'),
    

]
