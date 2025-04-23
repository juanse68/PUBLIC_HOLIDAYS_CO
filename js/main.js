// Este archivo es el punto de entrada donde se cargan todas las funcionalidades necesarias

import { cargarFeriados } from './api.js'; // Importamos la función para cargar los feriados
import { iniciarBuscador } from './buscador.js'; // Importamos la función para inicializar el buscador
import { iniciarNavegacion } from './navegacion.js'; // Importamos la función para manejar la navegación

// Este evento se ejecuta cuando todo el contenido del DOM ha sido cargado
window.addEventListener("DOMContentLoaded", () => {
  cargarFeriados(); // Cargamos los feriados al inicio
  iniciarNavegacion(); // Iniciamos la navegación entre las pestañas
  iniciarBuscador(); // Iniciamos el buscador
});
