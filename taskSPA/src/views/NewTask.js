//NewTask.js

import { Navbar } from '../components/Navbar.js';
import { addTask } from '../state/store.js';
import { router } from '../router/router.js';

export function NewTask() {
  const div = document.createElement('div');
  div.className = 'container';

  div.appendChild(Navbar());

  const input = document.createElement('input');
  input.placeholder = 'Título de la tarea';

  const button = document.createElement('button');
  button.textContent = 'Agregar';

  button.addEventListener('click', () => {
    if (input.value.trim()) {
      addTask(input.value);
      window.location.hash = '#/tasks';
      router();
    }
  });

  div.append(input, button);
  return div;
}
