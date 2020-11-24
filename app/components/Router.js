//al ser export default puedo renombralo como quiera, en este caso api
import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";


export async function Router() {
  // Destructuración propiedad hash obj location
  let { hash } = location;
  console.log(hash);
  document.getElementById("posts").innerHTML = null;

  // Validaciones url -> hash
  if (!hash || hash === "#/") {
    document.getElementById("posts").innerHTML = "<h2>Home Section</h2>";

    await ajax({
      url: api.POST,
      cbSuccess: (posts) => {
        let htmlAcumulate = "";
        posts.forEach((items) => (htmlAcumulate += PostCard(items)));

        document.getElementById("posts").innerHTML = htmlAcumulate;
        //console.log(posts);
        // let imgPost = _links["wp:featuredmedia"]?...No capto la url de la img de la api
      },
    });

    // Dado q el search nos incorpora el parámetro de busqueda "#/search?query=valor" no comparamos === sino que aplicamos include()
  } else if (hash.includes("#/search")) {
    document.getElementById("posts").innerHTML = "<h2>Search Section</h2>";
    let query = localStorage.getItem("wpSearch");
    console.log(query)
    if(!query){
      return false // Salimos de las opciones de router
    }
    await ajax({
      url:`${api.SEARCH}${query}`,
      cbSuccess:(search)=> {
        console.log(search);
      }
    });

    

  } else if (hash === "#/contact") {
    document.getElementById("posts").innerHTML = "<h2>Contact Section</h2>";
  } else {
    document.getElementById("posts").innerHTML =
      "<h2>Post selected - Realizamos petición ajax</h2>";

    console.log(`${api.POST}/${localStorage.getItem("postid")}`)

      await ajax({
        url:`${api.POST}/${localStorage.getItem("postid")}`,
        cbSuccess:(post)=>{
          let html ="";
          console.log('it works', post)
          html+=Post(post);
          document.getElementById("posts").innerHTML = html;
        }
      })
  }
  //Enespera pq ajax y Router son asincronos
  document.querySelector(".loader").style.display = "none";
}
