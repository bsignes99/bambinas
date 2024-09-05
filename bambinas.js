const nav = document.getElementById("nav");
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

const size= [
    {  
        "id": 0,
        "talle": "0-5",
        "edad": "Meses",
        "img": "./assets/img/julian.jpeg"
    },
    {  
        "id": 1,
        "talle": "6-11",
        "edad": "Meses",
        "img": "./assets/img/leo.jpeg"

    },
    {  
        "id": 2,
        "talle": "12-16",
        "edad":"Meses",
        "img": "./assets/img/leom.jpeg"

    },
    {  
        "id": 3,
        "talle": "16-21",
        "edad":"Meses",
        "img": "./assets/img/lmessi.jpeg"

    },
    {  
        "id": 4,
        "talle": "22-24",
        "edad":"Meses",
        "img": "./assets/img/river.jpeg"

    }
]



const renderTalles = (arrayTalles) => {
    let circulos = document.querySelector(".visor");
    circulos.innerHTML = "";

    arrayTalles.forEach((talle) => {
        let contenedor = document.createElement("div");
        contenedor.className="talles";
        contenedor.style.backgroundImage=`url(${talle.img})`;
        contenedor.innerHTML=`<p class= "text">${talle.talle} ${talle.edad}</p>`;
        
        circulos.appendChild(contenedor);
    });
};

renderTalles(size);

const productos = [
    {
        "id": 1,
        "talle": ["S","M"],
        "color": ["blue", "peru", "red"],
        "modelo": "Body Estrellitas",
        "img": "./assets/img/julian.jpeg"
    },    {
        "id": 1,
        "talle": ["S","M"],
        "color": ["brown"],
        "modelo": "Body Corazones",
        "img": "./assets/img/leo.jpeg"
    },    {
        "id": 1,
        "talle": ["S","M", "L"],
        "color": ["peru"],
        "modelo": "pantalon",
        "img": "./assets/img/river.jpeg"
    },    {
        "id": 1,
        "talle": ["S","M"],
        "color": ["orange"],
        "modelo": "zapato",
        "img": "./assets/img/leom.jpeg"
    },    {
        "id": 1,
        "talle": ["S","M"],
        "color": ["yellow"],
        "modelo": "5g de cocaina",
        "img": "./assets/img/logo-png.png"
    },  {
        "id": 1,
        "talle": ["S","M"],
        "color": ["peru"],
        "modelo": "Body Estrellitas",
        "img": "./assets/img/julian.jpeg"
    },    {
        "id": 1,
        "talle": ["S","M"],
        "color": ["pink"],
        "modelo": "Body Estrellitas",
        "img": "./assets/img/messi.jpeg"
    },    {
        "id": 1,
        "talle": ["S","M"],
        "color": ["green"],
        "modelo": "Body Estrellitas",
        "img": "./assets/img/julian.jpeg"
    },    {
        "id": 1,
        "talle": ["S","M"],
        "color": ["black"],
        "modelo": "Body Estrellitas",
        "img": "./assets/img/julian.jpeg"
    },    {
        "id": 1,
        "talle": ["S","M"],
        "color": ["grey"],
        "modelo": "Body Estrellitas",
        "img": "./assets/img/julian.jpeg"
    },    {
        "id": 1,
        "talle": ["S","M"],
        "color": ["red"],
        "modelo": "Body Estrellitas",
        "img": "./assets/img/julian.jpeg"
    },
    
]

let obtenerColores = (arrayProductos, indice) => {
    let colores = [];     
    let colore = arrayProductos[indice].color;
    colores = colore.split(', ');
    console.log(colores);
    return colores;
};


const renderProductos = (arrayProductos) => {
    let section = document.querySelector(".productos");
    section.innerHTML = "";

    arrayProductos.forEach((producto) => {
        let tarjeta = document.createElement("div");
        tarjeta.className="card";
        tarjeta.innerHTML=`
        <img src="${producto.img}" alt="imagen"></img>
        <h1 class="titulo">${producto.modelo}</h1>
        <div class="colores"></div>
        <div class="talleProductos"> </div>
        <button class="btn">Ver más</button>
        `;

        let coloresDiv= tarjeta.querySelector(".colores");
        producto.color.forEach((color)=>{
            let circuloColor = document.createElement("div");
            circuloColor.className= "circuloColor";
            circuloColor.style.backgroundColor = color;
            coloresDiv.appendChild(circuloColor);
        });

        let tallesDiv= tarjeta.querySelector(".talleProductos");

        producto.talle.forEach((talle) => {
            let cajaTalle = document.createElement("div");
            cajaTalle.className= "cajaTalle";
            cajaTalle.textContent = talle;
            tallesDiv.appendChild(cajaTalle);
        });
        
        section.appendChild(tarjeta);
       });

       let talles = productos.talle;

       arrayTalles.forEach((talles) => {
        let card = document.getElementsByClassName("card");
        for(let i=0; i < talles.length; i++){
            card.innerHTML=`<div class="cajaTalle"> ${talle[i]} </div>`;
        };
    });
};




renderProductos(productos);

