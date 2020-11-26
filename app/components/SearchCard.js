export function SearchCard(props){
    //Desestructurar propiedades del obj q recibimos como parámetro
    let {title, id, _embedded } = props;
    let slug = _embedded.self[0].slug;

    return `
    <article class="post-card">
    <h2>${title}</h2>
    <p>
    <a href="#/${slug}" data-id="${id}">Ver publicación</a>
    </p>
    </article>
    `
}