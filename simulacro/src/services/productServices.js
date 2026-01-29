import { store, API_URL } from "../store/store.js";

export async function getProductos() {
    const res = await fetch(`${API_URL}/productos`)
    if (!res.ok) throw new Error("Error al obtener productos")

    const productos = await res.json()
    store.productos = productos
    return productos
}

//

export async function createProducto(producto) {
    const res = await fetch(`${API_URL}/productos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(producto)
    })

    if (!res.ok) throw new Error("Error al crear producto")

    const nuevo = await res.json()
    store.productos.push(nuevo)
    return nuevo
}

//

export async function updateProducto(id, cambios) {
    const res = await fetch(`${API_URL}/productos/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cambios)
    })

    if (!res.ok) throw new Error("Error al actualizar producto")

    const actualizado = await res.json()
    const index = store.productos.findIndex(p => p.id == id)
    store.productos[index] = actualizado
}

//

export async function deleteProducto(id) {
    const res = await fetch(`${API_URL}/productos/${id}`, {
        method: "DELETE"
    })

    if (!res.ok) throw new Error("Error al eliminar producto")

    store.productos = store.productos.filter(p => p.id != id)
}
