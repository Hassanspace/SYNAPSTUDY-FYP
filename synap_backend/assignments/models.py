from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Assignment(models.Model):
    teacher = models.ForeignKey(User, on_delete=models.CASCADE, related_name="created_assignments")
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    file = models.FileField(upload_to="assignments/", blank=True, null=True)
    deadline = models.DateTimeField()
    classroom_id = models.IntegerField()  # just store classroom id, no FK
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
