export const store = {
    user : null,
    projects : []
}

export class Proyecto {
    constructor(nombre,ciudad,estado, datos){
        this.nombre = nombre,
        this.ciudad = ciudad,
        this.estado = estado,
        this.datos = datos
        
    }
}

export function addProyecto(proyecto){
    store.projects.push(proyecto);
}

export function updateProyecto(proyecto, nuevoEstado){
    proyecto.estado = nuevoEstado;
}
