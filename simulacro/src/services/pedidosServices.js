import { store, API_URL } from "../store/store.js";

export async function createPedido(pedido) {
    const res = await fetch(`${API_URL}/pedidos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pedido)
    })

    if (!res.ok) throw new Error("Error al crear pedido")

    const nuevoPedido = await res.json()
    store.pedidos.push(nuevoPedido)
    return nuevoPedido
}

//

export async function getPedidos() {
    const res = await fetch(`${API_URL}/pedidos`)
    if (!res.ok) throw new Error("Error al obtener pedidos")

    const pedidos = await res.json()
    store.pedidos = pedidos
    return pedidos
}

//

export function getPedidosByUser(userId) {
    return store.pedidos.filter(p => p.userID == userId)
}

//