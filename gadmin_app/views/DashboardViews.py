from django.shortcuts import render

# Create your views here.
from django.views import View

from gadmin_app.controllers.Modules.DashboardController import SiteDashboardController


class DashboardViews(View):

    def __init__(self):
        self.controller = SiteDashboardController()

    def get(self, request):
        # print(self.controller.data())
        return render(request, 'modules/dashboard/dashboard.html', self.controller.data())
