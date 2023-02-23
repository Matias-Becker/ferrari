
const contenedorProductos = document.getElementById('contenedor-productos')   //sección para obtener todos los Id
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')              

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {     //función para vaciar el carrito
    Swal.fire({
        title: '¿Estás seguro?',
        text: "Se vaciará el carrito",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText:'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Listo!',
            'Tu carrito ahora está vacío',
            'success'
          )
          carrito.length = 0
          actualizarCarrito()
          localStorage.clear() //vacío el local storage
        }
      })
    
})

const pintarProducto=(stockProductos)=>{           //función para pintar los productos del stock
    stockProductos.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
        <img src=${producto.img} alt= "">
        <h3>${producto.nombre}</h3>
        <p>${producto.desc}</p>
        <p class="precioProducto">Precio:$ ${producto.precio}</p>
        <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
        `
        contenedorProductos.appendChild(div)

        const boton = document.getElementById(`agregar${producto.id}`) //cuando se hace click en boton agregar se llama a función agregarAlCarrito 
            boton.addEventListener('click', () => {
            agregarAlCarrito(producto.id)
        })
    })
}

const agregarAlCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId) 

    if (existe){ 
        const prod = carrito.map (prod => { //si el producto ya esta en el carrito entoces solo se aumenta la cantidad del mismo
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { //si no se agrega el producto al carrito y se pinta 
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }

    actualizarCarrito() 
}

const eliminarDelCarrito = (prodId) => { //función para eliminar un elemento del carrito
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item) 
    carrito.splice(indice, 1)
    localStorage.removeItem('carrito')//se elimina el item del localstorage
    actualizarCarrito()
}

const actualizarCarrito = () => { //función para actualizar el carrito cuando se realizan cambios en el mismo
    contenedorCarrito.innerHTML = "" 
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>   
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito)) //se guarda el carrito en el localstorage

    })
    
    contadorCarrito.innerText = carrito.length //el contador del carrito es igual a la longitud del array carrito
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
}