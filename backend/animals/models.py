from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']
        verbose_name_plural = "categories"


class Tag(models.Model):
    name = models.CharField(max_length=50)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name


class Animal(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100)
    short_description = models.CharField(
        max_length=250, blank=True, default='')
    physical_description = models.TextField(blank=True, default='')
    behavior_description = models.TextField(blank=True, default='')
    habitat_description = models.TextField(blank=True, default='')
    picture = models.ImageField(
        upload_to='animals', null=True)
    category = models.ForeignKey(Category, on_delete=models.PROTECT, null=True)
    tags = models.ManyToManyField(Tag)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']
