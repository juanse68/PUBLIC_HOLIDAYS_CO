// Ejecuta el código cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {

    // Hace una solicitud a la API de Nager.Date para obtener los festivos de Colombia en 2025
    fetch("https://date.nager.at/api/v3/publicholidays/2025/CO")
      .then(res => res.json()) // Convierte la respuesta en formato JSON
      .then(data => {
        const contenedor = document.querySelector(".contenedor-festivos"); // Selecciona el contenedor donde se mostrarán los festivos
        contenedor.innerHTML = ""; // Limpia el contenido anterior
  
        // Recorre cada festivo recibido desde la API
        data.forEach(festivo => {
          const div = document.createElement("div"); // Crea un div para cada festivo
          div.classList.add("festivo"); // Añade una clase para estilo
  
          // Escapa comillas simples del nombre del festivo para evitar errores en el onclick
          const nombreSeguro = festivo.localName.replace(/'/g, "\\'");
          const fecha = festivo.date;
  
          // Crea el contenido HTML del festivo, incluyendo botón para guardarlo como favorito
          div.innerHTML = `
            <h3>${festivo.localName}</h3>
            <p>${fecha}</p>
            <button onclick="guardarFavorito('${nombreSeguro}', '${fecha}')">❤️ Guardar</button>
          `;
  
          contenedor.appendChild(div); // Agrega el festivo al contenedor principal
        });
      })
      .catch(error => {
        console.error("Error al cargar los festivos:", error); // Captura errores si falló la API
      });
  });
  