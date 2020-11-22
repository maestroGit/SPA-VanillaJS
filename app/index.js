import { App } from "./App.js";

// Detecta evento de cambio de hash ->location.hash

document.addEventListener("DOMContentLoaded", App);
// El evento de cambio de url renderiza la aplicación (App) y se ejecutan los condicionales de la función Router
window.addEventListener("hashchange", App);