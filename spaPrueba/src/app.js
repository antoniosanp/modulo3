import { Footer } from "./components/Footer.js";
import { Navbar } from "./components/Navbar.js"
import { router } from './router/router.js';

const app = document.getElementById('app');
console.log("que chimbada")

export function render(view) {
  app.innerHTML = `
    ${Navbar()}
    <main>${view}</main>
    ${Footer() } 
    
  `;
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);