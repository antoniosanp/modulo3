import { store } from "../store/store.js";
import { nuevoProyectoCard } from "../components/nuevoProyectoCard.js"; 

export function crearGUIproyectos(div){

   
    store.projects.forEach(element => {

        const card = nuevoProyectoCard(element)
    
        
        div.appendChild(card)      
    });
    
}

