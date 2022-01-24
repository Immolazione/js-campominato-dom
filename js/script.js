console.log('JS OK');

/*
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.

BONUS:
1- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
2- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle

*/

// FUNZIONE RANDOMIZE
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// RECUPERO ELEMENTI
const select = document.getElementById("select");
const grid = document.getElementById("grid");
const button = document.getElementById("generate");

function start() {
    // Cambio il tasto del bottone e lo chiamo ricomincia
    button.innerText = 'Ricomincia'

    grid.innerHTML = '';

    
    let attempts = 0;
    const totalBombs = 16;

    let cols;

    switch (select.value) {
        case "100":
            cols = 10;
            break;
        case "49":
            cols = 7;
            break;
        default:
            cols = 9;
            break;
    }

    const totalCells = cols * cols;

    const maxAttempts = totalCells - totalBombs;
};

button.addEventListener('click', start);