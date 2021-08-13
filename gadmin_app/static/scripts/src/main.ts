import Custom from "./custom.js";

class Main{
    index(name:string):void{
        alert( `Hello ${name}` )
    }
}
const main = new Main()
// main.index('WWWWWW')
const headerText:Element|null = document.querySelector('#main_header h2')
if(headerText) headerText.innerHTML = 'blabla'
const custom = new Custom()
console.log(custom.getsomeThind())