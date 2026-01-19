// Tasks.js

import { Navbar } from '../components/Navbar.js';
import { store } from '../state/store.js';
import { TaskCard } from '../components/TaskCard.js';

export function Tasks() {
  const div = document.createElement('div');
  div.className = 'container';

  div.appendChild(Navbar());

  const title = document.createElement('h2');
  title.textContent = 'Mis tareas';
  div.appendChild(title);

  store.tasks.forEach(task => {
    div.appendChild(TaskCard(task));
  });

  return div;
}
