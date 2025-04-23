// =========================
// INFORMACIÓN DE LA API
// =========================

// Esta función se encarga de generar y mostrar dinámicamente el contenido de la pestaña informativa.
// Se ejecuta cuando el usuario selecciona la pestaña "Información" desde el menú inferior.
export function cargarInformativa() {
    // Obtenemos el contenedor donde se debe renderizar la pestaña informativa
    const vistaInformativa = document.getElementById("vista-informativa");
  
    // Insertamos el contenido HTML directamente dentro del contenedor
    vistaInformativa.innerHTML = `
      <!-- Contenedor principal con imagen de fondo -->
      <div class="informativa-container" style="background-image: url('https://example.com/imagen-de-fondo.jpg'); background-size: cover; padding: 20px; border-radius: 8px; color: white;">
        
        <!-- Título principal que muestra el nombre de la API usada -->
        <h2>API de Feriados - 2025</h2>
        
        <!-- Nombre del estudiante -->
        <p><strong>Estudiante:</strong> Juan Herrera</p>
  
        <!-- Enlace al perfil de GitHub del estudiante -->
        <p><strong>GitHub:</strong> 
          <a href="https://github.com/juan-herrera" target="_blank" style="color: #fff;">juan-herrera</a>
        </p>
  
        <!-- Versión de la aplicación (fija para todos los estudiantes) -->
        <p><strong>Versión de la app:</strong> V.1.0.0</p>
  
        <!-- Cuadro con una breve descripción de lo que hace la API -->
        <div style="margin-top: 20px; background-color: rgba(0, 0, 0, 0.5); padding: 15px; border-radius: 8px;">
          <h3>Descripción de la API</h3>
          <p>
            La API proporciona información sobre los días festivos nacionales en Colombia para el año 2025.
            Permite consultar las fechas oficiales y los nombres locales de cada feriado.
          </p>
        </div>
  
        <!-- Imagen PNG temática relacionada con feriados o Colombia -->
        <div style="margin-top: 20px;">
          <img src="https://example.com/imagen-tematica.png" alt="Imagen Temática" style="width: 100%; border-radius: 8px;">
        </div>
  
        <!-- Mensaje de agradecimiento en la parte inferior -->
        <div style="text-align: center; margin-top: 20px;">
          <p>¡Gracias por usar la aplicación!</p>
        </div>
      </div>
    `;
  }
  