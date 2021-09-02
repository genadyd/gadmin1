from django.template.defaultfilters import pprint
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from gadmin_api.serializers.MainMinuSerializers import MainMenuCategoriesSerializer
from gadmin_app.models import MainMenuCategory


class MainMenuCategoriesView(APIView):
    def get(self, request):

        categories = MainMenuCategory.objects.all()
        serialized_data = MainMenuCategoriesSerializer(categories, many=True)

        return Response(serialized_data.data)
