// https://developer.wordpress.org/rest-api/

//variables estaticas que exporto como un obj
const NAME = "walkexperience",
DOMAIN = `https://${NAME}.org`,
SITE = `${DOMAIN}/wp-json`,
API_WP = `${SITE}/wp/v2`,
POSTS = `${API_WP}/post?_embed`,
POST = `${API_WP}/posts`,
SEARCH = `${API_WP}/search?_embed&search=`,
CATEGORIES = `${API_WP}/categories`,
PAGES = `${API_WP}/pages`;git 

// cuando la propiedad del obj y su valor cohinciden desde ECMAS6 se puede simplificar no es necesario name:NAME
// Exportamos los difernetes obj
export default {
    NAME,
    DOMAIN,
    SITE,
    API_WP,
    POST,
    POST,
    SEARCH,
    CATEGORIES,
    PAGES
}

