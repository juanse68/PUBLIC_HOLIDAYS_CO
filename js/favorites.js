export function obtenerFavoritos() {
    const favoritos = localStorage.getItem('favoritos');
    return favoritos ? JSON.parse(favoritos) : [];
  }
  
  export function agregarAFavoritos(id) {
    const favoritos = obtenerFavoritos();
    if (!favoritos.includes(id)) {
      favoritos.push(id);
      localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }
  }
  
  export function eliminarDeFavoritos(id) {
    let favoritos = obtenerFavoritos();
    favoritos = favoritos.filter(favId => favId !== id);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }
  