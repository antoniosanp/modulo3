const API_URL = "http://localhost:3000/tareas";
const lista = document.getElementById("lista");
const form = document.getElementById("form");
const tituloInput = document.getElementById("titulo");

// Obtener tareas
async function obtenerTareas() {
  const res = await fetch(API_URL);
  const tareas = await res.json();

  lista.innerHTML = "";
  tareas.forEach(tarea => {
    const li = document.createElement("li");
    li.textContent = tarea.titulo;

    const btn = document.createElement("button");
    btn.textContent = "❌";
    btn.onclick = () => eliminarTarea(tarea.id);

    li.appendChild(btn);
    lista.appendChild(li);
  });
}

// Crear tarea
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nuevaTarea = {
    titulo: tituloInput.value,
    completada: false
  };

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nuevaTarea)
  });

  tituloInput.value = "";
  obtenerTareas();
});

// Eliminar tarea
async function eliminarTarea(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  obtenerTareas();
}

// Inicializar
obtenerTareas();
