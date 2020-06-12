from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

app_name='portfolio'
urlpatterns = [
    path('', views.index, name='index'),
    path('project/<int:project_id>', views.project, name='project'),
]
if settings.DEBUG:
    urlpatterns+= static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
