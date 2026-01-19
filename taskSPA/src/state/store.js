//store.js

export const store = {
  user: null,
  tasks: [
  
  ]
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

}

export function completeTask(id) {
  const task = store.tasks.find(t => t.id === id);
  if (task) task.completed = true;
}
