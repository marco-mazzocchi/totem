from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
from django.contrib.auth.models import User
from backend.animals.models import Animal, Category, Tag
from rest_framework import viewsets, generics
from backend.animals.serializers import UserSerializer, CategorySerializer, AnimalSerializer, TagSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    pagination_class = None


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    pagination_class = None


class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    pagination_class = None


class AnimalViewSet(viewsets.ModelViewSet):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer

    def get_queryset(self):
        queryset = Animal.objects.all()
        name = self.request.query_params.get('name', None)
        category = self.request.query_params.get('category', None)
        tags = self.request.query_params.get('tags', None)
        if name is not None:
            queryset = queryset.filter(name__contains=name)
        if category is not None:
            queryset = queryset.filter(category__pk=category)
        if tags is not None:
            queryset = queryset.filter(tags__pk__in=tags.split(",")).distinct()
        return queryset


# Serve Single Page Application
index = never_cache(TemplateView.as_view(template_name='index.html'))
