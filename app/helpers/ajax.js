// Peticiones 
export function ajax (props) {
    // necesito la información y la callback que si devuelve ok queremos ejecutar(en este caos para moestrar los datos )
    // desestructuro el obj. Se tarta de una expresión que nos permite desempaquetar valores de arrays u objetos en grupos de variables.
    
    let {url,cbSuccess} = props;
    console.log(url,cbSuccess);
    
    fetch(url)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json =>cbSuccess(json))
    .catch(err => {
        let message = err.statusText || "Falló el acceso a la API";
        document.getElementById('root').innerHTML = `
        <div class='error'>
        <p>Error:${err.status}:${message}</p>
        <img src='app/assets/img/walk-logo.png' class='loader'></div>`;
        console.log(err);
    });
}