// Función para guardar un día festivo como favorito en localStorage
function saveFavorite(holiday) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];  // Obtener favoritos existentes
    favorites.push(holiday);  // Añadir el nuevo favorito
    localStorage.setItem('favorites', JSON.stringify(favorites));  // Guardar nuevamente en localStorage
  }
  
  // Función para obtener los favoritos guardados desde localStorage
  function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];  // Devolver favoritos o lista vacía
  }
  
  // Función para mostrar los favoritos en la interfaz
  function renderFavorites() {
    const favorites = getFavorites();  // Obtener favoritos
    const app = document.getElementById('app');  // Obtener el contenedor principal
    app.innerHTML = `
      <h1>Favoritos</h1>
      ${favorites.map((favorite) => `
        <div class="favorite-item">
          <p>${favorite.date}: ${favorite.localName}</p>  <!-- Mostrar cada favorito -->
        </div>
      `).join('')}
    `;
  }
  