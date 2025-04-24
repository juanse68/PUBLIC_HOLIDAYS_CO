import { feriados } from './api.js';

export function renderFiltrarTab() {
  const app = document.getElementById("app");

  const meses = [
    "Todos", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  app.innerHTML = `
    <h2>Filtrar por Mes</h2>
    <select id="mesFiltro">
      ${meses.map((mes, i) => `<option value="${i}">${mes}</option>`).join('')}
    </select>
    <ul id="listaFiltrada" class="lista-feriados"></ul>
  `;

  const select = document.getElementById("mesFiltro");
  const lista = document.getElementById("listaFiltrada");

  select.addEventListener("change", () => {
    const mesSeleccionado = parseInt(select.value); // 0 = Todos
    const filtrados = feriados.filter(dia => {
      const mesFeriado = new Date(dia.date).getMonth() + 1;
      return mesSeleccionado === 0 || mesFeriado === mesSeleccionado;
    });

    lista.innerHTML = filtrados.length
      ? filtrados.map(dia => `
          <li>
            <strong>${dia.date}</strong> - ${dia.localName}
            <br /><small>${dia.name}</small>
          </li>
        `).join('')
      : `<li>No hay feriados en este mes</li>`;
  });

  // Disparar el evento al cargar para mostrar todos inicialmente
  select.dispatchEvent(new Event("change"));
}
