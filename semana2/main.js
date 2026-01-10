class Producto{
    constructor(nombre,precio){
        this.id = crypto.randomUUID();
        this.nombre = nombre;
        this.precio = precio;
    }
}


class Inventario{
    constructor(){
        this.productos = new Map();
        this.nombres = new Set();
    }

    findNombre(nombre){
        return this.nombres.has(nombre);
    }

    addProducto(producto){
        if (this.findNombre(producto.nombre)){return};
        this.productos.set(producto.id, producto);
        this.nombres.add(producto.nombre);
    }

    getProductById(id){
        const producto = this.productos.get(id);
        if (!producto){return};
       return producto;
    }

    deleteProductoById(id){
        const producto = this.productos.get(id)
        if (!producto){return};
        this.nombres.delete(producto.nombre);
        this.productos.delete(id);
        
    }
    
    updateProductById(id, {nombre,precio} = {}){
        const producto = this.productos.get(id);
        if (!producto){return};

        if (precio !== undefined){
        producto.precio = precio;
        }

        if (nombre !== undefined){
            if (this.nombres.has(nombre)){return};

            this.nombres.delete(producto.nombre);
            this.nombres.add(nombre)
            producto.nombre = nombre;
        }

    }

}

