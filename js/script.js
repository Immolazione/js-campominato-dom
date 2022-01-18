console.log('JS OK');

const generateButton = document.getElementById('generate');
const grid = document.getElementById('grid');



function play() {
    // SVUOTA GRID E BOTTONE
    generateButton.innerText = 'Ricomincia';
    grid.innerText = '';

    // FASE PREPARATIVA
    // BOMBE
    const TOTAL_BOMBS = 16;

    // RECUPERO VALORI TENDINA

    const level = parseInt(document.getElementById('number-of-cells').value);
    console.log(level);
    let col = Math.sqrt(level);
    let points = 0;
    console.log(col);

    function generateCell (cellInRow, i) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = `calc(100% / ${cellInRow})`;
        cell.style.height = `calc(100% / ${cellInRow})`;
        const number = i + 1;
        cell.innerText = number;
        return cell;
    };

    const getrandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    //! Funzione che mi crea un array di 16 numeri casuali
    const generateBombs = (totalBombs, numberOfElement) => {
        const bombs = [];
        while (bombs.length < totalBombs) {
            const randomNumber = getrandomNumber(1, numberOfElement);
            if (!bombs.includes(randomNumber)) {
                bombs.push(randomNumber);
            }
        }
        return bombs
    }
    const bombs = generateBombs(TOTAL_BOMBS, level);

    const onCellClick = (cell) => {
        cell.classList.add('clicked');
    }

    for (let i = 0; i < level; i++) {
        const cell = generateCell(col, i);
        cell.addEventListener ('click', (e) => onCellClick(e.target, bombs, i));
        grid.appendChild(cell);
        console.log(i);
    }
};


generateButton.addEventListener('click', play);