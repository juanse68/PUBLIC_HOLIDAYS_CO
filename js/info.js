// js/info.js

export function renderInfo() {
    const app = document.getElementById('app');
    app.innerHTML = '';
  
    // Contenedor principal
    const section = document.createElement('section');
    section.classList.add('info-section');
  
    // Título de la API
    const title = document.createElement('h2');
    title.textContent = 'API Utilizada: Public Holidays - Nager.Date';
  
    // Imagen relacionada con la temática (festivos, calendario, etc.)
    const image = document.createElement('img');
    image.src = 'assets/calendar-icon.png'; // Asegúrate que esta imagen exista
    image.alt = 'Icono de calendario';
    image.classList.add('info-icon');
  
    // Cuadro de descripción
    const description = document.createElement('p');
    description.textContent =
      'Esta app utiliza la API de días festivos públicos de Nager.Date, que proporciona datos actualizados por país y año sobre días no laborales oficiales.';
  
    // GitHub del estudiante
    const github = document.createElement('p');
    github.innerHTML = 'GitHub: <a href="https://github.com/JuanHerreraDev" target="_blank">@JuanHerreraDev</a>';
  
    // Versión de la app
    const version = document.createElement('p');
    version.textContent = 'Versión de la app: V.1.0.0';
  
    // Nombre del estudiante (en la parte inferior)
    const footer = document.createElement('footer');
    footer.textContent = 'Desarrollado por Juan Herrera';
  
    // Agregar todos los elementos al contenedor
    section.appendChild(title);
    section.appendChild(image);
    section.appendChild(description);
    section.appendChild(github);
    section.appendChild(version);
    section.appendChild(footer);
  
    // Renderizamos en el main
    app.appendChild(section);
  }
  