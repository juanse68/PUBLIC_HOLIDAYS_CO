import { cargarFeriados } from './api.js';
import { iniciarBuscador } from './buscador.js';
import { iniciarNavegacion } from './navegacion.js';
import { cargarInformativa } from './informativa.js'; // Importamos la nueva función

window.addEventListener("DOMContentLoaded", () => {
  cargarFeriados();
  iniciarNavegacion();
  iniciarBuscador();
  cargarInformativa(); // Llamamos a la función para cargar la pestaña informativa
});
