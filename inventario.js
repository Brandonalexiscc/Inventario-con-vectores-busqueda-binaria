export default class Inventario{
    constructor(){
        this.productos = [];
    }

    agregarProducto(producto){
        this.productos.push(producto);
        console.log(this.productos);
    }

    mostrarProducto(){
        let cadena = '';
        for (let i = 0; i < this.productos.length; i++){
            cadena += `<div class="card text-center  Tb.4">
                <div class="card.body">
                    <strong>Producto</strong>: ${this.productos[i].nombre}&nbsp;
                    <strong>Codigo</strong>: ${this.productos[i].codigo}&nbsp;
                    <strong>Cantidad</strong>: ${this.productos[i].cantidad}&nbsp;
                    <strong>Costo</strong>: ${this.productos[i].costo}
                </div>
            </div>
            `;
        }
        return cadena;
    }

    eliminarPorCodigo(codigo){ 
        let articulo = 0; 
        let producto = "";
        for (let i = 0; i <= this.productos.length; i++) {
            if (this.productos[i])
                if (codigo === this.productos[i].codigo) {
                    for (let b = i; b < this.productos.length - 1; b++)
                        this.productos[b] = this.productos[b + 1];

                    this.productos[this.productos.length - 1] = articulo;
                    this.productos.pop();
                    producto = `El elemento con código ${codigo} ha sido eliminado`;
                }
        }
        return producto;
    }
    
    //búsqueda binaria 
    buscarPorCodigo(codigo) {
        let producto = "";
        let right = this.productos.length - 1;
        let left = 0;
        let middle = Math.floor((right + left) / 2);
        while (left <= right){
            if (this.productos[middle].codigo === codigo) {
                producto = `Producto: ${this.productos[middle].nombre} 
                Código: ${this.productos[middle].codigo} 
                Cantidad: ${this.productos[middle].cantidad} 
                Costo: ${this.productos[middle].costo}`;
            }
            if (this.productos[middle].codigo < codigo) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
            middle = Math.floor((right + left) / 2);
        }
    }

    listaProductos(){
        let cadena = '';
        for (let i = 0; i < this.productos.length; i++){
            cadena += `<div class="card text-center  Tb.4">
            <div class="card.body">
                <strong>Producto</strong>: ${this.productos[i].nombre}&nbsp;
                <strong>Codigo</strong>: ${this.productos[i].codigo}&nbsp;
                <strong>Cantidad</strong>: ${this.productos[i].cantidad}&nbsp;
                <strong>Costo</strong>: ${this.productos[i].costo}
            </div>
        </div>
        `;
        }
        return cadena;
    }

    listarProductosOrdenInverso() {
        let cadena = '';
        for (let i = this.productos.length; i >= 0; i--) {
            if (this.productos[i])
                cadena += `<div class="card text-center  Tb.4">
                <div class="card.body">
                    <strong>Producto</strong>: ${this.productos[i].nombre}&nbsp;
                    <strong>Codigo</strong>: ${this.productos[i].codigo}&nbsp;
                    <strong>Cantidad</strong>: ${this.productos[i].cantidad}&nbsp;
                    <strong>Costo</strong>: ${this.productos[i].costo};
                </div>
                </div>
            `;
        }
        return cadena;
    }
}

