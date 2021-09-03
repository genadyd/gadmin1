import {categoriesListBuilder} from "./builders/main_menu_categories_builder.js";
import MainMenuData from "./MainMenuData.js";
import {linksBuilder} from "./builders/main_menu_links_builder.js";

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
                     if (parentId){
                         this.mainMenuData.getMainMenuLinksData(+parentId).then(result => {
                             const linksArea = catElement.querySelector('.links_area')
                             if (linksArea) linksArea.innerHTML = linksBuilder(result)
                         })
                     }
                 }
             })
         }

     }
}
export default MainMenu