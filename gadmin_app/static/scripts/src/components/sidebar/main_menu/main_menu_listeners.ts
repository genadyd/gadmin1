import MainMenuData from "./MainMenuData.js";
import {linksBuilder} from "./builders/main_menu_links_builder.js";

export function getListByCategoriesListener(catElement: HTMLElement, mainMenuData: MainMenuData) {
    const parentId = catElement.dataset.main_menu_category_id || 0
    const linksArea = catElement.querySelector('.links_area')
    if (catElement.classList.contains('links_area_show')) {
        // @ts-ignore
        catElement.classList.remove('links_area_show')
    } else {
        if (linksArea && linksArea.querySelectorAll('.one_link').length == 0) {
            mainMenuData.getMainMenuLinksData(+parentId).then(result => {
                if (result.length > 0) {
                    linksArea.innerHTML = linksBuilder(result)
                }
            })
        }
        document.querySelectorAll('.links_area_show').forEach(el=>{
            el.classList.remove('links_area_show')
        })
        catElement.classList.add('links_area_show')
    }
}