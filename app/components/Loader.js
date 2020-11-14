export function Loader() {
const $loader = document.createElement('img');
$loader.src='app/assets/img/loading.gif';
$loader.alt='loading...';
$loader.classList.add('loader');
return $loader; 
}
