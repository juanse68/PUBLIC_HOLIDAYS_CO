import { renderInfoTab } from './infoTab.js';
import { obtenerFeriados, feriados } from './api.js';
import { renderBuscarTab } from './buscador.js';
import { renderFiltrarTab } from './filter.js';
import { renderFavoritosTab } from './favoritosTab.js';

window.addEventListener("DOMContentLoaded", () => {
  cambiarPestaña('inicio');
});

window.cambiarPestaña = async function(pestaña) {
  const app = document.getElementById("app");

  switch (pestaña) {
    case 'inicio':
      app.innerHTML = `<h2>Inicio</h2><p>Cargando feriados...</p>`;
      const datos = await obtenerFeriados();
      app.innerHTML = `
        <h2>Feriados en Colombia - 2025</h2>
        <ul class="lista-feriados">
          ${datos.map(dia => `
            <li>
              <strong>${dia.date}</strong> - ${dia.localName}
              <br /><small>${dia.name}</small>
            </li>
          `).join('')}
        </ul>
      `;
      break;

    case 'buscar':
      renderBuscarTab();
      break;

    case 'filtrar':
      app.innerHTML = `<h2>Filtrar</h2><p>Aquí irá el filtro por tipo de feriado.</p>`;
      break;

    case 'favoritos':
      app.innerHTML = `<h2>Favoritos</h2><p>Aquí aparecerán tus feriados guardados.</p>`;
      break;

    case 'original':
      app.innerHTML = `<h2>Funcionalidad Original</h2><p>Aquí va la funcionalidad única de tu app.</p>`;
      break;

    case 'info':
      renderInfoTab();
      break;

    case 'filtrar':
      renderFiltrarTab();
      break;

    case 'favoritos':
      renderFavoritosTab();
      break;

      

    default:
      app.innerHTML = `<h2>Error</h2><p>Pestaña no encontrada.</p>`;
  }


}
