class ModuleController:

    def data(self):
        return {
            'title': self.module_title,
            'description': self.description,
            'styles_url': self.styles_url,
            'scripts_url': self.scripts_url,
            'module_name': self.module_name,
            'module_title': self.module_title
        }
