import Sidebar from "./components/sidebar/sidebar.js";


class Main{
    private sidebar:Sidebar
    constructor() {
        this.sidebar = new Sidebar()
    }
    index(name:string):void{
        alert( `Hello ${name}` )
    }
}
const main = new Main()


