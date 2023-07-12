// PROYECTO ECOMMERCE JOYERÍA EN EL DOM
class joya {
    constructor(id, nombre, material, precio, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.material = material;
        this.precio = precio;
        this.imagen = imagen;
    }
    mostrarInfojoya() {
        console.log(`El nombre de la joya es ${this.nombre}, el material es ${this.material} y su precio es ${this.precio}`);
    }
}

//INTANCIACION DE OBJETOS
const joya1 = new joya(1, "Anillo de Oro Cubo Ópalo Andino", "Oro Corporativo", 3400, "Anillo Cubo Opalo Andino.jpeg");
const joya2 = new joya(2, "Anillo de Oro Martillado", "Oro Ecológico", 950, "Anillo Oro Martillado.jpeg");
const joya3 = new joya(3, "Anillo de Plata Granalla y Lapislázuli", "Plata", 850, "Anillo Granalla Lapislazuli.jpg");
const joya4 = new joya(4, "Anillo de Plata Drops Ópalo Andino", "Plata", 650, "Anillo-Drops.jpg");
const joya5 = new joya(5, "Brazalete de Oro Labradorita y Esmeralda", "Oro", 6350,
    "Brazalete Labradorita y Esmeralda.jpg");
const joya6 = new joya(6, "Brazalete de Oro Sauce con Ópalo Andino", "Oro", 4700, "Brazalete Sauce Opalo Andino.jpg");
const joya7 = new joya(7, "Brazalete de Plata Colección Art Deco", "Plata", 1200, "Brazalete Art Deco.jpg");
const joya8 = new joya(8, "Brazalete de Plata Pacífico Ópalo Andino", "Plata", 1150,
    "Brazalete Pacifico Opalo Andino.jpg");
const joya9 = new joya(9, "Collar de Oro Sauce Ópalo Andino Sissai Gold", "Oro", 2450, "Collar Sauce Opalo Andino.jpg");
const joya10 = new joya(10, "Collar de Oro Friendship Colección Sissai Gold", "Oro Fairmined", 2500,
    "Collar Friendship.jpg");
const joya11 = new joya(11, "Collar de Plata Drops Ópalo Andino", "Plata", 480, "Collar Drops Opalo Andino.jpg");
const joya12 = new joya(12, "Collar de Plata Piedra en Bruto Pirita", "Plata", 180,
    "Collar Piedra En Bruto Pirita.jpg");
const joya13 = new joya(13, "Dije de Oro Luna Mármol Blanco Sissai Gold", "Oro", 1100, "Dije Luna.jpg");
const joya14 = new joya(14, "Dije de Oro Signo Zodiacal Sissai Gold", "Oro", 1180, "Dije Signos.jpg");
const joya15 = new joya(15, "Dije de Plata al Natural Cuarzo Ahumado", "Plata", 500, "Dije Cuarzo Ahumado.jpeg");
const joya16 = new joya(16, "Dije de Plata con Animales en Piedra Obsidiana", "Plata", 580,
    "Dije Animales Obsidiana.jpg");
const joya17 = new joya(17, "Pulsera de Oro True Colors Coleccion Sissai Gold", "Oro", 4200, "Pulsera True Colors.jpeg");
const joya18 = new joya(18, "Pulsera de Oro Petalos con Ópalo Andino", "Oro", 3650,
    "Pulsera Petalos Opalo Andino y Diamante.jpg");
const joya19 = new joya(19, "Pulsera de Plata Oceanos Colección Acqua", "Plata", 580, "Pulsera Oceanos.jpg");
const joya20 = new joya(20, "Pulsera de Plata Triple Triangulos Colección Kené", "Plata", 260,
    "Pulsera Triangulo Triple Turmalina Negra y Pirita.jpeg");

let vitrina = [];

if (localStorage.getItem("vitrina")) {
    vitrina = JSON.parse(localStorage.getItem("vitrina"));
} else {
    vitrina.push(joya1, joya2, joya3, joya4, joya5, joya6, joya7, joya8, joya9, joya10, joya11, joya12, joya13, joya14,
        joya15, joya16, joya17, joya18, joya19, joya20);
    localStorage.setItem("vitrina", JSON.stringify(vitrina));
}

//CAPTURAS DEL DOM

let modoOscuro = document.getElementById("modoOscuro");
let modoClaro = document.getElementById("modoClaro");
let resetModo = document.getElementById("resetModo");
let joyaDiv = document.getElementById("joya");
let buscador = document.getElementById("buscador");
let coincide = document.getElementById("coincide");

let darkMode = localStorage.getItem("darkMode");
if (darkMode == "true") {
    document.body.classList.add("modoDark");
}

