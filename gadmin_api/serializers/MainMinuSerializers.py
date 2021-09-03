from rest_framework import serializers

from gadmin_app.models import MainMenuCategory, MainMenu


class MainMenuCategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainMenuCategory
        fields = '__all__'


class MainMenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainMenu
        fields = '__all__'
