let Producto = []

fetch("./js/producto.json")
    .then(response => response.json())
    .then(data => {
        Producto = data;
        CargarProductos(Producto);
    })

const ContenedorProductos = document.querySelector("#contenedor-productos");
const BotonesCategorias = document.querySelectorAll(".boton-categoria");
const TituloPrincipal = document.querySelector("#titulo-principal");
let BotonesAgregar = document.querySelectorAll(".boton-agregar");
const Numerito = document.querySelector("#numerito");


function CargarProductos(ProductosElegidos) {

    ContenedorProductos.innerHTML = " ";

    ProductosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("tarjeta");
        div.innerHTML = `
        <img class="tarjeta-img" src="${producto.imagen}" alt="${producto.titulo}">
        <h2>${producto.titulo}</h2>
        <div class="tarjeta-descrip">
            <span>Marca: <strong>${producto.marca}</strong></span>
            <span>Talle: <strong>${producto.talle}</strong></span>
            <span>Precio: <strong>$${producto.precio}</strong></span>
            <span>Efectivo: <strong>${producto.efectivo} OFF</strong> </span>
        </div>
        <button class="boton-agregar" id="${producto.id}">Agregar</button>
        `;

        ContenedorProductos.append(div);

    })

    ActualizarBotonesAgregar();
}


BotonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        BotonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const ProductoCategoria = Producto.find(producto => producto.categoria.id === e.currentTarget.id);
            TituloPrincipal.innerText = ProductoCategoria.categoria.nombre;
            const ProductosBoton = Producto.filter(producto => producto.categoria.id === e.currentTarget.id);
            CargarProductos(ProductosBoton);
        } else {
            TituloPrincipal.innerText = "Todos nuestros productos";
            CargarProductos(Producto);
        }

    })
});

function ActualizarBotonesAgregar() {
    BotonesAgregar = document.querySelectorAll(".boton-agregar");

    BotonesAgregar.forEach(boton => {
        boton.addEventListener("click", AgregarAlACarrito);
    });
}

let ProductosEnCarrito;

let ProductosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));

if (ProductosEnCarritoLS) {
    ProductosEnCarrito = JSON.parse(ProductosEnCarritoLS);
    ActualizarNumerito();
} else {
    ProductosEnCarrito = [];
}

function AgregarAlACarrito(e) {

    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #4b33a8, #785ce9)",
            borderRadius: "2rem",
            textTransform: "uppercase",
            fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        onClick: function () { } // Callback after click
    }).showToast();

    const IdBoton = e.currentTarget.id;
    const ProductoAgregado = Producto.find(producto => producto.id === IdBoton);
    
    if(ProductosEnCarrito.some(producto => producto.id === IdBoton)) {
        const index = ProductosEnCarrito.findIndex(producto => producto.id === IdBoton);
        ProductosEnCarrito[index].cantidad++;
    } else {
        ProductoAgregado.cantidad = 1;
        ProductosEnCarrito.push(ProductoAgregado);
    }

    ActualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(ProductosEnCarrito));
}

function ActualizarNumerito(){
    let NuevoNumerito = ProductosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    Numerito.innerText = NuevoNumerito;
}