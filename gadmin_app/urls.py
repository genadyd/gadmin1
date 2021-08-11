from django.urls import path
from .views.CategoriesViews import CategoriesViews

categories_views = CategoriesViews

urlpatterns = [
    path('categories/', categories_views.as_view()),
]
