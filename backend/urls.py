from django.contrib import admin
from django.urls import include, path, re_path
from django.conf.urls.static import static
from django.conf.urls import url
from django.conf import settings
from .views import index
from backend.animals import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'animals', views.AnimalViewSet)
router.register(r'categories', views.CategoryViewSet)
router.register(r'tags', views.TagViewSet)

urlpatterns = [
    path('', index),
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    re_path(r'^app/(?:.*)/?$', index),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
