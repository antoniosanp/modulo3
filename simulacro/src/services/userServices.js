import { store, API_URL } from "../store/store.js";


export async function getUsuarios() {
    const res = await fetch(`${API_URL}/users`)
    if (!res.ok) throw new Error("Error al obtener usuarios")

    const users = await res.json()
    store.users = users
    return users
}

//

export async function createUsuario(usuario) {
    const res = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuario)
    })

    if (!res.ok) throw new Error("Error al crear usuario")

    const nuevo = await res.json()
    store.users.push(nuevo)
    return nuevo
}

//

export async function addPedidoToUsuario(userId, pedidoId) {
    const user = store.users.find(u => u.id == userId)
    if (!user) throw new Error("Usuario no encontrado")

    const pedidosActualizados = [...user.pedidos, pedidoId]

    const res = await fetch(`${API_URL}/users/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pedidos: pedidosActualizados })
    })

    if (!res.ok) throw new Error("Error al actualizar usuario")

    user.pedidos = pedidosActualizados
}

//