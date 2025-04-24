// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Elemento principal donde se mostrará el contenido
    const app = document.getElementById("app");
  
    // Mapa de rutas: cada nombre está asociado a un archivo JS con la lógica
    const routes = {
      home: "home.js",
      festivos: "festivos.js",
      buscar: "buscar.js",
      favoritos: "favoritos.js",
      info: "info.js",
      registro: "registro.js"
    };
  
    // Carga una pestaña en el <main> dinámicamente
    function loadTab(tab) {
      // Limpia el contenido actual
      app.innerHTML = "<p>Cargando...</p>";
  
      // Verifica si la ruta existe
      if (routes[tab]) {
        // Carga el archivo JS de la pestaña seleccionada
        import(`./${routes[tab]}`)
          .then(module => {
            // Cada archivo JS debe exportar una función llamada "render"
            app.innerHTML = module.render();
          })
          .catch(error => {
            app.innerHTML = "<p>Error al cargar la sección.</p>";
            console.error("Error cargando la pestaña:", error);
          });
      } else {
        app.innerHTML = "<p>Sección no encontrada.</p>";
      }
    }
  
    // Escucha clics en los botones del menú
    document.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const tab = e.target.dataset.tab;
        loadTab(tab);
      });
    });
  
    // Carga inicial por defecto (home)
    loadTab("home");
  });
  