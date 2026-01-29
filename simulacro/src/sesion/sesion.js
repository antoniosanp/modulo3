import { getPedidos } from "../services/pedidosServices.js";
import { getUsuarios } from "../services/userServices.js";
import { getProductos } from "../services/productServices.js";
import { store } from "../store/store";

// control de sesion y login

export function iniciarSesion(email){

    const user = findUser(email);
    const {password,... userSinPassword} = user; 
    store.current_user = userSinPassword, 
    localStorage.setItem("current_user", JSON.stringify(store.current_user));
    console.log(user)

}

export function cerrarSesion(){

    store.current_user = null;
    localStorage.removeItem("current_user")
}

export function findUser(email){
    for (const user of store.users)
    {
        if (user.email === email) {return  user};
    }
    return null
}

//----------------------------------------------------------------------
// localstorage

function cargarLocalStorage(){
    const user = JSON.parse(localStorage.getItem("current_user"));
    store.current_user = user;
}

//---------------------------------------------------------------------

export async function iniciarDatos() {

    cargarLocalStorage();
    store.users = await getUsuarios();
    store.productos = await getProductos();
    store.pedidos = await getPedidos();
    
}
//---------------------------------------------------------------------

