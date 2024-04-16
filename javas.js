document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.getElementById('form');
    form.addEventListener('submit', function (event){
        event.preventDefault();
        const nombre = form.elements['nombre'].value;
        const email = form.elements['email'].value;
        const telefono = form.elements['telefono'].value;

        
    })
})