// Este archivo maneja la navegación entre las diferentes pestañas de la aplicación

import { mostrarFavoritos } from './favoritos.js'; // Importamos la función para mostrar los favoritos

// Función que inicializa la navegación entre las pestañas
export function iniciarNavegacion() {
  document.querySelectorAll(".tab").forEach(tab => { // Iteramos sobre cada pestaña
    tab.addEventListener("click", () => { // Cuando una pestaña es clickeada
      // Ocultamos todas las vistas activas
      document.querySelectorAll(".view").forEach(view => view.classList.remove("active"));
      
      // Obtenemos el id de la vista asociada a la pestaña clickeada
      const vistaId = `vista-${tab.dataset.tab}`;
      document.getElementById(vistaId).classList.add("active"); // Mostramos la vista correspondiente

      // Si la pestaña seleccionada es "Favoritos", mostramos la lista de favoritos
      if (vistaId === "vista-favoritos") {
        mostrarFavoritos();
      }
    });
  });
}
