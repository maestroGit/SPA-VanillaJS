import api from "./helpers/wp_api.js";
import { App } from "./App.js";

// Detecta el evento de cambio de hash ->location.hash

document.addEventListener("DOMContentLoaded", App); //Aquí page vale 1
// El evento de cambio de url renderiza la aplicación (App) y se ejecutan los condicionales de la función Router
window.addEventListener("hashchange", () => {
  api.page = 1; // Al haber cambiado la url volvemos a page=1
  App();
});
