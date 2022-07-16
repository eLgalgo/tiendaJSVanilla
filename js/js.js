'use strict'

//PrecioTotal
let total = 0;
let precioTotal = document.getElementById("precioTotal");
let contadorListado = 0;
let contadorDeCompras = 1;

precioTotal.innerText = total;

class Tarjeta{
    constructor(nombre, imagen, precio){
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
    }

    agregarDOM(){
        let nombreDOM = document.createElement("h3");
        nombreDOM.textContent = this.nombre;
        let items = document.getElementById("lista");
        let imagenDOM = document.createElement("img");
        let textoDOM = document.createElement("span");
        textoDOM.textContent = "Precio:";
        textoDOM.className = "textoPrecio";
        let precioDOM = document.createElement("span");
        precioDOM.className = "precio";
        let botonDOM = document.createElement("button");
        botonDOM.textContent = "Comprar";
        botonDOM.className = "botonComprar";
        botonDOM.addEventListener("click", ()=>{
            let cajitaNumero = document.getElementById("cajitaNumero");
            if(cajitaNumero.textContent == "0"){
                cajitaNumero.style.opacity = "100%";
            }
            cajitaNumero.textContent = contadorDeCompras;
            contadorDeCompras++;
            let listaCompra = document.getElementById("itemsCarrito");
            let precioTotal = document.getElementById("precioTotal");
            total+=this.precio;
            precioTotal.innerText = total;
            let liCarrito = document.createElement("li");
            liCarrito.id = `compra${contadorListado}`;
            contadorListado++;
            let divCarrito = document.createElement("div");
            let pCarrito = document.createElement("p");
            let btnCarrito = document.createElement("button");
            btnCarrito.className = "btnCerrarCarrito";
            btnCarrito.textContent = "Quitar"
            btnCarrito.addEventListener("click", ()=>{
                let liBorrar = document.getElementById(liCarrito.id);
                liBorrar.remove();
                total-=this.precio;
                precioTotal.innerText = total;
                let cajitaNumero = document.getElementById("cajitaNumero");
                contadorDeCompras--;
                cajitaNumero.textContent = contadorDeCompras -1;
                if(cajitaNumero.textContent == "0"){
                    cajitaNumero.style.opacity = "0%";
                }
            });
            pCarrito.textContent = this.nombre + " - " + this.precio;
            divCarrito.className = "divCarrito";

            divCarrito.appendChild(pCarrito);
            divCarrito.appendChild(btnCarrito);
            liCarrito.appendChild(divCarrito);

            listaCompra.appendChild(liCarrito);
        });

        precioDOM.textContent = this.precio+"$";
        imagenDOM.src = this.imagen;

        let contenedor = document.createElement("li");

        contenedor.appendChild(nombreDOM);
        contenedor.appendChild(imagenDOM);
        contenedor.appendChild(textoDOM);
        contenedor.appendChild(precioDOM);
        contenedor.appendChild(botonDOM);
        items.appendChild(contenedor);

        contenedor.className = "card"
    }
}

var cards = [];

let tarjeta1 = new Tarjeta("Baker Plus","img/baker1.png", 2500);
tarjeta1.agregarDOM();
cards.push(tarjeta1);

let tarjeta2 = new Tarjeta("Psicobaker","img/baker2.png", 100);
tarjeta2.agregarDOM();
cards.push(tarjeta2);

let tarjeta3 = new Tarjeta("BlackBaker","img/baker3.png", 2000);
tarjeta3.agregarDOM();
cards.push(tarjeta3);

let tarjeta4 = new Tarjeta("ElementHuston","img/baker4.png", 1500);
tarjeta4.agregarDOM();
cards.push(tarjeta4);

let tarjeta5 = new Tarjeta("This place","img/baker5.png", 799);
tarjeta5.agregarDOM();
cards.push(tarjeta5);

let tarjeta6 = new Tarjeta("Primitive VIP","img/baker6.png", 600);
tarjeta6.agregarDOM();
cards.push(tarjeta6);

//FILTRO

let btnBuscar = document.getElementById("botonFiltro");
let listaDOM = document.getElementById("lista");

btnBuscar.addEventListener("click", buscarCard);

function buscarCard(){
    listaDOM.innerHTML = "";

    let seEncontro = false;
    let arrayAux = [];
    let txtaBuscar = document.getElementById("buscador").value;

    cards.forEach(element => {
        if(element.nombre.includes(txtaBuscar)){
            agregarAlDom(element.nombre, element.imagen, element.precio, arrayAux);
            seEncontro = true;
        }
    });
    if(!seEncontro){
        let parrafoNo = document.createElement("p");
        let div = document.createElement("div");
        div.className = "divNoEnc"
        parrafoNo.textContent = "NO SE ENCONTRO ITEM";
        parrafoNo.className = "noEncontrado";

        div.appendChild(parrafoNo);
        listaDOM.appendChild(div);
    }

}

function agregarAlDom(nombre, imagen, precio, arreglo){
    let tarjeta6 = new Tarjeta(nombre,imagen, precio);
    tarjeta6.agregarDOM();
    arreglo.push(tarjeta6);
}

//CARRITO
let btnCarrito = document.getElementById("btnCarrito")
let imgCarrito = document.getElementById("imgCarrito");
let listaCarrito = document.getElementById("listaCarrito");

btnCarrito.addEventListener("click", ()=>{
    if(listaCarrito.className == "carritoAnimation"){
        imgCarrito.src = "img/carrito.png";
        listaCarrito.className = "carritoAnimationSalir";
    }else{
        imgCarrito.src = "img/carritoX.png";
        listaCarrito.className = "carritoAnimation";
    }
    
});