
from django.contrib import admin
from django.urls import path,include
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include('article.api.urls')),
    path('token-auth/' ,obtain_jwt_token),
    path('auth/',include('article.api.auth-urls'))
]
