//store.js

export const store = {
  user: null,
  tasks: localStorage.getItem("tareas") ? JSON.parse(localStorage.getItem("tareas"))  : []
};

export function login(name) {
  store.user = name;
}

export function addTask(title) {
  store.tasks.push({
    id: Date.now(),
    title,
    completed: false
  });
  localStorage.setItem("tareas", JSON.stringify(store.tasks));

}

export function completeTask(id) {
  const task = store.tasks.find(t => t.id === id);
  if (task) task.completed = true;
}
