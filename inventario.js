export default class Inventario{
    constructor(){
        this.productos = [];
    }

    agregarProducto(producto){
        this.productos.push(producto);
        console.log(this.productos);
    }

    mostrarProductoBusquedaBinaria(){
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
    
    buscarPorCodigo(codigo) {
        let cadena = '';
        for (let i = 0; i <= this.productos.length; i++) {
            if (this.productos[i])
                if (codigo === this.productos[i].codigo) {
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
        }
        return cadena;
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

    listarProductosOrdenInverso(left, right, cadena) {
        let cadena = '';
        for (let i = this.productos.length; i >= 0; i--) {
            if(left <= right){
                cadena += `<div class="card text-center Tb.4">`
                cadena += `<div class="card-body">`
                cadena += `<strong>Producto</strong>: ${this.productos[i].nombre}&nbsp;`
                cadena += `<strong>Codigo</strong>: ${this.productos[i].codigo}&nbsp;`
                cadena += `<strong>Cantidad</strong>: ${this.productos[i].cantidad}&nbsp;`
                cadena += `<strong>Costo</strong>: ${this.productos[i].costo}`
                cadena += `</div>`
                cadena += `</div>`
                const middle = Math.floor((left + right) / 2);
                this.listarProductosOrdenInverso(left, middle, cadena);
                this.listarProductosOrdenInverso(middle + 1, right, cadena);
                if(this.productos[middle] > this.productos[middle + 1]){
                    this.swap(this.productos, middle, middle +1);
                }
            }    
        }
        return cadena;
    }
}

