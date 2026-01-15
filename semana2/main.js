//CRUD
export class Producto{
    constructor(nombre,precio){
        this.id = crypto.randomUUID();
        this.nombre = nombre;
        this.precio = precio;
    }
}


export class Inventario{
    constructor(){
        this.productosLocalStorage = localStorage.getItem("productosLS");
        this.nombresLocalStorage = localStorage.getItem("nombresLS");
        this.productos = this.productosLocalStorage ? new Map(JSON.parse(this.productosLocalStorage))  : new Map();
        this.nombres = this.nombresLocalStorage ? new Set(JSON.parse(this.nombresLocalStorage)) : new Set();
    }

    findNombre(nombre){
        return this.nombres.has(nombre);
    }

    saveLocalstorage(){
        localStorage.setItem("productosLS", JSON.stringify([...this.productos]));
        localStorage.setItem("nombresLS", JSON.stringify([...this.nombres]));
    }

    addProducto(producto){
        if (this.findNombre(producto.nombre)){return false};
        this.productos.set(producto.id, producto);
        this.nombres.add(producto.nombre);
        this.saveLocalstorage()

        return true
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
        this.saveLocalstorage()
        
    }
    
    updateProductById(id, {nombre,precio} = {}){
        const producto = this.productos.get(id);
        if (!producto){return};
        if (precio == "" ){precio = undefined}
        if (precio !== undefined){
        producto.precio = precio;
        }
        if (nombre.trim() == "") {nombre = undefined}
        if (nombre !== undefined){
            if (this.nombres.has(nombre)){return};

            this.nombres.delete(producto.nombre);
            this.nombres.add(nombre)
            producto.nombre = nombre;
            producto.precio = precio;

            this.saveLocalstorage();
        }

    }

}

