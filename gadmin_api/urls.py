from pprint import pprint
from django.http import HttpResponse
from django.urls import path

from .views import MainMenuCategoriesView as categoriesView


def static_text(s):
    return lambda req: HttpResponse(s)


urlpatterns = [
    path("main_menu_categories/", categoriesView.MainMenuCategoriesView.as_view())
]
