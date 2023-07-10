//CLASE N°11 STORAGE -- TEORÍA
//localStorage
//setItem -> crea algo en el storage
//dos parametros: primero la key (clave), segundo value (valor)
localStorage.setItem("cursoCoder", 52240)
localStorage.setItem("comidaFav", "asado")
//si seteo algo con la misma clave: se sobreescribe
localStorage.setItem("comidaFav", "ravioles")

//para captura data del storage: getItem
//recibe un sólo parámetro y es la key (llave)
console.log(localStorage.getItem("cursoCoder"))
let comidaF = localStorage.getItem("comidaFav")
console.log(comidaF)

//remove
localStorage.removeItem("cursoCoder")

// //parsear
//  //pushear objeto:
//  //Para lograr la notation: JSON
//  localStorage.setItem("aleph", JSON.stringify(libro1) )
//  //pushear estanteria
//  localStorage.setItem("estanteria", JSON.stringify(estanteria))
 
//  console.log(JSON.parse(localStorage.getItem("estanteria")))

//PROYECTO MIS LIBROS CON DOM




//DOM CON ARRAY DE OBJETOS
//capturar DOM
let librosDiv = document.getElementById("libros")
let verCatalogo = document.getElementById("verCatalogo")
let ocultarCatalogo = document.getElementById("ocultarCatalogo")
let selectOrden = document.getElementById("selectOrden")
//DOM agregar libro
let agregarLibroBtn = document.getElementById("guardarLibroBtn")

//FUNCTIONS PROYECTO: 
//hoisting
function mostrarCatalogo(array){
   //resetear el DOM
   librosDiv.innerHTML = ``
   //Recorrer array para imprimir en el DOM
   for(let libro of array ){
      let nuevoLibroDiv = document.createElement("div")
      //agregar class
      nuevoLibroDiv.className = "col-12 col-md-6 col-lg-4 my-2"
      nuevoLibroDiv.innerHTML = `<div id="${libro.id}" class="card" style="width: 18rem;">
                                 <img class="card-img-top img-fluid" style="height: 200px;"src="assets/${libro.imagen}" alt="${libro.titulo} de ${libro.autor}">
                                 <div class="card-body">
                                    <h4 class="card-title">${libro.titulo}</h4>
                                    <p>Autor: ${libro.autor}</p>
                                    <p class="">Precio: ${libro.precio}</p>
                                 <button id="" class="btn btn-outline-success">Agregar al carrito</button>
                                 </div>
                              </div>`
      librosDiv.appendChild(nuevoLibroDiv)
   }

}

function ordenarMenorMayor(array){
   //copia del array original, para aplicar sort y no modificar estanteria
   const menorMayor = [].concat(array)
   console.log(menorMayor)
   //de forma ascendente por el atributo precio
   menorMayor.sort((a,b) => a.precio - b.precio)
   mostrarCatalogo(menorMayor)
 }
 
 function ordenarMayorMenor(array){
   const mayorMenor = [].concat(array)
   //ordenar forma descendente 
   mayorMenor.sort((elem1 ,elem2) => elem2.precio - elem1.precio)
   mostrarCatalogo(mayorMenor)
 }
 
 function ordenarAlfabeticamenteTitulo(array){
   const arrayAlfabetico = [].concat(array)
   arrayAlfabetico.sort( (a,b) =>{
      if (a.titulo > b.titulo) {
         return 1
       }
       if (a.titulo < b.titulo) {
         return -1
       }
       // a must be equal to b
       return 0
   })
 
   mostrarCatalogo(arrayAlfabetico)
 }

function agregarLibro(array){
   let autorIngresado = document.getElementById("autorInput")
   let tituloIngresado = document.getElementById("tituloInput")
   let precioIngresado = document.getElementById("precioInput")
   
   //arriba capturamos toda la etqieta input, necesitamos el valor
   const libroNuevo = new Libro(array.length+1,autorIngresado.value, tituloIngresado.value, precioIngresado.value, "libroNuevo.jpg")
   //pusheamos al array:
   array.push(libroNuevo)
   //setear en el storage el array con el libro
   localStorage.setItem("estanteria", JSON.stringify(array))
   mostrarCatalogo(array)
   
   //resetear el form
   autorIngresado.value = ""
   tituloIngresado.value = ""
   precioIngresado.value = ""
}

//EVENTOS: 
agregarLibroBtn.addEventListener("click", function(event){
   //nos permite que no se actualice al ejecutar el evento
   event.preventDefault()
   // event.target
   agregarLibro(estanteria)
})

verCatalogo.addEventListener("click", ()=>{
   mostrarCatalogo(estanteria)
})

ocultarCatalogo.ondblclick = () => {
   //reiniciando el div
   librosDiv.innerHTML = ``
}

selectOrden.addEventListener("change", () => {
   console.log(selectOrden.value)
   switch(selectOrden.value){
      case "1":
         ordenarMayorMenor(estanteria)
      break
      case "2":
         ordenarMenorMayor(estanteria)
      break
      case "3":
         ordenarAlfabeticamenteTitulo(estanteria)
      break
      default:
         mostrarCatalogo(estanteria)
      break
   }
}
)