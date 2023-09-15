/* funcion al boton de navegadores en modo Mobile*/
const activacion = document.querySelector('nav-menu');
const menuOpcion = document.querySelector('.btn');


menuOpcion.addEventListener('click', function () {

    document.body.classList.toggle('menu-active');


});

/* funcion de mensaje de envio de formulario*/

const $form = document.querySelector('.formulario');

$form.addEventListener('submit', enviarSubmit)

async function enviarSubmit(e) {

    e.preventDefault()

    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })

    if (response.ok) {
        this.reset()
        alert('Gracias por Contactarme, Pronto le Daré Un Retorno :)')
    }

}

/* Funcion de modo Oscuro*/
const modoOscuro = document.querySelector('.dark');

const body = document.body;

modoOscuro.addEventListener('click', () => {

    body.classList.toggle('dark-mode');


});


const colorMenu = document.querySelectorAll('.enlace-menu');

colorMenu.forEach((colorMen) => {
    
    colorMen.style.color ='black';
});

















