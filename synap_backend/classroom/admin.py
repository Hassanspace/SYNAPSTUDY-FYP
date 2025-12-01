from django.contrib import admin
from .models import Classroom
from django import forms
from django.contrib.auth import get_user_model

User = get_user_model()

class ClassroomAdminForm(forms.ModelForm):
    class Meta:
        model = Classroom
        fields = "__all__"

    # Limit the students field to only users you want (optional, usually all users are selectable)
    # But for read-only display of joined students in admin list view, see below

class ClassroomAdmin(admin.ModelAdmin):
    form = ClassroomAdminForm
    list_display = ("name", "teacher", "joined_students_count")
    filter_horizontal = ("students",)  # nice UI for M2M
    readonly_fields = ("joined_students_list",)

    # Show only students who joined in detail view
    def joined_students_list(self, obj):
        return ", ".join([student.username for student in obj.students.all()])
    joined_students_list.short_description = "Joined Students"

    # Optional: show count in list
    def joined_students_count(self, obj):
        return obj.students.count()
    joined_students_count.short_description = "Students Joined"

admin.site.register(Classroom, ClassroomAdmin)
