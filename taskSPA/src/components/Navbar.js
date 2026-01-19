// Navbar.js

import { store } from '../state/store.js';

export function Navbar() {
  const nav = document.createElement('nav');

  nav.innerHTML = `
    <a href="#/">Home</a>
    <a href="#/tasks">Tasks</a>
    <a href="#/new-task">New Task</a>
    <span style="float:right">
      ${store.user ? `👤 ${store.user}` : ''}
    </span>
  `;

  return nav;
}
