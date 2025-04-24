document.addEventListener("DOMContentLoaded", () => {
    const filtroSelect = document.getElementById("filtro");
    const contenedorFestivos = document.getElementById("festivos");
  
    // Suponiendo que los festivos ya están cargados en esta variable global:
    let todosLosFestivos = [];
  
    // Función para cargar las opciones únicas del filtro
    function cargarOpcionesFiltro(festivos) {
      const tipos = [...new Set(festivos.map(f => f.type))]; // Tipos únicos
      tipos.forEach(tipo => {
        const option = document.createElement("option");
        option.value = tipo;
        option.textContent = tipo.charAt(0).toUpperCase() + tipo.slice(1);
        filtroSelect.appendChild(option);
      });
    }
  
    // Función para renderizar los festivos filtrados
    function mostrarFestivosFiltrados(tipo) {
      contenedorFestivos.innerHTML = "";
      const filtrados = tipo === "all" ? todosLosFestivos : todosLosFestivos.filter(f => f.type === tipo);
  
      if (filtrados.length === 0) {
        contenedorFestivos.innerHTML = `<p style="text-align:center;">No hay festivos de este tipo.</p>`;
        return;
      }
  
      filtrados.forEach(festivo => {
        const div = document.createElement("div");
        div.classList.add("festivo");
        div.innerHTML = `
          <h3>${festivo.localName}</h3>
          <p><strong>Fecha:</strong> ${festivo.date}</p>
          <p><strong>Tipo:</strong> ${festivo.type}</p>
        `;
        contenedorFestivos.appendChild(div);
      });
    }
  
    // Escuchar cambios en el filtro
    filtroSelect.addEventListener("change", () => {
      const tipoSeleccionado = filtroSelect.value;
      mostrarFestivosFiltrados(tipoSeleccionado);
    });
  
    // Función pública para inicializar desde el script principal
    window.initFiltro = function (festivos) {
      todosLosFestivos = festivos;
      cargarOpcionesFiltro(festivos);
      mostrarFestivosFiltrados("all");
    };
  });
  
// En esta versión, no se implementa filtro por tipo porque la API no lo provee
