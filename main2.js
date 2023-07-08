//PROYECTO ECOMMERCE JOYERÍA EN EL DOM

class joya {
    constructor(id, nombre, material, precio, imagen) {
        this.id = id,
            this.nombre = nombre,
            this.material = material,
            this.precio = precio
        this.imagen = imagen


    }
    mostrarInfojoya() {
        console.log(`El nombre de la joya es ${this.nombre} el material es ${this.material} y su precio es ${this.precio}`)
    }
}

//Instanciación de objetos: 
const joya1 = new joya(1, "Anillo de Oro Cubo Ópalo Andino", "Oro Corporativo", 3400, "Anillo Cubo Opalo Andino.jpeg")

const joya2 = new joya(2, "Anillo de Oro Martillado", "Oro Ecológico", 950, "Anillo Oro Martillado.jpeg")

const joya3 = new joya(3, "Anillo de Plata Granalla y Lapislázuli", "Plata", 850, "Anillo Granalla Lapislazuli.jpg")

const joya4 = new joya(4, "Anillo de Plata Drops Ópalo Andino", "Plata", 650, "Anillo-Drops.jpg")

const joya5 = new joya(5, "Brazalete de Oro Labradorita y Esmeralda", "Oro", 6350, "Brazalete Labradorita y Esmeralda.jpg")

const joya6 = new joya(6, "Brazalete de Oro Sauce con Ópalo Andino", "Oro", 4700, "Brazalete Sauce Opalo Andino.jpg")

const joya7 = new joya(7, "Brazalete de Plata Colección Art Deco", "Plata", 1200, "Brazalete Art  Deco.jpg")

const joya8 = new joya(8, "Brazalete de Plata Pacífico Ópalo Andino", "Plata", 1150, "Brazalete Pacifico Opalo Andino.jpg")

const joya9 = new joya(9, "Collar de Oro Sauce Ópalo Andino Sissai Gold", "Oro", 2450, "Collar Sauce Opalo Andino.jpg")

const joya10 = new joya(10, "Collar de Oro Friendship Colección Sissai Gold", "Oro Fairmined", 2500, "Collar Friendship.jpg")

const joya11 = new joya(11, "Collar de Plata Drops Ópalo Andino", "Plata", 480, "Collar Drops Opalo Andino.jpg")

const joya12 = new joya(12, "Collar de Plata Piedra en Bruto Pirita", "Plata", 180, "Collar Piedra En Bruto Pirita.jpg")

const joya13 = new joya(13, "Dije de Oro Luna Mármol Blanco Sissai Gold", "Oro", 1100, "Dije Luna.jpg")

const joya14 = new joya(14, "Dije de Oro Signo Zodiacal Sissai Gold", "Oro", 1180, "Dije Signos.jpg")

const joya15 = new joya(15, "Dije de Plata al Natural Cuarzo Ahumado", "Plata", 500, "Dije Cuarzo Ahumado.jpeg")

const joya16 = new joya(16, "Dije de Plata con Animales en Piedra Obsidiana", "Plata", 580, "Dije Animales Obsidiana.jpg")

const joya17 = new joya(17, "Pulsera de Oro True Colors Coleccion Sissai Gold", "Oro", 4200, "Pulsera True Colors.jpeg")

const joya18 = new joya(18, "Pulsera de Oro Petalos con Ópalo Andino", "Oro", 3650, "Pulsera Petalos Opalo Andino y Diamante.jpg")

const joya19 = new joya(19, "Pulsera de Plata Oceanos Colección Acqua", "Plata", 580, "Pulsera Oceanos.jpg")

const joya20 = new joya(20, "Pulsera de Plata Triple Triangulos Colección Kené", "Plata", 260, "Pulsera Triangulo Triple Turmalina Negra y Pirita.jpeg")


const vitrina = [joya1, joya2, joya3, joya4, joya5, joya6, joya7, joya8, joya9, joya10, joya11, joya12, joya13, joya14, joya15, joya16, joya17, joya18, joya19, joya20];

