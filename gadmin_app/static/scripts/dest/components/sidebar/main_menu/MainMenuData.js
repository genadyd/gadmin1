import { getCookie } from "../../../lib/cookies.js";
class MainMenuData {
    constructor() {
        this.basicApiUrl = '/gadmin/api/';
        this.urls = {
            categoriesUrl: this.basicApiUrl + 'main_menu_categories/',
            menuElementsUrl: this.basicApiUrl + 'menu_elements/',
            menuLinksList: this.basicApiUrl + 'main_menu_links/'
        };
        this.headers = {
            "X-CSRFToken": getCookie("csrftoken"),
            "Accept": "application/json",
            "Content-Type": "application/json"
        };
    }
    async getMainMenuCategoriesData() {
        return await fetch(this.urls.categoriesUrl, {
            method: 'GET',
            headers: this.headers
        }).then(response => {
            return response.json();
        });
    }
    async getMainMenuLinksData(categoryId = 0) {
        return await fetch(this.urls.menuLinksList + categoryId + '/', {
            method: 'GET',
            headers: this.headers
        }).then(response => {
            return response.json();
        });
    }
}
export default MainMenuData;
