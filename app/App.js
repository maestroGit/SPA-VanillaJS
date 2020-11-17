//al ser export default puedo renombralo como quiera, en este caso api
import api from "./helpers/wp_api.js";
import { ajax } from "./helpers/ajax.js";
// Componente Header
import { Header } from "./components/Header.js";
// Menu
import { Menu } from "./components/Menu.js";
// Componente loader
import {Loader} from "./components/Loader.js";

export function App() {
  //document.getElementById("root").innerHTML = `<h1>It works</h1>`;
  //console.log(api);
  // ajax requiere un obj como paámetro -> importado de wp_api.js
  ajax({
    url: api.POST,
    cbSuccess: (post) => {
      console.log(post);
    },
  });
// otra petición 
  ajax({
    url: api.PAGES,
    cbSuccess: (pag) => {
      console.log(pag);
    },
  });
}

// Title
// Necesitamos un nodo para agregar Title (<h1>) a un nodo
const d = document,
$root = d.getElementById('root');

// $root es la variable q hace referencia al nodo principal de la aplicación
$root.appendChild(Header());
$root.appendChild(Loader());


