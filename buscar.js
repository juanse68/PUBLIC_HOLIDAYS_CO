import { feriados } from './api.js';

export function renderBuscarTab() {
  document.getElementById("app").innerHTML = `
    <h2>Buscar Feriado</h2>
    <input type="text" id="buscador" placeholder="Escribe un nombre o fecha..." />
    <ul id="resultados" class="lista-feriados"></ul>
  `;

  const input = document.getElementById('buscador');
  const resultados = document.getElementById('resultados');

  input.addEventListener('input', () => {
    const texto = input.value.toLowerCase().trim();

    const filtrados = feriados.filter(dia =>
      dia.localName.toLowerCase().includes(texto) ||
      dia.name.toLowerCase().includes(texto) ||
      dia.date.includes(texto)
    );

    resultados.innerHTML = filtrados.length
      ? filtrados.map(dia => `
          <li>
            <strong>${dia.date}</strong> - ${dia.localName}
            <br /><small>${dia.name}</small>
          </li>
        `).join('')
      : `<li>No se encontraron resultados</li>`;
  });
}
