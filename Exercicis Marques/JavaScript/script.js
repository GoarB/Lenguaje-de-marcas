
// EXERCICI 1: Mode fosc / clar
const botonTema = document.getElementById('btn-tema');

botonTema.addEventListener('click', () => {
    document.body.classList.toggle('tema-fosc');
});


// EXERCICI 2: Canviar el color de la caixa
const botonCaixa = document.getElementById('btn-caixa');
const laCaixa = document.getElementById('la-caixa');

botonCaixa.addEventListener('click', () => {
    laCaixa.classList.toggle('caixa2');
});


// EXERCICI 3: Comptador
const botonRestar = document.getElementById('btn-restar');
const botonSumar = document.getElementById('btn-sumar');
const valorComptador = document.getElementById('valor-comptador');

let comptador = 0;

botonSumar.addEventListener('click', () => {
    comptador++;
    valorComptador.textContent = comptador;
});

botonRestar.addEventListener('click', () => {
    comptador--;
    valorComptador.textContent = comptador;
});


// EXERCICI 4: Llista de tasques
const inputTasca = document.getElementById('input-tasca');
const botonAfegir = document.getElementById('btn-afegir');
const llistaTasques = document.getElementById('llista-tasques');

botonAfegir.addEventListener('click', () => {
    const textTasca = inputTasca.value.trim();

    if (textTasca !== '') {
        const novaTasca = document.createElement('li');
        novaTasca.textContent = textTasca;

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = '\u{1F534}';

        btnEliminar.addEventListener('click', (e) => {
            novaTasca.remove();
        });

        novaTasca.addEventListener('click', () => {
            novaTasca.classList.toggle('completat');
        });
        llistaTasques.appendChild(novaTasca);
        novaTasca.appendChild(btnEliminar);
    }
});

// EXERCICI 5: Consola i alertes
const botonConsola = document.getElementById('btn-consola');

botonConsola.addEventListener('click', () => {
    console.log('Hola! Aquest és l exercici de consola.');
    console.log('El comptador actual és:', comptador);

    alert('Mira la consola del navegador (F12)!');
});