modoOscuro.addEventListener("click", () => {
    document.body.classList.add("modoDark");
    localStorage.setItem("darkMode", true);
});

modoClaro.addEventListener("click", () => {
    document.body.classList.remove("modoDark");
    localStorage.setItem("darkMode", false);
});

resetModo.addEventListener("click", () => {
    console.log("funciona eliminar");
    localStorage.removeItem("darkMode");
});

//FUNCIONES

function mostrarCatalogo(array) {
    joyaDiv.innerHTML = "";
    for (let joya of array) {
        let nuevaJoyaDiv = document.createElement("div");

        nuevaJoyaDiv.className = "col-12 col-md-6 col-lg-4 card-container";
        nuevaJoyaDiv.innerHTML = `<div id="${joya.id}" class="card" style="width: 18rem;">
    <img class="card-img-top img-fluid" style="height: 200px;" src= "assets/${joya.imagen}"
        alt=${joya.nombre}>
    <div class="card-body">
        <h4 class="card-title">${joya.nombre}</h4>
        <p>Material: ${joya.material}</p>
        <p class="precioCard ofertaJoja ${joya.precio <= 500 && "ofertaJoya"}">Precio: ${joya.precio} S/.</p>
        <button id="btnbls" class="btn btn-outline-success">Agregar a la Bolsa</button>
    </div>
    </div>`;
        joyaDiv.appendChild(nuevaJoyaDiv);
    }
}

let verCatalogo = document.getElementById("verCatalogo");
verCatalogo.addEventListener("click", () => {
    mostrarCatalogo(vitrina);
});

let ocultarCatalogo = document.getElementById("ocultarCatalogo");
ocultarCatalogo.onclick = () => {
    joyaDiv.innerHTML = "";
};

// ORDENAR EL CATALOGO

let ordenCat = document.getElementById("ordenCat");
ordenCat.addEventListener("change", () => {
    switch (ordenCat.value) {
        case "1":
            ordenarMenorMayor(vitrina);
            break;
        case "2":
            ordenarMayorMenor(vitrina);
            break;
        case "3":
            ordenarAlfabeticamenteMaterial(vitrina);
            break;
        default:
            mostrarCatalogo(vitrina);
            break;
    }
});

function ordenarMenorMayor(array) {
    const menorMayor = [].concat(array);
    menorMayor.sort((a, b) => a.precio - b.precio);
    mostrarCatalogo(menorMayor);
}

function ordenarMayorMenor(array) {
    const mayorMenor = [].concat(array);
    mayorMenor.sort((elem1, elem2) => elem2.precio - elem1.precio);
    mostrarCatalogo(mayorMenor);
}

function ordenarAlfabeticamenteMaterial(array) {
    const arrayAlfabetico = [].concat(array);
    arrayAlfabetico.sort((a, b) => {
        if (a.material > b.material) {
            return 1;
        }
        if (a.material < b.material) {
            return -1;
        }
        return 0;
    });
    mostrarCatalogo(arrayAlfabetico);
}

// AGREGAR UNA JOYA
let agregarJoya = document.getElementById("guardarJoya");
agregarJoya.addEventListener("click", function (event) {
    event.preventDefault();
    validarCampos();
});

// VALIDAR CAMPOS ANTES DE GUARDAR LA JOYA

function validarCampos() {
    let joyaIngresada = document.getElementById("joyaIngreso");
    let materialIngresado = document.getElementById("materialIngreso");
    let precioIngresado = document.getElementById("precioIngreso");

    if (joyaIngresada.value.trim() === "") {
        mostrarMensaje("Por favor, complete el campo 'Nombre de la joya'.");
        return;
    }

    if (materialIngresado.value.trim() === "") {
        mostrarMensaje("Por favor, complete el campo 'Material'.");
        return;
    }

    if (precioIngresado.value.trim() === "") {
        mostrarMensaje("Por favor, complete el campo 'Precio'.");
        return;
    }

    guardarJoya(vitrina);
}


// MOSTRAR MENSAJE EN VENTANA EMERGENTE
function mostrarMensaje(mensaje) {
    let mensajePopup = document.getElementById("mensajePopup");
    mensajePopup.textContent = mensaje;
    mensajePopup.style.display = "block";
    setTimeout(function () {
        mensajePopup.style.display = "none";
    }, 3000); // Ocultar el mensaje después de 3 segundos (ajusta el valor según tus necesidades)
}

