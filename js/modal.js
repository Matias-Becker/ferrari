// const modalContenedor= document.querySelector(".modal-contenedor")
// const abrirCarrito= document.getElementById("cesta-carrito")
// const cerrarCarrito= document.getElementById("btn-cerrar-carrito")

// abrirCarrito.addEventListener("click", ()=>{
//     modalContenedor.classList.toggle("modal-active")
// })

// cerrarCarrito.addEventListener("click", ()=>{
//     modalContenedor.classList.toggle("modal-active")
// })

// modalContenedor.addEventListener("click", ()=>{
//     cerrarCarrito.click()
// })


const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]


botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) =>{
    contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation() 
})