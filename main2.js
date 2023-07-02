function crearMenu() {
    const menuContainer = document.getElementById('menu-container');

    // Crea el elemento ul con la clase navbar-nav de Bootstrap
    const ul = document.createElement('ul');
    ul.classList.add('navbar-nav');

    // Crea los elementos li y a para cada opción del menú
    const opciones = ['Consultar catálogo', 'Agregar joya', 'Borrar joya'];
    opciones.forEach((opcion) => {
        const li = document.createElement('li');
        li.classList.add('nav-item');

        const a = document.createElement('a');
        a.classList.add('nav-link');
        a.href = '#';
        a.textContent = opcion;

        li.appendChild(a);
        ul.appendChild(li);
    });

    // Agrega el menú al contenedor
    menuContainer.appendChild(ul);
}

// Llama a la función para crear el menú
crearMenu();
