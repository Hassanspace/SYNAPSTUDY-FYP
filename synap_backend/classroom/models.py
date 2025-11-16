from django.conf import settings
from django.db import models

class Classroom(models.Model):
    teacher = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='created_classrooms'
    )
    students = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        related_name='joined_classrooms',
        blank=True
    )

    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)

    join_code = models.CharField(max_length=10, unique=True)
    join_link = models.CharField(max_length=255, unique=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
