from django.contrib import admin

# Register your models here.
from gadmin_app.models import MainMenu, MainMenuCategories

admin.site.register(MainMenuCategories)
admin.site.register(MainMenu)
