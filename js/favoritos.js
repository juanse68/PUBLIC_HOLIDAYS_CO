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
  