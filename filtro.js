document.addEventListener("DOMContentLoaded", function () {
  const productos = [
    // Array de productos
  ];

  const listaProductos = document.getElementById("lista-de-productos"); // Selecciona el contenedor de productos por ID
  const filtroInput = document.getElementById("filtroInput"); // Selecciona el input por ID

  function displayProductos(productos) {
    // Función para mostrar los productos en la lista
  }

  displayProductos(productos); // Muestra todos los productos al inicio

  const botonDeFiltro = document.querySelector("button");

  botonDeFiltro.onclick = function () {
    // Evento de click en el botón Filtrar

    while (listaProductos.firstChild) {
      listaProductos.removeChild(listaProductos.firstChild);
    }

    const texto = filtroInput.value.toLowerCase(); // Obtiene el texto del input y lo convierte a minúsculas

    const productosFiltrados = filtrado(productos, texto); // Filtra los productos basados en el texto ingresado

    displayProductos(productosFiltrados); // Muestra los productos filtrados
  };

  const filtrado = (productos = [], texto) => {
    // Función para filtrar los productos
  };
});
