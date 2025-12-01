from django.urls import path
from .views import AssignmentListCreateAPIView

urlpatterns = [
    path("", AssignmentListCreateAPIView.as_view(), name="assignments"),
]