//Funciones:

function agregarJoya() {
    let nombreIngresado = prompt("Ingrese el nombre de la joya")
    let materialIngresado = prompt("Ingrese el nombre del material")
    let precioIngresado = parseInt(prompt("Ingrese el precio de la joya"))

    const joyaNuevo = new joya(vitrina.length + 1, nombreIngresado, materialIngresado, precioIngresado)

    vitrina.push(joyaNuevo)

}

function verCatalogo(array) {

    console.log(`Nuestro catalogo es: `)

    for (let joya of array) {
        console.log(joya.id, joya.nombre, joya.material, joya.precio)
    }
}

function mostrarCatalogoForEach(array) {
    console.log(`Nuestros joyas disponibles son:`)

    array.forEach(
        joya => joya.mostrarInfojoya()
    )
}

function buscarPormaterial(array) {
    let materialBuscado = prompt("Ingrese el material de la joya que desea buscar");
    let busqueda = array.filter(
        joya => joya.material.toLowerCase() === materialBuscado.toLowerCase()
    );

    if (busqueda.length === 0) {
        console.log(`No se encontraron joyas con el material "${materialBuscado}".`);
    } else {
        verCatalogo(busqueda);
    }
}

function buscarPornombre(array) {
    let nombreBusqueda = prompt("Ingrese el nombre de la joya que está buscando");
    let busqueda = array.filter(
        joya => joya.nombre.toLowerCase().includes(nombreBusqueda.toLowerCase())
    );

    if (busqueda.length === 0) {
        console.log(`No se encontraron joyas con el nombre "${nombreBusqueda}".`);
    } else {
        verCatalogo(busqueda);
    }
}

function buscarPormaterial(array) {
    let materialBuscado = prompt("Ingrese el material de la joya que desea buscar");
    let busqueda = array.filter(
        joya => joya.material.toLowerCase().includes(materialBuscado.toLowerCase())
    );

    if (busqueda.length === 0) {
        console.log(`No se encontraron joyas con el material "${materialBuscado}".`);
    } else {
        verCatalogo(busqueda);
    }
}

function filtrarPorPrecioMax(array) {
    let precioIngresado = parseInt(prompt("Ingrese el precio máximo que puede pagar"));
    let busqPrecio = array.filter(
        (joya) => { return joya.precio <= precioIngresado }
    );
    console.log("Resultado de tu búsqueda por precio máximo:");
    busqPrecio.forEach((joya) => {
        console.log(joya.id, joya.nombre, joya.material, joya.precio);
    });
}

function eliminarjoya(array) {

    verCatalogo(array)
    let eliminarID = parseInt(prompt("Ingrese el id que desea eliminar"))

    let arrayID = array.map(joya => joya.id)
    console.log(arrayID)

    let indice = arrayID.indexOf(eliminarID)
    console.log(indice)

    array.splice(indice, 1)
    verCatalogo(array)

}

function ordenarMenorMayor(array) {
    //copia del array original, para aplicar sort y no modificar vitrina
    const menorMayor = [].concat(array)
    console.log(menorMayor)
    //de forma ascendente por el atributo precio
    menorMayor.sort((a, b) => a.precio - b.precio)
    verCatalogo(menorMayor)
}

function ordenarMayorMenor(array) {
    const mayorMenor = [].concat(array)
    //ordenar forma descendente 
    mayorMenor.sort((elem1, elem2) => elem2.precio - elem1.precio)
    verCatalogo(mayorMenor)
}

function ordenarAlfabeticamenteMaterial(array) {
    const arrayAlfabetico = [].concat(array)
    arrayAlfabetico.sort((a, b) => {
        if (a.material > b.material) {
            return 1
        }
        if (a.material < b.material) {
            return -1
        }
        return 0
    })

    verCatalogo(arrayAlfabetico)
}

