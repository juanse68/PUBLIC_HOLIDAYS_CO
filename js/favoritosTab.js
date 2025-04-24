import { obtenerFavoritos, agregarAFavoritos, eliminarDeFavoritos } from './favorites.js';
import { feriados } from './api.js';

export function renderFavoritosTab() {
  const app = document.getElementById("app");
  const favoritos = obtenerFavoritos();

  app.innerHTML = `
    <h2>Favoritos</h2>
    <ul id="listaFavoritos" class="lista-feriados">
      ${favoritos.map(id => {
        const dia = feriados.find(f => f.id === id);
        return dia ? `
          <li>
            <strong>${dia.date}</strong> - ${dia.localName}
            <br /><small>${dia.name}</small>
            <button onclick="eliminarDeFavoritos('${dia.id}')">Eliminar</button>
          </li>
        ` : '';
      }).join('')}
    </ul>
  `;
}
