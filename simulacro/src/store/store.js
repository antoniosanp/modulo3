//--------------------------------------------------------
// Estado Global

export const store = {

    users : [],
    productos : [],
    pedidos : [],
    current_user : null

}

//--------------------------------------------------------
// Clases



export class Usuario{
    constructor(nombre,email,password){
        this.nombre = nombre,
        this.email = email,
        this.password = password,
        this.rol = "visitante",
        this.pedidos = []
    }
}


export class Producto{
    constructor(nombre,precio){
        this.nombre = nombre,
        this.precio = precio
        
    }
}

export class Item{
    constructor(producto, cantidad){
        this.producto = producto,
        this.cantidad = cantidad
    }
}

export class Pedido{
    constructor(userID, items){
        this.userID = userID,
        this.items = items
        this.total = this.calcularTotal(),
        this.fecha = new Date().toISOString();
    }

    calcularTotal(){
        let total = 0;
        for (const item of this.items){
            total += (item.cantidad * item.producto.precio);
        }
        return total;
    }
}

