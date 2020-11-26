/*It has become best practice to use the $ sign to help 
you distinguish between Javascript variables representing regular DOM elements (and every other data type) and variables that hold a reference to a jQuery object. 
*/

export function Posts() {
  const $posts = document.createElement("section");
  $posts.id = "posts";
  if (!location.hash.includes("#/search")) {
    $posts.classList.add("grid-fluid");
  }
  return $posts;
}
