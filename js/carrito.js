let ProductosEnCarrito = localStorage.getItem("productos-en-carrito");
ProductosEnCarrito = JSON.parse(ProductosEnCarrito);

const ContenedorCarritoVacio = document.querySelector("#carrito-vacio");
const ContenedorCarritoProductos = document.querySelector("#carrito-productos");
const ContenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const ContenedorCarritoComprado = document.querySelector("#carrito-comprado");
let BotonesEliminar = document.querySelectorAll(".carrito-tarjeta-eliminar");
const BotonVaciar = document.querySelector("#carrito-acciones-vaciar");
const ContenedorTotal = document.querySelector("#total");
const BotonComprar = document.querySelector("#carrito-acciones-comprar");


function CargarProductosCarrito() {

    if (ProductosEnCarrito && ProductosEnCarrito.length > 0) {



        ContenedorCarritoVacio.classList.add("disabled");
        ContenedorCarritoProductos.classList.remove("disabled");
        ContenedorCarritoAcciones.classList.remove("disabled");
        ContenedorCarritoComprado.classList.add("disabled");
    
        ContenedorCarritoProductos.innerHTML = "";
    
        ProductosEnCarrito.forEach(producto => {
    
            const div = document.createElement("div");
            div.classList.add("carrito-tarjeta");
            div.innerHTML = `
                <img class="carrito-tarjeta-img" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="carrito-tarjeta-nombre">
                    <small>buzo</small>
                    <h1>${producto.titulo}</h1>
                </div>
                <div class="carrito-tarjeta-cantidad" >
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="carrito-tarjeta-precio" >
                    <small>Precio</small>
                    <p>$${producto.precio}</p>
                </div>
                <div class="carrito-tarjeta-subtotal" >
                    <small>Subtotal</small>
                    <p>$${producto.precio * producto.cantidad}</p>
                </div>
                <button class="carrito-tarjeta-eliminar" id="${producto.id}"><i class="bi bi-trash3-fill"></i></button>
            `;
        
        ContenedorCarritoProductos.append(div);
    
        })

        ActualizarBotonesEliminar();
        ActualizarTotal();

    } else {
        ContenedorCarritoVacio.classList.remove("disabled");
        ContenedorCarritoProductos.classList.add("disabled");
        ContenedorCarritoAcciones.classList.add("disabled");
        ContenedorCarritoComprado.classList.add("disabled");
    }



}

CargarProductosCarrito();

function ActualizarBotonesEliminar() {
    BotonesEliminar = document.querySelectorAll(".carrito-tarjeta-eliminar");

    BotonesEliminar.forEach(boton => {
        boton.addEventListener("click", EliminarDelCarrito);
    });
}

function EliminarDelCarrito(e) {
    const IdBoton = e.currentTarget.id;
    const index = ProductosEnCarrito.findIndex(producto => producto.id === IdBoton);
    ProductosEnCarrito.splice(index, 1);
    CargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(ProductosEnCarrito));

    
}

BotonVaciar.addEventListener("click", VaciarCarrito);

function VaciarCarrito() {
    ProductosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(ProductosEnCarrito));
    CargarProductosCarrito();
}

