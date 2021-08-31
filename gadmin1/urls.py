"""gadmin1 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.http import HttpResponse
from django.urls import path, include

'''test function "in production must be removed"'''
def static_text(s):
    return lambda req: HttpResponse(s)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('gadmin/api-auth/', include('rest_framework.urls')),
    path('gadmin/api/', include('gadmin_api.urls')),
    path('gadmin/', include('gadmin_app.urls'))
]
