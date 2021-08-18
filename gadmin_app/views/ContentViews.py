from django.shortcuts import render

# Create your views here.
from django.views import View

from gadmin_app.controllers.Modules.SiteContentController import SiteContentController


class ContentViews(View):

    def __init__(self):
        self.controller = SiteContentController()

    def get(self, request):
        # print(self.controller.data())
        return render(request, 'modules/content/content.html', self.controller.data())
