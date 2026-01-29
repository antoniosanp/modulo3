// app.js
console.log("hola")

import { getUsers, createUser, updateUser,patchUserEdad, deleteUser } from "./services/users.services.js";

import { getProductos, createProducto, updateProducto, patchProducto, deleteProducto } from "./services/productos.services.js";

const usersContainer = document.getElementById("users-container");
const productosContainer = document.getElementById("productos-container");

/* ================== RENDER ================== */

function renderUsers(users) {
  usersContainer.innerHTML = "";

  users.forEach(user => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <strong>${user.nombre}</strong>
      <p>${user.email}</p>
      <p>Edad: ${user.edad}</p>
      <button data-id="${user.id}" class="delete-user">Eliminar</button>
      <button data-id="${user.id}" class="edit-user">+1 edad</button>
    `;

    usersContainer.appendChild(card);
  });
}

function renderProductos(productos) {
  productosContainer.innerHTML = "";

  productos.forEach(prod => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <strong>${prod.nombre}</strong>
      <p>Precio: $${prod.precio}</p>
      <p>Stock: ${prod.stock}</p>
      <button data-id="${prod.id}" class="delete-producto">Eliminar</button>
      <button data-id="${prod.id}" class="edit-producto">-1 stock</button>
    `;

    productosContainer.appendChild(card);
  });
}

/* ================== INIT ================== */

async function init() {
  await getUsers();
  await getProductos();

  renderUsers(store.users.data);
  renderProductos(store.productos.data);
}

init();

init();

/* ================== FORMS ================== */

const userNombre = document.getElementById("user-nombre");
const userEmail  = document.getElementById("user-email");
const userEdad   = document.getElementById("user-edad");

const prodNombre = document.getElementById("prod-nombre");
const prodPrecio = document.getElementById("prod-precio");
const prodStock  = document.getElementById("prod-stock");


document.getElementById("user-form").addEventListener("submit", async e => {
  e.preventDefault();
    console.log("click");
    console.log(userNombre.value)
  const user = {
    nombre: userNombre.value,
    email: userEmail.value,
    edad: Number(userEdad.value)
  };

  renderUsers(await createUser(user));
  e.target.reset();
});

document.getElementById("producto-form").addEventListener("submit", async e => {
  e.preventDefault();

  const producto = {
    nombre: prodNombre.value,
    precio: Number(prodPrecio.value),
    stock: Number(prodStock.value)
  };

  renderProductos(await createProducto(producto));
  e.target.reset();
});

/* ================== ACTIONS (delegación) ================== */

usersContainer.addEventListener("click", async e => {
  const id = e.target.dataset.id;

  if (e.target.classList.contains("delete-user")) {
    renderUsers(await deleteUser(id));
  }

  if (e.target.classList.contains("edit-user")) {
    const user = (await getUsers()).find(u => u.id == id);
    renderUsers(await patchUserEdad(id, user.edad + 1));
  }
});

productosContainer.addEventListener("click", async e => {
  const id = e.target.dataset.id;

  if (e.target.classList.contains("delete-producto")) {
    renderProductos(await deleteProducto(id));
  }

  if (e.target.classList.contains("edit-producto")) {
    renderProductos(await patchProducto(id, { stock: -1 }));
  }
});
