import Custom from "./custom.js";
class Main {
    index(name) {
        alert(`Hello ${name}`);
    }
}
const main = new Main();
main.index('RRRRRR');
const custom = new Custom();
console.log(custom.getsomeThind());
