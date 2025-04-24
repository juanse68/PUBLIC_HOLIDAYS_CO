// Ejecuta el código cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {

  // Llama a la API de Nager.Date para obtener los festivos de Colombia en 2025
  fetch("https://date.nager.at/api/v3/publicholidays/2025/CO")
    .then(res => res.json()) // Convierte la respuesta a JSON
    .then(data => {
      const hoy = new Date(); // Obtiene la fecha actual
      hoy.setHours(0, 0, 0, 0); // Normaliza la hora para comparar solo fechas

      // Encuentra el primer festivo cuya fecha sea mayor a hoy
      const proximo = data.find(f => new Date(f.date) > hoy);

      const diasRestantesEl = document.getElementById("diasRestantes"); // Selecciona el elemento donde se mostrará el mensaje

      if (proximo) {
        const fechaFestivo = new Date(proximo.date); // Convierte la fecha del próximo festivo a objeto Date
        const diferencia = Math.ceil((fechaFestivo - hoy) / (1000 * 60 * 60 * 24)); // Calcula los días restantes

        // Muestra cuántos días faltan y el nombre del festivo
        diasRestantesEl.textContent = `⏳ Faltan ${diferencia} día(s) para ${proximo.localName} (${proximo.date})`;
      } else {
        // Si no hay más festivos este año
        diasRestantesEl.textContent = "🎉 No hay más festivos este año.";
      }
    })
    .catch(error => {
      // Muestra un mensaje de error si no se pudo obtener la información
      console.error("Error al obtener el próximo festivo:", error);
      document.getElementById("diasRestantes").textContent = "❌ Error al cargar los datos.";
    });
});
