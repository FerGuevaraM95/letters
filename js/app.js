
import * as UI from './ui.js';

UI.searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener datos del formulario
    const artist = document.querySelector('#artist').value,
          song = document.querySelector('#song').value;

    if(artist === '' || song === '') {
        // Si el usuario deja los campos vacios mostrar error
        UI.divMessages.innerHTML = 'Error... Ambos campos son obligatorios';
        UI.divMessages.classList.add('error');
        setTimeout(() => {
            UI.divMessages.innerHTML = '';
            UI.divMessages.remove('error');
        }, 3000);
    } else {
        // El formulario esta completo realizar consulta de la API
    }   
})