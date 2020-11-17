import { Title } from "./Title.js";
import { Menu } from "./Menu.js";
import { SearchForm } from "./SearchForm.js";

export function Header(){
    const $header = document.createElement("header");
    $header.classList.add("header");
    $header.appendChild(Title());
    $header.appendChild(Menu()); //appenChild agrega un nodo por lo q tiene q sea un element; no est: `es cadena de texto`
    $header.appendChild(SearchForm());
    return $header;
    
}