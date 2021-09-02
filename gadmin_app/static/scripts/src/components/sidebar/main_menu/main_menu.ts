import {categoriesListBuilder} from "./main_menu_categories_builder.js";
import MainMenuData from "./MainMenuData.js";

class MainMenu{
    private mainMenuData
    constructor() {
        this.mainMenuData = new MainMenuData()
    }
      public mainMenuCategoriesBuild():void {
        this.mainMenuData.getMainMenuCategoriesData().then(result => {
            const mainMenuContainer = document.querySelector('#side_bar_container .menu_area')
            if (mainMenuContainer && result) mainMenuContainer.innerHTML = categoriesListBuilder(result)
        })
    }
}
export default MainMenu