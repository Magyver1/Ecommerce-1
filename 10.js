//CLASE N°10 EVENTOS
//Son los mecánimos que tenemos en JS para controlar acciones del usuario y definir el comportamiento del sitio
//handler event: funciones manejadoras de eventos (la funciones cuando el evento se ejecuta)
//la handler event pueden ser: tradicionales, arrow o anónima

//CONOCEREMOS TRES FORMAS DE DECLARAR EVENTOS

function holaComi52240(){
    alert(`Clase de eventos con la comi 52240. Bienvenidos :D`)
 }
 
 function saludarAlumno(nombre){
    alert(`Hola ${nombre}`)
 }
 
 //SEGUNDA FORMA DECLARAR EVENTOS
 let botonSemantico = document.getElementById("evento-semantico")
 let inputAlumno = document.getElementById("nombreAlumno")
 console.log(botonSemantico)
 //recordar que no se pasan los parentesis en la asignación
 botonSemantico.onclick = holaComi52240
 //para pasarle con parámetro puedo encerrar en una arrow function
 botonSemantico.onclick = () => {
    console.log(inputAlumno)
    console.log(inputAlumno.value)
    saludarAlumno(inputAlumno.value)
    inputAlumno.value = ""
    
 }
 
 //PRIMERA FORMA PASAR EVENTOS: MULTIPLE
 //addEventListener("tipoEvento", handlerEvent)
 let eventoMultiple = document.getElementById("evento-multiple")
 
 eventoMultiple.addEventListener("click", holaComi52240)
 //puedo asignar más de un evento
 eventoMultiple.addEventListener("click", ()=>
 {
    saludarAlumno(inputAlumno.value)
    inputAlumno.value = ""
 })
 eventoMultiple.addEventListener("click", function(){console.log("Tercer acción al mismo evento")})
 
 
 
 //PROYECTO MIS LIBROS CON DOM
 //class constructora
 class Libro{
    constructor(id, autor, titulo, precio, imagen){
       this.id = id,
       this.autor = autor,
       this.titulo = titulo,
       this.precio = precio,
       this.imagen = imagen
 
    }
    //métodos en class se declaran por fuera del constructor
    mostrarInfoLibro(){
       console.log(`El libro fue escrito por ${this.autor} su titulo es ${this.titulo} y su precio es ${this.precio}`)
    }
 }
 
 //Instanciación de objetos: 
 const libro1 = new Libro(1,"Jorge Luis Borges","Aleph", 900, "AlephBorges.jpg")
 
 const libro2 = new Libro(2,"Gabriel García Marquez","Cien años de Soledad", 4500, "CienSoledadMarquez.jpg")
 
 const libro3 = new Libro(3,"Isabel Allende", "Paula", 2800, "PaulaAllende.jpg")
 
 const libro4 = new Libro(4,"Jorge Luis Borges","Ficciones", 1400, "FiccionesBorges.jpg")
 
 const libro5 = new Libro(5,"Mario Benedetti", "Andamios", 2200, "AndamiosBenedetti.jpg")
 
 const libro6 = new Libro(6,"Mario Vargas Llosa", "La ciudad y los perros", 2000, "CiudadPerrosVargasLlosa.jpg")
 
 //CREAR UN ARRAY DE OBJETOS
 const estanteria = []
 estanteria.push(libro1, libro2, libro3, libro4, libro5, libro6)
 
 //DOM CON ARRAY DE OBJETOS
 //capturar div libros
 let librosDiv = document.getElementById("libros")
 
 //recorrer estanteria para imprimir TOOODOS los elementos de mi array
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
 
 //capturo ID del boton
 let verCatalogo = document.getElementById("verCatalogo")
 //pasar evento:
 verCatalogo.addEventListener("click", ()=>{
    mostrarCatalogo(estanteria)
 })
 
 let ocultarCatalogo = document.getElementById("ocultarCatalogo")
 ocultarCatalogo.ondblclick = () => {
    //reiniciando el div
    librosDiv.innerHTML = ``
 }
 
 //ordenar array por criterio
 let selectOrden = document.getElementById("selectOrden")
 
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
 
 //hoisting 
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
  
 
 
 //DOM agregar libro
 let agregarLibroBtn = document.getElementById("guardarLibroBtn")
 
 agregarLibroBtn.addEventListener("click", function(event){
    //nos permite que no se actualice al ejecutar el evento
    event.preventDefault()
    // event.target
    agregarLibro(estanteria)
 })
  //agregar libro para DOM:
  function agregarLibro(array){
    let autorIngresado = document.getElementById("autorInput")
    let tituloIngresado = document.getElementById("tituloInput")
    let precioIngresado = document.getElementById("precioInput")
    
    //arriba capturamos toda la etqieta input, necesitamos el valor
    const libroNuevo = new Libro(array.length+1,autorIngresado.value, tituloIngresado.value, precioIngresado.value, "libroNuevo.jpg")
    //pusheamos al array:
    array.push(libroNuevo)
    mostrarCatalogo(array)
    
    //resetear el form
    autorIngresado.value = ""
    tituloIngresado.value = ""
    precioIngresado.value = ""
 }
 
 
 //PROYECTO PREVIO A DOM:
 //FUNCIONES QUE IREMOS RE-UTILIZANDO PARA ADAPTAR A DOM Y EVENTOS
 
 //Funciones:
 
 function buscarPorTitulo(array){
   //opción a usuario que pregunte por su libro
   let tituloBuscado = prompt("Ingrese el titulo del libro que desea buscar")
   let busqueda = array.find(
      (book) => book.titulo.toUpperCase() === tituloBuscado.toUpperCase()
   )
   //condicional para que al usuario no le aparezca undefined por consola, pasamos msj más prolijo
   if(busqueda == undefined){
      console.log(`El libro ${tituloBuscado} no está en nuestro catalogo`)
   }else{
      console.log(busqueda)
   }
 }
 
 //METODO FILTER
 //metodo de busqueda que devuelve todos los elementos que coincida con el criterio de busqueda (pueden ser más de uno) EN UN ARRAY
 //Si nada coincide con el criterio me devuelve UN ARRAY VACIO
 function buscarPorAutor(arr){
   let autorBusqueda = prompt("Ingrese el autor que está buscando")
   let busqueda = arr.filter(
      (libro) => libro.autor.toLowerCase() == autorBusqueda.toLowerCase()
   )
   if(arr.length == 0){
      console.log(`Para el autor ${autorBusqueda} no hay coincidencias en nuestro catalogo`)
   }else{
      //reutilizamos un function que nos permite mostrar un array
      verCatalogo(busqueda)
   }
 }
 
 function filtrarPorAutorTitulo(array){
   let datoBusqueda = prompt("Ingrese el autor o titulo que desea encontrar")
   //filter que nos devuelva LOS libros por autor o titulo que queremos
   //creamos una condición compuesta para buscar
   let busqueda = array.filter(
      (dato) => dato.autor.toLowerCase() == datoBusqueda.toLowerCase() || dato.titulo.toLowerCase() == datoBusqueda.toLowerCase() 
   )
   if(busqueda.length == 0){
      console.log(`El dato ${datoBusqueda} no está en nuestro catalogo ni como título ni como autor`)
   }else{
      verCatalogo(busqueda)
   }
 }
 
 function filtrarPorPrecio(array){
   let precioIngresado = parseInt(prompt("Ingrese el precio máximo que puede pagar"))
   let busq = array.filter(
      (libro) => {return  libro.precio <= precioIngresado }
   )
   console.log(busq)
 }
 
 //FUNCTION ELIMINAR LIBRO: 
 function eliminarLibro(array){
   //mostrar catalago para que vea la id en consola y pueda elegir
   verCatalogo(array)
   let eliminarID = parseInt(prompt("Ingrese el id que desea eliminar"))
   //map: utilizamos para tener un array sólo con las id
   let arrayID = array.map(libro => libro.id)
   console.log(arrayID)
 
   //método que me permita saber la ubicación en el array a partir de un dato ingresado indexOf
   let indice = arrayID.indexOf(eliminarID)
   console.log(indice)
 
   //Tengo la posición del elemento puedo borrarlo
   //splice me permite borrar eligiendo desde que posición
   array.splice(indice, 1)
   verCatalogo(array)
 
 }
 
 //SORT -- ATENCIÓN MÉTODO QUE DESTRUYE (AFECTA-MODIFICA) EL ARRAY ORIGINAL
 // //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 //ordenando estanteria de menor a mayor
 
 
 
 function filtrarPorAutorTituloIncludes(array){
   let datoBusqueda = prompt("Ingrese el autor o titulo que desea encontrar es una búsqueda parcial")
   //filter que nos devuelva LOS libros por autor o titulo que queremos
   //creamos una condición compuesta para buscar
   let busqueda = array.filter(
      (dato) => dato.autor.toLowerCase().includes(datoBusqueda.toLowerCase())  || dato.titulo.toLowerCase().includes(datoBusqueda.toLowerCase()) 
   )
   if(busqueda.length == 0){
      console.log(`El dato ${datoBusqueda} no está en nuestro catalogo ni como título ni como autor`)
   }else{
      verCatalogo(busqueda)
   }
 }
 
 