from django.urls import path, re_path
from .views.CategoriesViews import CategoriesViews
from .views.ContentViews import ContentViews
from .views.DashboardViews import DashboardViews

dashboard_pattern = '[\w]*$|^[\w]*$'
pattern = '[\w]*$'

urlpatterns = [
    re_path(r'categories/' + pattern, CategoriesViews.as_view()),
    re_path(r'content/' + pattern, ContentViews.as_view()),
    re_path(r'^dashboard/' + dashboard_pattern, DashboardViews.as_view()),
]
