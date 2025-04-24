// js/home.js

// Esta función se encarga de renderizar el contenido principal de la pestaña "Inicio"
export function renderHome() {
    const app = document.getElementById('app');
  
    // Limpiamos cualquier contenido anterior
    app.innerHTML = '';
  
    // Creamos el contenedor principal
    const container = document.createElement('section');
    container.classList.add('home-section');
  
    // Creamos un título
    const title = document.createElement('h1');
    title.textContent = 'Festivos Colombia 2025 🇨🇴';
  
    // Creamos un subtítulo o texto de bienvenida
    const subtitle = document.createElement('p');
    subtitle.textContent = 'Consulta y organiza los días festivos oficiales del año 2025 en Colombia.';
  
    // Agregamos los elementos al contenedor
    container.appendChild(title);
    container.appendChild(subtitle);
  
    // Insertamos el contenedor en el <main>
    app.appendChild(container);
  }
  