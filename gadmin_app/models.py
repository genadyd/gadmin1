from django.db import models


# Create your models here.
class MainMenu(models.Model):
    title = models.CharField(max_length=255, verbose_name="Menu Title")
    description = models.TextField(verbose_name="Description")
    admin_description = models.TextField(verbose_name="Admin Description")
    slug = models.SlugField(verbose_name="Link Slug")
    parent = models.ForeignKey('gadmin_app.MainMenuCategory', to_field='id', verbose_name="Parent", null=True,
                               blank=True,
                               on_delete=models.CASCADE)

    def __str__(self):
        return f"id: {self.id}title: {self.title}, description: {self.admin_description}"

    class Meta:
        db_table = 'main_menu'


class MainMenuCategory(models.Model):
    title = models.CharField(max_length=255, verbose_name="Menu Category Title")
    description = models.TextField(verbose_name="Description")
    admin_description = models.TextField(verbose_name="Admin Description")
    slug = models.SlugField(verbose_name="Category Slug")
    icon = models.CharField(max_length=100, verbose_name='Icon Name', null=True, blank=True, default='bi bi-gear-wide')

    def __str__(self):
        return f"""id: {self.id}
                title: {self.title}"""

    class Meta:
        db_table = 'main_menu_categories'
