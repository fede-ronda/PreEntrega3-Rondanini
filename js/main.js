const Productos = [
    {
        id: "buzo-01",
        titulo: "Buzo Azul",
        imagen: "./img/buzos/buzo-azul.png",
        marca: "DIABLXS",
        talle: "M al XL",
        efectivo: "10%",
        categoria: {
            nombre: "buzos",
            id: "buzos"
        },
        precio: 5999
    },
    {
        id: "buzo-02",
        titulo: "Buzo Blanco",
        imagen: "./img/buzos/buzo-blanco.png",
        marca: "DIABLXS",
        talle: "M al XL",
        efectivo: "10%",
        categoria: {
            nombre: "buzos",
            id: "buzos"
        },
        precio: 5599
    },
    {
        id: "buzo-03",
        titulo: "Buzo Negro",
        imagen: "./img/buzos/buzo-negro.png",
        marca: "DIABLXS",
        talle: "M al XL",
        efectivo: "10%",
        categoria: {
            nombre: "buzos",
            id: "buzos"
        },
        precio: 5599
    },
    {
        id: "buzo-04",
        titulo: "Buzo Rojo",
        imagen: "./img/buzos/buzo-rojo.png",
        marca: "DIABLXS",
        talle: "M al XL",
        efectivo: "10%",
        categoria: {
            nombre: "buzos",
            id: "buzos"
        },
        precio: 5999
    },
    {
        id: "buzo-05",
        titulo: "Buzo Verde",
        imagen: "./img/buzos/buzo-verde.png",
        marca: "DIABLXS",
        talle: "M al XL",
        efectivo: "10%",
        categoria: {
            nombre: "buzos",
            id: "buzos"
        },
        precio: 5999
    },
    {
        id: "buzo-06",
        titulo: "Buzo Violeta",
        imagen: "./img/buzos/buzo-violeta.png",
        marca: "DIABLXS",
        talle: "M al XL",
        efectivo: "10%",
        categoria: {
            nombre: "buzos",
            id: "buzos"
        },
        precio: 5999,
    },
    {
        id: "pantalon-01",
        titulo: "Pantalon Amarillo",
        imagen: "./img/pantalones/pantalon-amarillo.png",
        marca: "DIABLXS",
        talle: "M al XL",
        efectivo: "10%",
        categoria: {
            nombre: "pantalones",
            id: "pantalones"
        },
        precio: 5999,
    },
    {
        id: "pantalon-02",
        titulo: "Pantalon Azul",
        imagen: "./img/pantalones/pantalon-azul.png",
        marca: "DIABLXS",
        talle: "M al XL",
        efectivo: "10%",
        categoria: {
            nombre: "pantalones",
            id: "pantalones"
        },
        precio: 6599,
    },
    {
        id: "pantalon-03",
        titulo: "Pantalon Celeste",
        imagen: "./img/pantalones/pantalon-celeste.png",
        marca: "DIABLXS",
        talle: "M al XL",
        efectivo: "10%",
        categoria: {
            nombre: "pantalones",
            id: "pantalones"
        },
        precio: 6599,
    },
    {
        id: "pantalon-04",
        titulo: "Pantalon Negro",
        imagen: "./img/pantalones/pantalon-negro.png",
        marca: "DIABLXS",
        talle: "M al XL",
        efectivo: "10%",
        categoria: {
            nombre: "pantalones",
            id: "pantalones"
        },
        precio: 6299,
    },
    {
        id: "pantalon-05",
        titulo: "Pantalon Verde",
        imagen: "./img/pantalones/pantalon-verde.png",
        marca: "DIABLXS",
        talle: "M al XL",
        efectivo: "10%",
        categoria: {
            nombre: "pantalones",
            id: "pantalones"
        },
        precio: 6599,
    },
    {
        id: "zapatillas-01",
        titulo: "Zapatillas Azules",
        imagen: "./img/zapatillas/adidas-azul.png",
        marca: "DIABLXS",
        talle: "38 al 45",
        efectivo: "10%",
        categoria: {
            nombre: "zapatillas",
            id: "zapatillas"
        },
        precio: 55999,
    },
    {
        id: "zapatillas-02",
        titulo: "Zapatillas Beige",
        imagen: "./img/zapatillas/adidas-beige.png",
        marca: "DIABLXS",
        talle: "38 al 45",
        efectivo: "10%",
        categoria: {
            nombre: "zapatillas",
            id: "zapatillas"
        },
        precio: 55999,
    },
    {
        id: "zapatillas-03",
        titulo: "Zapatillas Blancas",
        imagen: "./img/zapatillas/adidas-blanco.png",
        marca: "DIABLXS",
        talle: "38 al 45",
        efectivo: "10%",
        categoria: {
            nombre: "zapatillas",
            id: "zapatillas"
        },
        precio: 52999,
    },
    {
        id: "zapatillas-04",
        titulo: "Zapatillas Negras",
        imagen: "./img/zapatillas/adidas-negro.png",
        marca: "DIABLXS",
        talle: "38 al 45",
        efectivo: "10%",
        categoria: {
            nombre: "zapatillas",
            id: "zapatillas"
        },
        precio: 52999,
    },
    {
        id: "zapatillas-05",
        titulo: "Zapatillas Rojas",
        imagen: "./img/zapatillas/adidas-rojo.png",
        marca: "DIABLXS",
        talle: "38 al 45",
        efectivo: "10%",
        categoria: {
            nombre: "zapatillas",
            id: "zapatillas"
        },
        precio: 55999,
    }
];


const ContenedorProductos = document.querySelector("#contenedor-productos");
const BotonesCategorias = document.querySelectorAll(".boton-categoria");
const TituloPrincipal = document.querySelector("#titulo-principal");


function CargarProductos(ProductosElegidos) {

    ContenedorProductos.innerHTML = "";

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


}
CargarProductos(Productos);


BotonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        BotonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const ProductoCategoria = Productos.find(producto => producto.categoria.id === e.currentTarget.id);
            TituloPrincipal.innerText = ProductoCategoria.categoria.nombre;
            
            const ProductosBoton = Productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            CargarProductos(ProductosBoton);
        } else {
            TituloPrincipal.innerText = "Todos los productos";
            CargarProductos(Productos);
        }

    })
});