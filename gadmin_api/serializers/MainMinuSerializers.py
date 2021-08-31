from rest_framework import serializers

from gadmin_app.models import MainMenuCategory


class MainMenuCategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainMenuCategory
        fields = ('id', 'title', 'description')
