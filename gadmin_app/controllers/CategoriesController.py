class CategoriesController:

    def __init__(self):
        self.params = {
            'title': 'Categories Page',
            'description': 'Praesent nibh est, elementum vitae dolor quis, accumsan cursus ipsum.',
            'content': """Donec magna sapien, imperdiet nec turpis condimentum, sollicitudin pulvinar erat.
             Proin elite libero, facilisis in hendrerit et, volutpat sit amet purus. 
             Aliquam bibendum nulla id urna tincidunt, ut porta neque condimentum. Suspendisse potenti.
             Curabitur consectetur eget enim vitae rutrum.
             Vivamus condimentum, nunc id hendrerit facilisis, augue nunc convallis mi, in euismod est nisi vel dui.
             Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
             Donec consectetur molestie ligula, eget egestas odio. Mauris blandit, velit eu molestie facilisis, eros purus fringilla ligula,
             ac lobortis sem enim ut ante. In nisi libero, accumsan id dui id, hendrerit aliquet diam. Nam vehicula malesuada tellus quis congue.
             In dapibus quam sit amet ullamcorper suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sed magna felis"""
        }

    def getTemplateParams(self):
        return self.params
