//al ser export default puedo renombralo como quiera, en este caso api
import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";
import { SearchCard } from "./SearchCard.js";
import { ContactForm } from "./ContactForm.js";

export async function Router() {
  // Destructuración propiedad hash obj location
  let { hash } = location;
  //console.log(hash);
  document.getElementById("posts").innerHTML = null;
  // Validaciones url -> hash
  if (!hash || hash === "#/") {
    document.getElementById("posts").innerHTML = "<h2>Home Section</h2>";

    await ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        let htmlAcumulate = "";
        console.log(posts);
        posts.forEach((items) => (htmlAcumulate += PostCard(items)));
        document.getElementById("posts").innerHTML = htmlAcumulate;
      },
    });

    // SEARCH
    // Dado q el search nos incorpora el parámetro de busqueda "#/search?query=valor" no comparamos === sino que aplicamos include()
  } else if (hash.includes("#/search")) {
    document.getElementById("posts").innerHTML = "<h2>Search Section</h2>";
    let query = localStorage.getItem("wpSearch");
    console.log(query);
    // si NO hay nada en el input
    if (!query) {
      document.querySelector(".loader").style.display = "none";
      return false; // Salimos de las opciones de router
    }
    // si cumpimos los condicionantes, realizamos la petición al endpoint
    await ajax({
      url: `${api.SEARCH}${query}`,
      cbSuccess: (search) => {
        console.log(search);
        let html = "";
        // si el arreglo viene vacío, mostramos msg de error
        if (search.length === 0) {
          html = `<p class='error'>Sin resultados para
          <mark>${query}</mark>.</p>`;
          // si trae datos, renderizamos cada uno de ellos
        } else {
          search.forEach((post) => (html += SearchCard(post)));
        }
        document.getElementById("posts").innerHTML = html;
      },
    });
  } else if (hash === "#/contact") {
    //document.getElementById("posts").innerHTML = "<h2>Contact Section</h2>";
    // Agregamos el nodo ContactForm
    document.getElementById("posts").appendChild(ContactForm());

  } else {
    document.getElementById("posts").innerHTML =
      "<h2>Post selected - Realizamos petición ajax</h2>";

    console.log(`${api.POST}/${localStorage.getItem("postid")}`);

    await ajax({
      url: `${api.POST}/${localStorage.getItem("postid")}`,
      cbSuccess: (post) => {
        let html = "";
        console.log("it works", post);
        html += Post(post);
        document.getElementById("posts").innerHTML = html;
      },
    });
  }
  //Enespera pq ajax y Router son asincronos
  document.querySelector(".loader").style.display = "none";
}