function ordenar(array) {
    let opcion = parseInt(prompt(`
          1 - Ordenar joyas de menor a mayor precio
          2 - Ordenar joyas de mayor a menor precio
          3 - Ordenar las joyas alfabeticamente
          4 - Ordenar por precio máximo`))

    switch (opcion) {
        case 1:
            ordenarMenorMayor(array)
            break
        case 2:
            ordenarMayorMenor(array)
            break
        case 3:
            ordenarAlfabeticamenteMaterial(array)
            break
        case 4:
            filtrarPorPrecioMax(array);
            break;
        default:
            console.log(`La opcion ${opcion} no es válida`)
            break

    }
}

function filtrarPorNombreMaterialIncludes(array) {
    let datoBusqueda = prompt("Ingrese el nombre o material que desea encontrar en una búsqueda parcial");
    if (datoBusqueda !== null) {
        datoBusqueda = datoBusqueda.trim();
        if (datoBusqueda !== "") {

            let busqueda = array.filter(
                (dato) => dato.nombre.toLowerCase().includes(datoBusqueda.toLowerCase()) || dato.material.toLowerCase().includes(datoBusqueda.toLowerCase())
            );
            if (busqueda.length === 0) {
                console.log(`El dato "${datoBusqueda}" no está en nuestro catálogo como nombre o como material.`);
            } else {
                verCatalogo(busqueda);
            }
        } else {
            console.log("No se ingresó ningún dato de búsqueda.");
        }
    } else {
        console.log("El ingreso de datos fue cancelado.");
    }
}

function menu() {
    let nombre = "";

    while (nombre === "") {
        nombre = prompt("Hola, por favor ingresa tu nombre:");

        if (nombre === null) {
            console.log("Gracias por visitarnos, vuelve pronto.");
            return;
        }

        if (nombre.trim() === "") {
            alert("Nombre no válido. Por favor, ingrese un nombre válido.");
            nombre = "";
        }
    }

    alert(`¡Bienvenid@, ${nombre}!`);

    let salirMenu = false;

    do {
        let opcionIngresada = parseInt(prompt(`${nombre}, por favor ingresa la opción deseada:
        1 - Consultar el catálogo
        2 - Agregar una joya
        3 - Borrar una joya        
        4 - Buscar por tipo de material
        5 - Buscar por nombre de la joya
        6 - Ordenar las joyas
        0 - Salir del menú`));

        switch (opcionIngresada) {
            case 1:
                verCatalogo(vitrina);
                break;
            case 2:
                agregarJoya();
                break;
            case 3:
                eliminarjoya(vitrina);
                break;
            case 4:
                buscarPormaterial(vitrina);
                break;
            case 5:
                buscarPornombre(vitrina);
                break;
            case 6:
                ordenar(vitrina);
                break;
            case 0:
                console.log(`Gracias por utilizar nuestra app, ${nombre}. ¡Saludos!`);
                salirMenu = true;
                break;
            default:
                console.log("Opción inválida. Por favor, ingrese una opción válida del menú.");
                break;
        }
    } while (!salirMenu);
}

// menu();

console.log(new Date())


let joyaDiv = document.getElementById("joya")

function mostrarCatalogo(array){

for (let joya of array) {
    let nuevaJoyaDiv = document.createElement("div")

    nuevaJoyaDiv.className = "col-12 col-md-6 col-lg-4 card-container"
    nuevaJoyaDiv.innerHTML = `<div id="${joya.id}" class="card" style="width: 18rem;">
    <img class="card-img-top img-fluid" style="height: 200px;" src= "assets/${joya.imagen}"
        alt=${joya.nombre}>
    <div class="card-body">
        <h4 class="card-title">${joya.nombre}</h4>
        <p>Material: ${joya.material}</p>
        <p class="precioCard">Precio: ${joya.precio} S/.</p>
        <button id="btnbls" class="btn btn-outline-success">Agregar a la Bolsa</button>
    </div>
    </div>`
    joyaDiv.appendChild(nuevaJoyaDiv)
}
}
mostrarCatalogo(vitrina)