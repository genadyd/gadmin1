export function categoriesListBuilder(data) {
    let categoriesListHtml = '';
    data.forEach(oneCat => {
        categoriesListHtml += `
         <div class="one_menu_element" data-main_menu_category_id="${oneCat.id}">
             <div class="inner">
                   <div class="left_side">
                      <div class="icon_area">
                        <i class="${oneCat.icon}"></i>
                      </div>
                      <div class="main_element_text">${oneCat.title}</div>
                   </div>
                   <div class="open_close_sub_menu">
                      <i class="bi bi-caret-down-fill"></i>
                   </div>
             </div>
             <div class="links_area"></div>
         </div>
         `;
    });
    return categoriesListHtml;
}
