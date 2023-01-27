
// const carrito = []

// const ordenarMenorMayor = () =>{
//     productos.sort((a, b)=> a.precio-b.precio)
//     mostrarListaOrdenada()
// };

// const ordenarMayorMenor = () =>{
//     productos.sort((a, b)=> b.precio-a.precio)
//     mostrarListaOrdenada()
// };

// const mostrarListaOrdenada = () =>{
//     const listaOrdenada=productos.map(producto =>{
//         return"-"+producto.nombre+"$"+producto.precio
//     })
//     alert("Lista de precios:"+"\n\n"+listaOrdenada.join("\n"))
//     comprarProductos(listaOrdenada)
// };

// const comprarProductos = (listaOrdenada) =>{
//     let productoNombre=""
//     let productoCantidad=0
//     let otroProducto=false

//     do{
//         productoNombre= prompt("¿Qué producto desea comprar?"+"\n\n"+listaOrdenada.join("\n"))
//         productoCantidad=parseInt(prompt("¿Cuántos queres comprar?"))
        
//         const producto= productos.find(producto=> producto.nombre.toLowerCase()===productoNombre.toLowerCase())
        
//         if (producto){
//             agregarAlCarrito(producto, producto.id, productoCantidad)
//         }else{
//             alert("El producto no se encuentra en el catálogo")
//         }

//         otroProducto=confirm("¿Quiere agregar otro producto?")
//     }while(otroProducto);
//     confirmarCompra()
// };

// const agregarAlCarrito = (producto, productoId, productoCantidad) =>{
//     const productoRepetido= carrito.find(producto=> producto.id===productoId)
//     if (!productoRepetido){
//         producto.cantidad= productoCantidad
//         carrito.push(producto)
//     }else{
//         productoRepetido.cantidad+= productoCantidad
//     }
// };

// const eliminarProductoCarrito=(nombreProductoAEliminar)=>{
//     carrito.forEach((producto, index)=>{
//         if(producto.nombre.toLowerCase()===nombreProductoAEliminar.toLowerCase()){
//             if(producto.cantidad > 1){
//                 producto.cantidad=producto.cantidad-1
//             }else{
//                 carrito.splice(index, 1)
//             }
//         }
//     })
//     confirmarCompra()
// };

// const confirmarCompra = () =>{
//     const listaOrdenada= carrito.map(producto=>{
//         return "-"+producto.nombre+"/ Cantidad "+producto.cantidad
//     })

//     const isCheckout = confirm("checkout:"+"\n\n"+listaOrdenada.join("\n")+"\n\n Para continuar presione 'Aceptar' sino 'Cancelar' para eliminar un producto del carrito")

//     if(isCheckout){
//         finalizarCompra(listaOrdenada)
//     }else{
//         const productoAEliminar= prompt("Ingrese el nombre del producto a eliminar:")
//         eliminarProductoCarrito(productoAEliminar)
//     }
// };

// const finalizarCompra = (listaOrdenada) =>{
//     const cantidadTotal= carrito.reduce((acc, item)=> acc+item.cantidad, 0)
//     const precioTotal= carrito.reduce((acc, item)=> acc+item.cantidad*item.precio, 0)

//     alert("Detalle de su compra:"
//     +"\n\n"+listaOrdenada.join("\n")
//     +"\n\nTotal de productos: "+cantidadTotal
//     +"\n\nEl total de su compra es: $"+precioTotal
//     +"\n\nGracias por su compra!")
// };

// const comprar = () =>{
//     const productosBaratos= confirm("¿Querés ordenar la lista de productos del mas barato al mas caro?")

//     if(productosBaratos){
//         ordenarMenorMayor()
//     }else{
//         ordenarMayorMenor()
//     }
// };

// comprar();

const pintarProductos=(productos)=>{
    const contenedor= document.getElementById("producto-contenedor")

    productos.forEach(function (producto) {
            const div = document.createElement("div");
            div.classList.add("card");
            div.innerHTML += `<div class"card-image>
                            <img src=${producto.imagen}>
                            <span class="card-title">${producto.nombre}</span>
                            <a class="btn-floating halfway-fab waves-effect waves-light red"><i id=${producto, id} class=
                        </div>
                        <div class="card-content">
                            <p>${producto.desc}</p>
                            <p>${producto.precio}</p>
                        </div>
                    `;
        });
}