from django.db import models
from django.contrib.auth.models import User,AbstractUser
from tinymce.models import HTMLField
from PIL import Image

# Create your models here.

# class User(AbstractUser):
#     is_client=models.BooleanField(default=False,blank=True)
    
class Project(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    image=models.ImageField(upload_to='project/' ,blank=True)
    name=models.CharField(max_length=50)
    description=HTMLField()
    link=models.CharField(max_length=200)
    posted=models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name
    
    def save(self,*args,**kwargs):
        super().save(*args,**kwargs)
        img=Image.open(self.image.path)
        
        if img.height >300 and img.width>300:
            size=(720,720)
            img.thumbnail(size)
            img.save(self.image.path)
    
    
class Profile(models.Model):
    user=models.OneToOneField(User, on_delete=models.CASCADE)
    image=models.ImageField(upload_to='profile/', blank=True)
    bio=models.TextField(blank=True)
    contact=models.CharField(max_length=30, blank=True)
    location=models.CharField(max_length=50,  blank=True)
    company=models.CharField(max_length=50, blank=True)
    
    def __str__(self):
        return self.user.username
    
    def save(self,*args,**kwargs):
        super().save(*args,**kwargs)
        img=Image.open(self.image.path)
        
        if img.height >300 and img.width>300:
            size=(300,300)
            img.thumbnail(size)
            img.save(self.image.path)
            
class Inquiry(models.Model):
    your_name=models.CharField(max_length=40)
    your_email=models.EmailField()
    subject=models.CharField(max_length=100)
    your_message=models.TextField()
    
    def __str__(self):
        return self.subject