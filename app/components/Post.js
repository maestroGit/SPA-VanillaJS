export function Post(props) {
  //Desestructurar propiedades del obj q recibimos como parámetro
  let { title, content, date } = props;
  let dateFormat = new Date(date).toLocaleDateString();

  return `
    <section class="post-page">
    <aside>
    <h2>${title.rendered}</h2>
    <time datetime="${date}">${dateFormat}</time>
    </aside>
    <hr>
    <article>${content.rendered}</article>
    </section>
    `;
}
