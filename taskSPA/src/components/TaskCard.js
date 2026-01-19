// TaskCard.js

import { completeTask } from '../state/store.js';
import { router } from '../router/router.js';

export function TaskCard(task) {
  const div = document.createElement('div');
  div.className = 'task';

  if (task.completed) div.classList.add('completed');

  const button = document.createElement('button');
  button.textContent = 'Completar';
  button.disabled = task.completed;

  button.addEventListener('click', () => {
    completeTask(task.id);
    router();
  });

  div.innerHTML = `
    <strong>${task.title}</strong>
    <p>${task.completed ? 'Completada' : 'Pendiente'}</p>
  `;

  div.appendChild(button);
  return div;
}
