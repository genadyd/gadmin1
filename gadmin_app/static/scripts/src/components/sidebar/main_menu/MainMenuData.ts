import {categoriesListBuilder} from "./main_menu_categories_builder.js";

class MainMenuData {
    private readonly urls: any
    private readonly basicApiUrl: string

    constructor() {
        this.basicApiUrl = '/gadmin/api/'
        this.urls = {
            categoriesUrl: this.basicApiUrl + 'main_menu_categories/',
            menuElementsUrl: this.basicApiUrl + 'menu_elements/'
        }
    }

    public async getMainMenuCategoriesData():Promise<any> {
        return await fetch(this.urls.categoriesUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json()
        })
    }

}

export default MainMenuData