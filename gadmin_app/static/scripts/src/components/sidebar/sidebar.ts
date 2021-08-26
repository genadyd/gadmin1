class Sidebar {
    constructor() {
        this.openCollapse()
    }

    private openCollapse(): void {
        const menuOpenButton = document.querySelector('#main_header .left_area .menu_open_button')
        /*button change class*/
        menuOpenButton?.addEventListener('click', this.sideBarOpenCollapseHandler)
    }

    private sideBarOpenCollapseHandler(this: any) {
        if (this.classList.contains('menu_not_collapsed')) {
            this.classList.remove('menu_not_collapsed')
            this.classList.add('menu_collapsed')
        } else {
            this.classList.add('menu_not_collapsed')
            this.classList.remove('menu_collapsed')
        }
    }
}

export default Sidebar