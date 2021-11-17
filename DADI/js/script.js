// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// GENERO NUMERO RANDOM PER IL GIOCATORE

let userRandom = Math.floor((Math.random() * 6) + 1);
console.log(userRandom);

// GENERO NUMERO RANDOM PER COMPUTER

let computerRandom = Math.floor((Math.random() * 6) + 1);
console.log(computerRandom);

// STABILISCO IL VINCITORE IN BASE AL PUNTEGGIO PIù ALTO

// creo variabile messaggio
let message;

if (userRandom > computerRandom) {

    message = 'complimenti, lei ha vinto';
    
} else if (userRandom < computerRandom)  {
     message = 'Ha vinto il computer';

} else {
    message = 'Pareggio';
}

// OUTPUT

alert (message);