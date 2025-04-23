export function iniciarNavegacion() {
    document.querySelectorAll(".tab").forEach(tab => {
      tab.addEventListener("click", () => {
        document.querySelectorAll(".view").forEach(view => view.classList.remove("active"));
        
        const vistaId = `vista-${tab.dataset.tab}`;
        document.getElementById(vistaId).classList.add("active");
  
        // Si la pestaña seleccionada es "Información", cargamos la información
        if (vistaId === "vista-informativa") {
          cargarInformativa(); // Cargamos el contenido de la pestaña informativa
        }
      });
    });
  }
  