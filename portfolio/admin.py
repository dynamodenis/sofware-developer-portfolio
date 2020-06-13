from django.contrib import admin
from .models import Profile,Project,Inquiry

admin.site.site_header='DynamoDenis Admin'
admin.site.site_title='DynamoDenis Admin Dashboard'

# Register your models here.
admin.site.register(Project)
admin.site.register(Profile)
admin.site.register(Inquiry)