// Peticiones 
export async function ajax (props) {
    // necesito la información y la callback que si devuelve ok queremos ejecutar(en este caos para moestrar los datos )
    // desestructuro el obj. Se tarta de una expresión que nos permite desempaquetar valores de arrays u objetos en grupos de variables.
    // ajax requiere un obj como parámetro -> importado de wp_api.js
    let {url,cbSuccess} = props;
    //console.log(url,cbSuccess);
    
    await fetch(url)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json =>cbSuccess(json))
    .catch(err => {
        let message = err.statusText || "Falló el acceso a la API";
        // Utilizo el nodo 'post' y no 'root' para insertar errores para q se cargue la cabecera, aunque existan error con la api
        document.getElementById('posts').innerHTML = `
        <div class='error'>
        <p>Error:${err.status}:${message}</p>
        <img src='app/assets/img/walk-logo.png' width='30rem'></div>`;
        document.querySelector('.loader').style.display = 'none';
        console.log(err);
    });
}