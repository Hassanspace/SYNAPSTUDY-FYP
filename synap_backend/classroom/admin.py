from django.contrib import admin
from .models import Classroom

@admin.register(Classroom)
class ClassroomAdmin(admin.ModelAdmin):
    list_display = ('name', 'teacher', 'join_code', 'join_link', 'created_at')
    search_fields = ('name', 'teacher__username', 'join_code')
    list_filter = ('created_at',)

