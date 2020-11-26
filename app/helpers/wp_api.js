// https://developer.wordpress.org/rest-api/
// Application Program Interface (API) permits the interaction between two systems
// Enpoints the location where the API sends a request and where the response emanates.

//variables estaticas que exporto como un obj
const NAME = "css-tricks",
DOMAIN = `https://${NAME}.com`,
SITE = `${DOMAIN}/wp-json`,
API_WP = `${SITE}/wp/v2`,
PER_PAGES = 16,
POSTS = `${API_WP}/posts?_embed&per_page=${PER_PAGES}`,
POST = `${API_WP}/posts`,
SEARCH = `${API_WP}/search?_embed&per_page=${PER_PAGES}&search=`,
CATEGORIES = `${API_WP}/categories`,//sin usar
PAGES = `${API_WP}/pages`;

let page = 1;

// cuando la propiedad del obj y su valor coinciden desde ECMAS6 se puede simplificar no es necesario name:NAME
// Exportamos los difernetes obj
export default {
    NAME,
    DOMAIN,
    SITE,
    API_WP,
    PER_PAGES,
    POSTS,
    POST,
    SEARCH,
    CATEGORIES,
    page,
};

