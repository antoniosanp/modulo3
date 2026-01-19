// router.js

import { Home } from '../views/Home.js';
import { Login } from '../views/Login.js';
import { Tasks } from '../views/Tasks.js';
import { NewTask } from '../views/NewTask.js';
import { store } from '../state/store.js';

export function router() {
  const app = document.getElementById('app');
  const hash = window.location.hash  ?  window.location.hash : '#/';

  // Protección de rutas
  if (!store.user && (hash === '#/tasks' || hash === '#/new-task')) {
    window.location.hash = '#/login';
    return;
  }

  app.innerHTML = '';

  switch (hash) {
    case '#/':
      app.appendChild(Home());
      break;
    case '#/login':
      app.appendChild(Login());
      break;
    case '#/tasks':
      app.appendChild(Tasks());
      break;
    case '#/new-task':
      app.appendChild(NewTask());
      break;
    default:
      app.innerHTML = '<h2>404</h2>';
  }
}
