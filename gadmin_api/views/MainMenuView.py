from django.template.defaultfilters import pprint
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from gadmin_api.serializers.MainMinuSerializers import MainMenuCategoriesSerializer
from gadmin_app.models import MainMenuCategory, MainMenu


class MainMenuCategoriesView(APIView):
    permission_classes = ()

    def get(self, request):
        categories = MainMenuCategory.objects.all()
        serialized_data = MainMenuCategoriesSerializer(categories, many=True)

        return Response({"status": 'success', 'data': serialized_data.data}, status=status.HTTP_200_OK)


class MainMenuLinksView(APIView):
    permission_classes = ()

    def get(self, request, category_id):
        links = MainMenu.objects.filter(parent=category_id)
        serialized_data = MainMenuCategoriesSerializer(links, many=True)

        return Response(serialized_data.data)
