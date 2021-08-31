import {categoriesListBuilder} from "./main_menu_categories_builder.js";

class MainMenuData {
    private readonly urls:any
    private readonly basicApiUrl: string

    constructor() {
        this.basicApiUrl = '/gadmin/api/'
        this.urls = {
            categoriesUrl: this.basicApiUrl + 'main_menu_categories/',
            menuElementsUrl: this.basicApiUrl + 'menu_elements/'
        }
    }

    public getMainMenuCategoriesData() {
        fetch(this.urls.categoriesUrl,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json()
        }).then(result =>{
            const mainMenuContainer = document.querySelector('#side_bar_container .menu_area')
            // @ts-ignore
            mainMenuContainer.innerHTML = categoriesListBuilder(result)
        })
    }

}

export default MainMenuData