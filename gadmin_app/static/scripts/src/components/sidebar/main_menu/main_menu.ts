
import MainMenuData from "./MainMenuData.js";
import {categoriesListBuilder} from "./builders/main_menu_categories_builder.js";
import {getListByCategoriesListener} from "./main_menu_listeners.js";

class MainMenu{
    private readonly mainMenuData
    constructor() {
        this.mainMenuData = new MainMenuData()
    }
      public mainMenuCategoriesBuild():void {
        this.mainMenuData.getMainMenuCategoriesData().then(result => {
            const mainMenuContainer = document.querySelector('#side_bar_container .menu_area')
            if (mainMenuContainer && result) {
                mainMenuContainer.innerHTML = categoriesListBuilder(result.data)
                this.getLinksByCategory()
            }
        })
    }
     private getLinksByCategory(){
        const menuCategoriesElements = document.querySelectorAll('.one_menu_element')
         let linksData = ''
         for(const catElement of menuCategoriesElements){
             catElement.addEventListener('click',(e)=>{
                 if (catElement instanceof HTMLElement){
                     const parentId = catElement.dataset.mainMenuCategoryId
                     getListByCategoriesListener(catElement, this.mainMenuData)
                 }
             })
         }
     }
}
export default MainMenu