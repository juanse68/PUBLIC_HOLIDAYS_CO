export let feriados = [];

export async function obtenerFeriados() {
  try {
    const respuesta = await fetch('https://date.nager.at/api/v3/PublicHolidays/2025/CO');
    if (!respuesta.ok) throw new Error('Error al obtener los feriados');
    feriados = await respuesta.json();
    return feriados;
  } catch (error) {
    console.error(error);
    return [];
  }
}
