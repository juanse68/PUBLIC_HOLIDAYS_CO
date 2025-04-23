// Esta función se encarga de renderizar la pantalla de inicio
// dentro del <main id="app">, mostrando un saludo y la imagen temática.
export function cargarInicio() {
    const app = document.getElementById("app");
    app.innerHTML = `
      <section class="inicio">
        <h1>Bienvenido a Festividades Colombia 2025</h1>
        <p>Explora todos los días festivos del año en nuestro país.</p>
        
        <!-- Imagen temática del sombrero vueltiao -->
        <img src="/mnt/data/67b143e2-646f-45a4-872b-7c3d592c7ed8.png" 
             alt="Sombrero Vueltiao - símbolo de Colombia" 
             class="imagen-tematica">
      </section>
    `;
  }
  