// Este archivo se encarga de hacer la conexión con la API y manejar la obtención de los feriados

// Variable global que almacenará todos los feriados obtenidos de la API
export let feriados = [];

// Función que hace la llamada a la API para obtener los feriados y mostrarlos en la vista principal
export function cargarFeriados() {
  fetch("https://date.nager.at/api/v3/PublicHolidays/2025/CO") // Llamada a la API para obtener los feriados de 2025 en Colombia
    .then(response => response.json()) // Convertimos la respuesta en formato JSON
    .then(data => {
      feriados = data; // Almacenamos los feriados globalmente

      // Seleccionamos el contenedor de la lista en el HTML
      const lista = document.getElementById("lista-feriados");
      lista.innerHTML = ""; // Limpiamos cualquier contenido anterior en la lista

      // Iteramos sobre los feriados obtenidos y los insertamos en la lista del HTML
      feriados.forEach(feriado => {
        const item = document.createElement("li"); // Creamos un nuevo <li> para cada feriado
        item.innerHTML = `
          <strong>${feriado.date}</strong>: ${feriado.localName} 
          <button onclick="agregarFavorito('${feriado.date}', '${feriado.localName.replace(/'/g, "\\'")}')">💖</button>
        `;
        lista.appendChild(item); // Añadimos el item a la lista
      });
    })
    .catch(error => console.error("Error al cargar los feriados:", error)); // Manejo de errores si la API no responde
}
