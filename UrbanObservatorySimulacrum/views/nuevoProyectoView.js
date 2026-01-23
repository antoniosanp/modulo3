import { getWeather } from "../services/getWeather.js";
import { addProyecto } from "../store/store.js";
import { Proyecto } from "../store/store.js";
import { store } from "../store/store.js";

function submitAux(nombre, ciudad, estado, datos){
  const nuevoProyecto = 
  new Proyecto(nombre, ciudad, estado, datos);
  addProyecto(nuevoProyecto)

}

export function nuevoProyecto(){
    const nuevoProyectoView = document.createElement("main")

    nuevoProyectoView.className = "container"
    nuevoProyectoView.innerHTML = 
    `
    
    <section class="create-project-container">

      <header class="create-header">
        <h2>Crear nuevo proyecto</h2>
        <p>Registra un proyecto urbano para monitoreo climático</p>
      </header>

      <form class="create-form" id="createProjectForm">

        <div class="form-group">
          <label for="name">Nombre del proyecto</label>
          <input type="text" id="name" placeholder="Monitoreo Ciudad de Bogotá" required />
        </div>

        <div class="form-group">
          <label for="city">Ciudad</label>
          <input type="text" id="city" placeholder="Bogotá" required />
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="lat">Latitud</label>
            <input type="number" id="lat" step="any" placeholder="4.7110" required />
          </div>

          <div class="form-group">
            <label for="lon">Longitud</label>
            <input type="number" id="lon" step="any" placeholder="-74.0721" required />
          </div>
        </div>

        <div class="form-group">
          <label for="status">Estado del proyecto</label>
          <select id="status" required>
            <option value="">Selecciona un estado</option>
            <option value="activo">Activo</option>
            <option value="pendiente">Pendiente</option>
            <option value="finalizado">Finalizado</option>
          </select>
        </div>

        <div class="form-actions">
          <button id="guardar" type="submit" class="btn btn-primary">
            Guardar proyecto
          </button>
          <a href="index.html" class="btn btn-outline">
            Cancelar
          </a>
        </div>

        <p class="form-message success hidden">
          ✅ Proyecto creado exitosamente
        </p>

        <p class="form-message error hidden">
          ❌ Error al crear el proyecto
        </p>

      </form>

    </section>
  


    `

    const nombreProyecto = nuevoProyectoView.querySelector("#name");
    const ciudadProyecto = nuevoProyectoView.querySelector("#city");
    
    const lat = nuevoProyectoView.querySelector("#lat");
    const lon = nuevoProyectoView.querySelector("#lon");

    const status = nuevoProyectoView.querySelector("#status");
    const formProyecto = nuevoProyectoView.querySelector("form");

    formProyecto.addEventListener("submit", async (e) =>{

      e.preventDefault();

      const datos = await getWeather(lon.value, lat.value);
      console.log(datos)

      submitAux(nombreProyecto.value, ciudadProyecto.value,status.value,datos)
      console.log(store.projects)

    })


    
    
    return nuevoProyectoView;

}