function ActualizarTotal() {
    const TotalCalculado = ProductosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${TotalCalculado}`;
}

BotonComprar.addEventListener("click", ComprarCarrito);

function ComprarCarrito() {
    ProductosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(ProductosEnCarrito));

    ContenedorCarritoVacio.classList.add("disabled");
    ContenedorCarritoProductos.classList.add("disabled");
    ContenedorCarritoAcciones.classList.add("disabled");
    ContenedorCarritoComprado.classList.remove("disabled");

}














// const ProductosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));
// ProductosEnCarrito = JSON.parse(ProductosEnCarrito);

// const ContenedorCarritoVacio = document.querySelector("#carrito-vacio");
// const ContenedorCarritoProductos = document.querySelector("#carrito-productos");
// const ContenedorCarritoAcciones = document.querySelector("#carrito-acciones");
// const ContenedorCarritoComprado = document.querySelector("#carrito-comprado");
// let BotonesEliminar = document.querySelectorAll(".carrito-tarjeta-eliminar");
// const BotonVaciar = document.querySelector("#carrito-acciones-vaciar");
// const ContenedorTotal = document.querySelector("#total");
// const BotonComprar = document.querySelector("#carrito-acciones-comprar");

// function CargarProductosCarrito() {
//     if (ProductosEnCarrito && ProductosEnCarrito.length > 0) {

//         ContenedorCarritoVacio.classList.add("disabled");
//         ContenedorCarritoProductos.classList.remove("disabled");
//         ContenedorCarritoAcciones.classList.remove("disabled");
//         ContenedorCarritoComprado.classList.add("disabled");
    
//         ContenedorCarritoProductos.innerHTML = "";
    
//         ProductosEnCarrito.forEach(producto => {
    
//             const div = document.createElement("div");
//             div.classList.add("carrito-tarjeta");
//             div.innerHTML = `
//             <img class="carrito-tarjeta-img" src="${producto.imagen}" alt="${producto.titulo}">
//                                 <div class="carrito-tarjeta-nombre">
//                                     <small>buzo</small>
//                                     <h1>${producto.titulo}</h1>
//                                 </div>
//                                 <div class="carrito-tarjeta-cantidad" >
//                                     <small>Cantidad</small>
//                                     <p>${producto.cantidad}</p>
//                                 </div>
//                                 <div class="carrito-tarjeta-precio" >
//                                     <small>Precio</small>
//                                     <p>$${producto.precio}</p>
//                                 </div>
//                                 <div class="carrito-tarjeta-subtotal" >
//                                     <small>Subtotal</small>
//                                     <p>$${producto.precio * producto.cantidad}</p>
//                                 </div>
//                                 <button class="carrito-tarjeta-eliminar" id="${producto.id}"><i class="bi bi-trash3-fill"></i></button>
//             `;
    
//             ContenedorCarritoProductos.append(div);
//         })
    
//         ActualizarBotonesEliminar();
//         ActualizarTotal();
    
//     } else {
    
//         ContenedorCarritoVacio.classList.remove("disabled");
//         ContenedorCarritoProductos.classList.add("disabled");
//         ContenedorCarritoAcciones.classList.add("disabled");
//         ContenedorCarritoComprado.classList.add("disabled");
//     }


// }


// CargarProductosCarrito();


// function ActualizarBotonesEliminar() {
//     BotonesEliminar = document.querySelectorAll(".carrito-tarjeta-eliminar");

//     BotonesEliminar.forEach(boton => {
//         boton.addEventListener("click", EliminarDelCarrito);
//     });
// }

// function EliminarDelCarrito(e) {

//     Toastify({
//         text: "Producto eliminado",
//         duration: 3000,
//         close: true,
//         gravity: "top", // `top` or `bottom`
//         position: "right", // `left`, `center` or `right`
//         stopOnFocus: true, // Prevents dismissing of toast on hover
//         style: {
//             background: "linear-gradient(to right, #4b33a8, #785ce9)",
//             borderRadius: "2rem",
//             textTransform: "uppercase",
//             fontSize: ".75rem"
//         },
//         offset: {
//             x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
//             y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
//         },
//         onClick: function () { } // Callback after click
//     }).showToast();

//     const IdBoton = e.currentTarget.id;
//     const index = ProductosEnCarrito.findIndex(producto => producto.id === IdBoton);

//     ProductosEnCarrito.splice(index, 1);
//     CargarProductosCarrito();

//     localStorage.setItem("productos-en-carrito", JSON.stringify(ProductosEnCarrito));
    


// }

// BotonVaciar.addEventListener("click", VaciarCarrito);
// function VaciarCarrito() {

//     Swal.fire({
//         title: '¿Estás seguro?',
//         icon: 'question',
//         html: `Se van a borrar ${ProductosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)} productos.`,
//         showCancelButton: true,
//         focusConfirm: false,
//         confirmButtonText: 'Sí',
//         cancelButtonText: 'No'
//     }).then((result) => {
//         if (result.isConfirmed) {
//             ProductosEnCarrito.length = 0;
//             localStorage.setItem("productos-en-carrito", JSON.stringify(ProductosEnCarrito));
//             PargarProductosCarrito();
//         }
//     })
// }

// function ActualizarTotal() {
//     const TotalCalculado = ProductosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
//     total.innerText = `$${TotalCalculado}`;
// }

// BotonComprar.addEventListener("click", ComprarCarrito);
// function ComprarCarrito() {

//     ProductosEnCarrito.length = 0;
//     localStorage.setItem("productos-en-carrito", JSON.stringify(ProductosEnCarrito));

//     ContenedorCarritoVacio.classList.add("disabled");
//     ContenedorCarritoProductos.classList.add("disabled");
//     ContenedorCarritoAcciones.classList.add("disabled");
//     ContenedorCarritoComprado.classList.remove("disabled");

// }