// Agregar JOYA AL DOM
function guardarJoya(array) {
    let joyaIngresada = document.getElementById("joyaIngreso");
    let materialIngresado = document.getElementById("materialIngreso");
    let precioIngresado = document.getElementById("precioIngreso");
  
    if (
      joyaIngresada.value.trim() === "" ||
      materialIngresado.value.trim() === "" ||
      precioIngresado.value.trim() === ""
    ) {
      mostrarMensaje("Por favor, complete todos los campos antes de guardar la joya.");
    } else {
      const joyaNuevo = new joya(
        array.length + 1,
        joyaIngresada.value,
        materialIngresado.value,
        precioIngresado.value,
        "JoyaNueva.png"
      );
  
      array.push(joyaNuevo);
  
      localStorage.setItem("vitrina", JSON.stringify(array));
  
      mostrarCatalogo(array);
  
      // RESET FORMULARIO
      joyaIngresada.value = "";
      materialIngresado.value = "";
      precioIngresado.value = "";
    }
  }
  
  // MOSTRAR MENSAJE EN VENTANA EMERGENTE
  function mostrarMensaje(mensaje) {
    let mensajePopup = document.getElementById("mensajePopup");
    mensajePopup.textContent = mensaje;
    mensajePopup.style.display = "block";
    setTimeout(function () {
      mensajePopup.style.display = "none";
    }, 3000); // Ocultar el mensaje después de 3 segundos (ajusta el valor según tus necesidades)
  }
  
//FILTRO POR JOYA O MATERIAL
function infoBuscar(buscando, array) {
    let busqueda = array.filter(
        (dato) =>
            dato.nombre.toLowerCase().includes(buscando.toLowerCase()) ||
            dato.material.toLowerCase().includes(buscando.toLowerCase())
    );

    if (busqueda.length === 0) {
        coincide.innerHTML = `<h3 class="buscat">No hay coincidencias en el catálogo</h3>`;
    } else {
        coincide.innerHTML = "";
    }

    mostrarCatalogo(busqueda);

    setTimeout(() => {
        coincide.innerHTML = "";
    }, 5000);
}

document.getElementById("buscarbtn").addEventListener("click", (event) => {
    event.preventDefault();
    infoBuscar(buscador.value, vitrina);
    buscador.value = "";
});

// Modal de la bolsa

let modalBolsa = document.getElementById("modalBolsa");
let botonBolsa = document.getElementById("botonBolsa");
let modalBody = document.getElementById("modalBody");
let modalClose = document.getElementById("modalClose");


botonBolsa.onclick = () => {
    modalBolsa.style.display = "block";
    mostrarProductosBolsa();
};

modalClose.onclick = () => {
    modalBolsa.style.display = "none";
}

window.onclick = (event) => {
    if (event.target === modalBolsa) {
        modalBolsa.style.display = "none";
    }
};

// Mostrar los productos en la bolsa
function mostrarProductosBolsa() {
    let bolsa = JSON.parse(localStorage.getItem("bolsa"));
    modalBody.innerHTML = "";

    if (bolsa && bolsa.length > 0) {
        for (let i = 0; i < bolsa.length; i++) {
            let producto = bolsa[i];
            let productoDiv = document.createElement("div");
            productoDiv.className = "producto-bolsa";
            productoDiv.innerHTML = `
                <img class="producto-imagen" src="assets/${producto.imagen}" alt="${producto.nombre}">
                <div class="producto-info">
                    <h3 class="producto-nombre">${producto.nombre}</h3>
                    <p class="producto-material">Material: ${producto.material}</p>
                    <p class="producto-precio">Precio: ${producto.precio} S/.</p>
                    <button class="btn-remover" data-index="${i}">Eliminar</button>
                </div>
            `;
            modalBody.appendChild(productoDiv);
        }
    } else {
        modalBody.innerHTML = "<p class='mensaje-bolsa'>No hay productos en la bolsa.</p>";
    }
}
// Eliminar un producto de la bolsa
modalBody.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-remover")) {
        let bolsa = JSON.parse(localStorage.getItem("bolsa"));
        let index = event.target.dataset.index;
        bolsa.splice(index, 1);
        localStorage.setItem("bolsa", JSON.stringify(bolsa));
        mostrarProductosBolsa();
    }
});

// AGREGAR A LA BOLSA

document.addEventListener("click", function (event) {
    if (event.target.matches("#btnbls")) {
        event.preventDefault();
        let idJoya = event.target.parentNode.parentNode.id;
        agregarBolsa(idJoya);
        showPopup();
    }
});

function showPopup() {
    let popup = document.getElementById("popup");
    popup.style.display = "block";
    setTimeout(function () {
        popup.style.display = "none";
    }, 3000);
}

function agregarBolsa(id) {
    let producto = vitrina.find((joya) => joya.id == id);
    let bolsa = JSON.parse(localStorage.getItem("bolsa")) || [];
    bolsa.push(producto);
    localStorage.setItem("bolsa", JSON.stringify(bolsa));
}
