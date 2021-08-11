from django.shortcuts import render

# Create your views here.
from django.views import View

from gadmin_app.controllers.CategoriesController import CategoriesController


class CategoriesViews(View):

    def __init__(self):
        self.controller = CategoriesController()

    def get(self, request):
        return render(request, 'modules/categories/content.html', self.controller.getTemplateParams())
