import Sidebar from "./components/sidebar/sidebar.js";
class Main {
    constructor() {
        this.sidebar = new Sidebar();
    }
    index(name) {
        alert(`Hello ${name}`);
    }
}
const main = new Main();
