document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.getElementById('form');
    const conteiner = document.getElementById("conteiner")
    const button = document.getElementById("button")
    form.addEventListener('submit', function (event){
        event.preventDefault();
        const nombre = form.elements['nombre'].value;
        const email = form.elements['email'].value;
        const telefono = form.elements['telefono'].value;

        const element = document.createElement("li");
    })
})