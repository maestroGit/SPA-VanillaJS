// Componente Header
import { Header } from "./components/Header.js";
// Menu
import { Menu } from "./components/Menu.js";
// Componente loader
import { Loader } from "./components/Loader.js";
// Componente Post
import { Posts } from "./components/Posts.js";
import { Router } from "./components/Router.js";
export function App() {
  const $root = document.getElementById("root");

  // $root es la variable q hace referencia al nodo principal de la aplicación
  // Limpio contenido
  $root.innerHTML=null;
  $root.appendChild(Header());
  $root.appendChild(Posts());
  $root.appendChild(Loader());

  Router();
}
