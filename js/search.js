// Función para buscar un día festivo por nombre
function searchHoliday(query) {
  const allHolidays = JSON.parse(localStorage.getItem('holidays')) || [];  // Obtener todos los días festivos
  return allHolidays.filter(holiday =>
    holiday.localName.toLowerCase().includes(query.toLowerCase())  // Filtrar por nombre del día festivo
  );
}
