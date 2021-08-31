export function categoriesListBuilder(data: any) {
    let categoriesListHtml = ''
    data.forEach(oneCat => {
        categoriesListHtml += `
         <div class="one_menu_element" data-main_menu_category_id="${oneCat.id}">
             <div class="left_side">
                <div class="icon_area">
                  <i class="bi bi-truck"></i>
                </div>
                <div class="main_element_text">${oneCat.title}</div>
             </div>
         </div>
         `
    })
   return categoriesListHtml
}