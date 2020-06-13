from django.shortcuts import render,get_object_or_404,redirect
from django.http import HttpResponse,JsonResponse,HttpResponseRedirect
from .models import Project,Inquiry
from django.contrib.auth.models import User
from .forms import InquiryForm
from django.contrib import messages



# Create your views here.
def index(request):
    projects=Project.objects.order_by('-posted')
    user=User.objects.get(pk=request.user.id)
    form=InquiryForm()
    # if request.method=='POST':
    #     form=InquiryForm(request.POST)
    #     if form.is_valid():
    #         form.save()
    #         print(form)
    #         messages.success(request,'Your inquiry has been received, your request will be processed as soon as possible')
            
    #         return redirect('portfolio:index')
    # else:
    #     form=InquiryForm()
    return render(request,'portfolio/index.html',{'projects':projects,'user':user,'form':form})

#ajax inquiry view functon
def inquiry(request):
    message=InquiryForm(request.POST)
    message.save()
    data={'success':'Your inquiry has been received, your request will be processed as soon as possible. Thank You!'}
    return JsonResponse(data)



def project(request,project_id):
    project_modal=get_object_or_404(Project,pk=project_id)
    return render(request,'portfolio/index.html',{'project_modal':project_modal})
