// Este archivo maneja el CRUD de favoritos usando localStorage

// Función para agregar un feriado a los favoritos
export function agregarFavorito(fecha, nombre) {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || []; // Recuperamos los favoritos del localStorage (si existen)
    
    // Verificamos si el feriado ya está en favoritos
    if (favoritos.find(f => f.fecha === fecha)) {
      alert("Ya está en favoritos"); // Si ya está, mostramos una alerta
      return;
    }
  
    // Si no está en favoritos, lo añadimos
    favoritos.push({ fecha, nombre });
    localStorage.setItem("favoritos", JSON.stringify(favoritos)); // Guardamos la nueva lista de favoritos en localStorage
    alert("Agregado a favoritos"); // Confirmamos que se agregó
  }
  
  // Función para mostrar los favoritos en la pestaña "Favoritos"
  export function mostrarFavoritos() {
    const lista = document.getElementById("lista-favoritos");
    lista.innerHTML = ""; // Limpiamos la lista de favoritos
  
    // Recuperamos los favoritos del localStorage
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    if (favoritos.length === 0) {
      lista.innerHTML = "<li>No tienes favoritos aún.</li>"; // Si no hay favoritos, mostramos un mensaje
      return;
    }
  
    // Si hay favoritos, los mostramos en la lista
    favoritos.forEach((f, index) => {
      const item = document.createElement("li");
      item.innerHTML = `
        <strong>${f.fecha}</strong>: ${f.nombre}
        <button onclick="eliminarFavorito(${index})">🗑️</button>  // Botón para eliminar
      `;
      lista.appendChild(item); // Añadimos cada favorito a la lista
    });
  }
  
  // Función para eliminar un favorito
  export function eliminarFavorito(index) {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    favoritos.splice(index, 1); // Eliminamos el favorito de la lista usando su índice
    localStorage.setItem("favoritos", JSON.stringify(favoritos)); // Guardamos la lista actualizada en localStorage
    mostrarFavoritos(); // Volvemos a mostrar la lista de favoritos actualizada
  }
  