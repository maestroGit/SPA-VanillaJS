export function SearchForm() {
  const $form = document.createElement("form"),
    $input = document.createElement("input");

  $form.classList.add("form-search");
  $input.name = "search";
  $input.type = "search";
  $input.placeholder = "Search...";
  //Autocompletado eliminado
  $input.autocomplete = "off";
  $form.appendChild($input);
  // Endpoint del buscador (SEARCH = `${API_WP}/search?_embed&search=`)
  // incorpora ? parámetro con el termino q estamos buscando
  // Cuando cambie el hash enviaremos al endpoint del buscador

  // Si la url incorpora #search
  if (location.hash.includes("#/search")) {
    $input.value = localStorage.getItem("wpSearch");
  }

  // Si se elimina el resultado de busqueda debería eliminarlo del localStorage
  // The search event is fired when a search is initiated usinng an <input> element of type="search".
  document.addEventListener("search", (e) => {
   
    if (!e.target.matches("input[type='search']")) return false;
    // Ahora el e es input, validamos que esté vacío. Si NO hay valor elimina la variable wpSearch de localStore
    if (!e.target.value) localStorage.removeItem("wpSearch");
    
  });

  // Delegación del evento submit
  // Si el obj (e.target) que origino el evento !NO es el q tiene la clase searchForm (es la q le damos al agregarlo al Dom) no hagas nada(false)
  document.addEventListener("submit", (e) => {
    if (!e.target.matches(".form-search")) return false;
    e.preventDefault();
    // Almacena busqueda en localStorage
    //console.log(e.target.search.value)
    localStorage.setItem("wpSearch", e.target.search.value);
    // Modifica hash incorporando parámetro y así, activar index.js y renderizar app con el nuevo hash
    location.hash = `#/search?search=${e.target.search.value}`;
  });

  return $form;
}
