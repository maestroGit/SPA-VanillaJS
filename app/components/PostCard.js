export function PostCard (props){
    //Desestructurar propiedades del obj q recibimos como parámetro
    let {title, id, guid, slug, date, _links } = props;
    let dateFormat = new Date(date).toLocaleDateString();
    let imgPost = _links["wp:featuredmedia"]? _links['wp:attachment'][0] : "app/assets/img/Walk-logo.png";
    //console.log(imgPost); //No capto la url de la img

    // Delegación de eventos
    // event.target property can be used in order to implement event delegation.
    document.addEventListener('click', (e) => {
        if(!e.target.matches('.post-card a'))return false;
            //setItem() method of the Storage interface, when passed a key name and value, will add that key to the given Storage object, or update that key's value if it already exists.
            console.log(e.target.dataset)
            localStorage.setItem('postid',e.target.dataset.id);
            
        
    })

    return `
    <article class="post-card">
    <img src="${imgPost}" width="200px" alt="">
    <h2>${title.rendered}</h2>
    <p>
    <time datetime="${date}">${dateFormat}</time>
    <a href="${guid.rendered}">Link post </a>
    <a href="#/${slug}" data-id="${id}">Ver slug</a>
    </p>
    </article>
    `;
}

