//Login.js

import { login } from '../state/store.js';
import { router } from '../router/router.js';

export function Login() {
  const div = document.createElement('div');
  div.className = 'container';

  const input = document.createElement('input');
  input.placeholder = 'Tu nombre';

  const button = document.createElement('button');
  button.textContent = 'Ingresar';

  button.addEventListener('click', () => {
    if (input.value.trim()) {
      login(input.value);
      window.location.hash = '#/';
      //router();
    }
  });

  div.append(input, button);
  return div;
}
