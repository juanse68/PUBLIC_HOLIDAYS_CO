// Función para guardar un festivo como favorito
function guardarFavorito(nombre, fecha) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || []; // Obtiene los favoritos guardados en localStorage o un arreglo vacío
  
    // Verifica si el festivo ya está guardado (para evitar duplicados)
    const existe = favoritos.some(f => f.nombre === nombre && f.fecha === fecha);
    if (!existe) {
      favoritos.push({ nombre, fecha }); // Si no existe, lo agrega al arreglo
      localStorage.setItem("favoritos", JSON.stringify(favoritos)); // Guarda el nuevo arreglo en localStorage
    }
  
    mostrarFavoritos(); // Actualiza la vista de favoritos
  }
  
  // Función para mostrar los festivos guardados como favoritos
  function mostrarFavoritos() {
    const contenedor = document.getElementById("contenedor-favoritos"); // Selecciona el contenedor
    contenedor.innerHTML = ""; // Limpia el contenido actual
  
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || []; // Obtiene los favoritos del localStorage
  
    // Si no hay favoritos, muestra un mensaje
    if (favoritos.length === 0) {
      contenedor.innerHTML = "<p style='text-align:center;'>Aún no tienes festivos guardados ❤️</p>";
      return;
    }
  
    // Recorre los favoritos y los muestra en pantalla
    favoritos.forEach(f => {
      const div = document.createElement("div");
      div.classList.add("festivo");
      div.innerHTML = `
        <h3>${f.nombre}</h3>
        <p>${f.fecha}</p>
        <button class="btn-eliminar" onclick="eliminarFavorito('${f.nombre}', '${f.fecha}')">
          Quitar de favoritos
        </button>
      `;
      contenedor.appendChild(div); // Agrega el festivo al DOM
    });
  }
  
  // Función para eliminar un festivo de la lista de favoritos
  function eliminarFavorito(nombre, fecha) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    favoritos = favoritos.filter(f => f.nombre !== nombre || f.fecha !== fecha); // Filtra el que se quiere eliminar
    localStorage.setItem("favoritos", JSON.stringify(favoritos)); // Guarda la lista actualizada
    mostrarFavoritos(); // Vuelve a mostrar la lista
  }
  
  // Muestra los favoritos al cargar la página
  document.addEventListener("DOMContentLoaded", mostrarFavoritos);
  