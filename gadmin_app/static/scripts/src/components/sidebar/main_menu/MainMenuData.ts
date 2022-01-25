import {getCookie} from "../../../lib/cookies.js";

class MainMenuData {
    private readonly urls: any
    private readonly basicApiUrl: string
    private readonly headers: HeadersInit

    constructor() {
        this.basicApiUrl = '/gadmin/api/'
        this.urls = {
            categoriesUrl: this.basicApiUrl + 'main_menu_categories/',
            menuElementsUrl: this.basicApiUrl + 'menu_elements/',
            menuLinksList: this.basicApiUrl + 'main_menu_links/'
        }
        this.headers = {
            "X-CSRFToken": getCookie("csrftoken"),
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }

    public async getMainMenuCategoriesData(): Promise<any> {
        return await fetch(this.urls.categoriesUrl, {
            method: 'GET',
            headers: this.headers
        }).then(response => {
            return response.json()
        })
    }

    public async getMainMenuLinksData(categoryId: number = 0): Promise<any> {
        return await fetch(this.urls.menuLinksList + categoryId + '/', {
            method: 'GET',
            headers: this.headers
        }).then(response => {
            return response.json()
        })
    }

}

export default MainMenuData