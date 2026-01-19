// Home.js

import { Navbar } from '../components/Navbar.js';

export function Home() {
  const div = document.createElement('div');
  div.className = 'container';

  div.appendChild(Navbar());

  div.innerHTML += `
    <h1>Bienvenido a TaskFlow</h1>
    <p>Organiza tus tareas fácilmente</p>
    <a href="#/tasks">Ir a tareas</a>
  `;

  return div;
}
