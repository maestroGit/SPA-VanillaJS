import { PostCard } from "../components/PostCard.js";
import { SearchCard } from "../components/SearchCard.js";
import { ajax } from "./ajax.js";
import api from "./wp_api.js";

export function InfinitScroll() {
  let query = localStorage.getItem("wpSearch"),
    apiURL,
    Component; //HOC High Order Component

  window.addEventListener("scroll",async (e) => {
    let { scrollTop, clientHeight, scrollHeight } = document.documentElement, // Destructuramos de la etiqueta html
      { hash } = window.location;

    console.log(scrollTop, clientHeight, scrollHeight);
    //creo que no tengo scroll pg no estoy en <html>
    if (scrollTop + clientHeight >= scrollHeight) {
      api.page++;
      if (!hash || hash === "#/") {
        apiURL = `${api.POSTS}&page=${api.page}`;
        Component = PostCard;
      } else if (hash.includes("#/search")) {
        apiURL = `${api.SEARCH}&page=${api.page}`;
        Component = SearchCard;
      } else {
        return false;
      }

      document.querySelector("loader").style.display = "block";

      await ajax({
          url:apiURL,
          cbSuccess:(posts) => {
              //console.log(posts);
              let html = "";
              posts.forEach(post => html += Component(post));
              document.getElementById("posts").insertAdjacentHTML("beforeend",html);
              document.querySelector("loader").style.display = "none";
          }
        });
    }
  });
}
