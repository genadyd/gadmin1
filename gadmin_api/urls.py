from pprint import pprint
from django.http import HttpResponse
from django.urls import path

from .views import MainMenuView


def static_text(s):
    return lambda req: HttpResponse(s)


urlpatterns = [
    path("main_menu_categories/", MainMenuView.MainMenuCategoriesView.as_view()),
    path("main_menu_links/<str:category_id>/", MainMenuView.MainMenuLinksView.as_view())
]
