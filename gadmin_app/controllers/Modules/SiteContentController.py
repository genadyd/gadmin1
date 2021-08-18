from gadmin_app.controllers.Modules.ModuleController import ModuleController


class SiteContentController():
    def __init__(self):
        self.module_name = 'content'
        self.module_title = 'Content'
        self.styles_url = 'styles/dest/modules/content.css'
        self.scripts_url = 'scripts/dest/modules/content.js'
        self.description = 'Praesent nibh est, elementum vitae dolor quis, accumsan cursus ipsum.'

    def data(self):
        return {
            'title': self.module_title,
            'description': self.description,
            'styles_url': self.styles_url,
            'scripts_url': self.scripts_url,
            'module_name': self.module_name,
            'module_title': self.module_title
        }
