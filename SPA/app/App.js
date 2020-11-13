import api from "./helpers/wp_api.js";
//al ser export default puedo renombralo como quiera, en este caso api
import { ajax } from "./helpers/ajax.js";

export function App() {
  document.getElementById("root").innerHTML = `<h1>It works</h1>`;
  // obj q le pasamos con dos parámetros -> importado de wp_api.js
  console.log(api);
  ajax({
    url: api.POST,
    cbSuccess: (post) => {
      console.log(post);
    },
  });
// otra petición 
  ajax({
    url: api.PAGES,
    cbSuccess: (post) => {
      console.log(post);
    },
  });
}
