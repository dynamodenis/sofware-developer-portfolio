from django.shortcuts import render,get_object_or_404
from django.http import HttpResponse
from .models import Project
from django.contrib.auth.models import User
# Create your views here.
def index(request):
    projects=Project.objects.order_by('-posted')
    user=User.objects.get(pk=request.user.id)
    return render(request,'portfolio/index.html',{'projects':projects,'user':user})

def project(request,project_id):
    project_modal=get_object_or_404(Project,pk=project_id)
    return render(request,'portfolio/index.html',{'project_modal':project_modal})
