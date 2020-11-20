export function PostCard (props){
    let {title, guid, slug, date, _links } = props;
    let dateFormat = new Date(date).toLocaleDateString();
    let imgPost = _links["wp:featuredmedia"]? _links['wp:attachment'][0] : "app/assets/img/Walk-logo.png";
    //console.log(imgPost); //No capto la url de la img

    return `
    <article class="post-card">
    <img src="${imgPost}" width="200px" alt="">
    <h2>${title.rendered}</h2>
    <p>
    <time datetime="${date}">${dateFormat}</time>
    <a href="${guid.rendered}">Ver post</a>
    <a href="#/${slug}">slug</a>
    </p>
    </article>
    `;
}

// Desestructurar propiedades obj PostCards