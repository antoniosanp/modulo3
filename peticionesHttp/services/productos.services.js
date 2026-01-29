// services/productos.service.js

import { store } from "../store/store.js";
import {
  httpGet,
  httpPost,
  httpPut,
  httpPatch,
  httpDelete
} from "./http.js";

const { endpoint } = store.productos;

// READ
export async function getProductos() {
  store.productos.data = await httpGet(endpoint);
  return store.productos.data;
}

// CREATE
export async function createProducto(producto) {
  await httpPost(endpoint, producto);
  return await getProductos()
}

// UPDATE (total)
export async function updateProducto(id, producto) {
  await httpPut(`${endpoint}/${id}`, producto);
  return await getProductos();
}

// PATCH (general)
export async function patchProducto(id, cambios) {
  await httpPatch(`${endpoint}/${id}`, cambios);
  return await getProductos();
}

// DELETE
export async function deleteProducto(id) {
  await httpDelete(`${endpoint}/${id}`);
  return await getProductos();
}
