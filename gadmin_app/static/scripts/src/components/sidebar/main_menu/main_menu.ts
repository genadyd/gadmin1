import {categoriesListBuilder} from "./builders/main_menu_categories_builder.js";
import MainMenuData from "./MainMenuData.js";
import {getListByCategoriesListener} from "./main_menu_listeners.js";

class MainMenu{
    private mainMenuData
    constructor() {
        this.mainMenuData = new MainMenuData()
    }
      public mainMenuCategoriesBuild():void {
        this.mainMenuData.getMainMenuCategoriesData().then(result => {
            const mainMenuContainer = document.querySelector('#side_bar_container .menu_area')
            if (mainMenuContainer && result) {
                mainMenuContainer.innerHTML = categoriesListBuilder(result)
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
                     const parentId = catElement.dataset.main_menu_category_id
                     getListByCategoriesListener(catElement, this.mainMenuData)
                 }
             })
         }
     }
}
export default MainMenu