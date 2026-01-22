//Dashboard

import { render } from "../core/render.js";
import { store } from "../state/store.js";

export function Dashboard() {
  return `
    <h1>FlowDesk</h1>

    <nav>
      <a href="#/dashboard">Dashboard</a>
      <a href="#/projects">Proyectos</a>
    </nav>

    <section class="cards">
      <div class="card">📁 Proyectos: ${store.projects.length}</div>
      <div class="card">👤 Usuario: ${store.user ?? 'No autenticado'}</div>
    </section>

    <button data-action="login">Simular Login</button>
    <button data-action="logout">Logout</button>
  `;
}

window.addEventListener("click", e =>{
  const action = e.target.dataset.action;

  switch (action) {
    case "login":
      store.user = "yo";
      render(Dashboard());
      break;
    case "logout":
      store.user = null;
      render(Dashboard());
      break;


    default:
      break;
  }

}
)