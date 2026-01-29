// services/users.service.js

import { store } from "../store/store.js";

import { httpGet,httpPost,httpPut,httpPatch,httpDelete } from "./http.js";



const { endpoint } = store.users;

// READ
export async function getUsers() {
  store.users.data = await httpGet(endpoint);
  return store.users.data;
}

// CREATE
export function createUser(user) {
  return httpPost(endpoint, user);
}

// UPDATE (reemplazo total)
export function updateUser(id, user) {
  return httpPut(`${endpoint}/${id}`, user);
}

// PATCH (solo edad)
export function patchUserEdad(id, edad) {
  return httpPatch(`${endpoint}/${id}`, { edad });
}

// DELETE
export function deleteUser(id) {
  return httpDelete(`${endpoint}/${id}`);
}
