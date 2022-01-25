import MainMenu from "./main_menu/main_menu.js";
class Sidebar {
    constructor() {
        this.mainMenu = new MainMenu();
        this.openCollapse();
        this.mainMenu.mainMenuCategoriesBuild();
    }
    openCollapse() {
        const menuOpenButton = document.querySelector('#main_header .left_area .menu_open_button');
        /*button change class*/
        menuOpenButton?.addEventListener('click', this.sideBarOpenCollapseHandler);
    }
    sideBarOpenCollapseHandler() {
        if (this.classList.contains('menu_not_collapsed')) {
            this.classList.remove('menu_not_collapsed');
            this.classList.add('menu_collapsed');
        }
        else {
            this.classList.add('menu_not_collapsed');
            this.classList.remove('menu_collapsed');
        }
        const sidePanel = document.querySelector('#side_bar_container');
        if (sidePanel?.classList.contains('collapsed')) {
            sidePanel.classList.remove('collapsed');
            sidePanel.classList.add('not_collapsed');
        }
        else {
            sidePanel?.classList.add('collapsed');
            sidePanel?.classList.remove('not_collapsed');
        }
    }
}
export default Sidebar;
