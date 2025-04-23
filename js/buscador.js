// Este archivo maneja el comportamiento del buscador, filtrando los feriados por nombre o fecha

import { feriados } from './api.js'; // Importamos los feriados que obtenemos desde `api.js`

// Función que inicializa el comportamiento del buscador
export function iniciarBuscador() {
  // Escuchamos el evento "input" en el campo de búsqueda
  document.getElementById("input-busqueda").addEventListener("input", function () {
    const query = this.value.toLowerCase(); // Convertimos el texto del buscador a minúsculas
    const resultados = feriados.filter(f => // Filtramos los feriados que coincidan con la búsqueda
      f.localName.toLowerCase().includes(query) || f.date.includes(query)
    );

    const listaResultados = document.getElementById("resultados-busqueda");
    listaResultados.innerHTML = ""; // Limpiamos los resultados anteriores

    // Agregamos los resultados de la búsqueda a la lista
    resultados.forEach(feriado => {
      const item = document.createElement("li");
      item.innerHTML = `<strong>${feriado.date}</strong>: ${feriado.localName}`;
      listaResultados.appendChild(item); // Añadimos cada resultado a la lista
    });
  });
}
