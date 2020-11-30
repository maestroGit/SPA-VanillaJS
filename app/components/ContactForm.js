export function ContactForm() {
  const $form = document.createElement("form");
  $form.classList.add("contact-form");

  const $styles = document.getElementById("dynamic-styles");
  // inyectar estilos dinamicamente
  $styles.innerHTML = `
  .contact-form {
    --form-ok-color: #4caf50;
    --form-error-color: #f44336;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
  }

  .contact-form >* {
    padding: 0.5rem;
    margin: 1rem auto;
    display: block;
    width: 100%;
  }

  .contact-form textarea {
    resize: none;
  }

  .contact-form legend,
  .contact-form-response {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }

  .contact-form input,
  .contact-form textarea {
    font-size: 1rem;
    font-family: sans-serif;
  }

  .contact-form input[type="submit"] {
    width: 40%;
    font-weight: bold;
    cursor: pointer;
  }

  .contact-form *::placeholder {
    color: #000;
  }

  .contact-form [required]:valid {
    border: thin solid var(--form-ok-color);
  }

  .contact-form [required]:invalid {
    border: thin solid var(--form-error-color);
  }

  .contact-form-error {
    margin-top: -1rem;
    font-size: 80%;
    background-color: var(--form-error-color);
    color: #fff;
    transition: all 800ms ease;
  }

  .contact-form-error.is-active {
    display: block;
    animation: show-message 1s 1 normal 0s ease-out both;
  }

  .contact-form-loader {
    text-align: center;
  }

  .none {
    display: none;
  }

  @keyframes show-message {
    0% {
      visibility: hidden;
      opacity: 0;
    }

    100% {
      visibility: visible;
      opacity: 1;
    }
  }
  `;
  // Validaciones formulario con htm5 (excepto texarea) y expresiones regulares
  // Validación 255 caracteres por si el string esperado en DDBB debe ser del tipo VARCHAR o CHART
  $form.innerHTML = `
  <legend>Envíar formulario</legend>
  <input type="text" name="name" placeholder="Escribe tu nombre"
  title="Nombre sólo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required>
  <input type="email" name="email" placeholder="Escribe tu email" title="Email incorrecto"
  pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$" required>
  <input type="text" name="subject" placeholder="Asunto a tratar" title="El Asunto es requerido" required>
  <textarea name="comments" cols="50" rows="5" placeholder="Escribe tus comentarios"
  title="Tu comentario no debe exceder los 255 caracteres" data-pattern="^.{1,255}$" required></textarea>
  <input type="submit" value="Enviar">
  <div class="contact-form-loader none">
  <img src="app/assets/img/loading.gif" alt="Cargando">
  </div>
  <div class="contact-form-response none">
  <p>Los datos han sido enviados</p>
  </div>
  `;

  // Validaciones formulario
  function validarForm() {
    const $form = document.querySelector(".contact-form");
    // Capturamos solo los input requeridos
    const $input = document.querySelectorAll(".contact-form [required]");
    //console.log($form, $input);

    $input.forEach((element) => {
      const $span = document.createElement("span");
      $span.id = element.name;
      $span.textContent = element.title;
      $span.classList.add("contact-form-error", "none");
      element.insertAdjacentElement("afterend", $span);
      //return console.log($span);
    });

    //capturar evento kyup para validaciones
    document.addEventListener("keyup", (e) => {
      if (e.target.matches(".contact-form [required")) {
        let $input = e.target;
        let pattern = $input.pattern || $input.dataset.pattern;
        console.log($input, pattern);
        if (pattern && $input.value !== "") {
          console.log("El input tiene patrón");
          let regex = new RegExp(pattern);
          return !regex.exec($input.value)
            ? document.getElementById($input.name).classList.add("is-active")
            : document
                .getElementById($input.name)
                .classList.remove("is-active");
        }
        if (!pattern) {
          console.log("El input NOO tiene patrón");
        }
      }
    });
    //capturar evento submit
    document.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("Send form succeed");
      const $loader = document.querySelector(".contact-form-loader");
      $loader.classList.remove("none");

      // Petición POST fetch form Envío através https://formsubmit.co/api-documentation
      fetch("https://formsubmit.co/ajax/b7111ccca0ad4bb79c03413b88461adc", {
        method: "POST",
        data: {
          name: "FormSubmit",
          message: "I'm from Devro LABS",
        },
        dataType: "json",
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          let { message } = json;
          console.log(json,message);
          $loader.classList.add("none");
          const $response = document.querySelector(".contact-form-response");
          //$response.classList.remove("none");
          $response.innerHTML=message;
        })
        .catch((err) => {
          console.log(err + " error ocurred");
        });
    });
  }
  // Para evitar el error de interarcion con elementos que se cargan dinamicamente
  setTimeout(() => validarForm(), 100);

  return $form;
}
