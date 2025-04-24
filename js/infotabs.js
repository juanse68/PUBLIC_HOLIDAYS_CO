export function renderInfoTab() {
    document.getElementById("app").innerHTML = `
      <section class="info" style="background-image: url('assets/fondo.png');">
        <h1>API: Public Holidays - Nager.Date</h1>
        <img src="assets/calendario.png" alt="Calendario" class="info-img" />
        <div class="descripcion">
          Esta aplicación utiliza la API pública de Nager.Date para mostrar los días festivos oficiales en Colombia para el año 2025.
        </div>
        <p class="github">GitHub: juanherrera-dev</p>
        <p class="version">Versión: V.1.0.0</p>
        <footer>Juan Herrera</footer>
      </section>
    `;
  }
  