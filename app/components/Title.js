// Función q devuelve el nodo creado en  la variable h1
// Desde App.js lo renderizamos  
import api from "../helpers/wp_api.js";
export function Title () {
    // Creamos nodo
    const $h1 = document.createElement("h1");
    // Modificamos contenido
    $h1.innerHTML= `
    <a href="${api.DOMAIN}" target="_blank" rel="noopener">${api.NAME.toUpperCase()}</a>
    `;
    // Devuelve nodo
    return $h1
}