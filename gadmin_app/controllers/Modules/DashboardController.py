from gadmin_app.controllers.Modules.ModuleController import ModuleController


class SiteDashboardController(ModuleController):
    def __init__(self):
        self.module_name = 'dashboard'
        self.module_title = 'Dashboard'
        self.styles_url = 'styles/dest/modules/dashboard.css'
        self.scripts_url = 'scripts/dest/modules/dashboard.js'
        self.description = 'Praesent nibh est, elementum vitae dolor quis, accumsan cursus ipsum.'