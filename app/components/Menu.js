export function Menu(){
    const $menu = document.createElement("nav");
    $menu.classList.add("menu");
    $menu.innerHTML= `
    <a href="#/">Home</a>
    <spam>-</spam>
    <a href="#/search">Search</a>
    <spam>-</spam>
    <a href="#/contact">Contacto</a>
    <spam>-</spam>
    <a href="https://walkexperience.org/" target="_blank" rel="noopener">Walk Experience</a>`
    return $menu;
}