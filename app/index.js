import { App } from "./App.js";

// Detecta evento de cambio de hash ->location.hash

document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", App);