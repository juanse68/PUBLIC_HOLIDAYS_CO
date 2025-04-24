// js/main.js

// Importamos las funciones que se encargarán de cargar cada sección de la app.
// Estas funciones se crearán en sus respectivos archivos más adelante.
import { renderHome } from './home.js';
import { renderSearch } from './buscador.js';
import { renderFilter } from './filtro.js';
import { renderFavorites } from './favoritos.js';
import { renderInfo } from './info.js';

// Cuando el DOM esté completamente cargado, se ejecuta esta función
document.addEventListener('DOMContentLoaded', () => {
  // Cargar la vista inicial por defecto (Inicio)
  renderHome();

  // Activar la navegación del menú inferior
  setupNavigation();
});

// Esta función se encarga de escuchar los clics en cada botón del menú inferior
function setupNavigation() {
  // Botón "Inicio"
  document.getElementById('nav-home').addEventListener('click', () => {
    renderHome();
  });

  // Botón "Buscar"
  document.getElementById('nav-search').addEventListener('click', () => {
    renderSearch();
  });

  // Botón "Filtrar"
  document.getElementById('nav-filter').addEventListener('click', () => {
    renderFilter();
  });

  // Botón "Favoritos"
  document.getElementById('nav-favorites').addEventListener('click', () => {
    renderFavorites();
  });

  // Botón "Info"
  document.getElementById('nav-info').addEventListener('click', () => {
    renderInfo();
  });
}
