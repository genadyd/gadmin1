from django.db import models


# Create your models here.
class MainMenu(models.Model):
    title = models.CharField(max_length=255, verbose_name="Menu Title")
    description = models.TextField(verbose_name="Description")
    admin_description = models.TextField(verbose_name="Admin Description")
    url = models.URLField(verbose_name="URL")
    parent = models.ForeignKey('gadmin_app.MainMenuCategories', to_field='id', verbose_name="Parent", null=True,
                               blank=True,
                               on_delete=models.CASCADE)

    def __str__(self):
        return f"id: {self.id}title: {self.title}, description: {self.description}"

    class Meta:
        db_table = 'main_menu'


class MainMenuCategories(models.Model):
    title = models.CharField(max_length=255, verbose_name="Menu Category Title")
    description = models.TextField(verbose_name="Description")
    admin_description = models.TextField(verbose_name="Admin Description")

    def __str__(self):
        return f"""id: {self.id}
                title: {self.title}
                description: {self.description}"""

    class Meta:
        db_table = 'main_menu_categories'
