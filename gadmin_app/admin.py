from django.contrib import admin

# Register your models here.
from gadmin_app.models import MainMenu, MainMenuCategory

admin.site.register(MainMenuCategory)
admin.site.register(MainMenu)
