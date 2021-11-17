// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// creo un array contenenti la mailinig list di accesso

const mailingList = ['luca@email.it','gigi@email.it','paolino@email.it','sandro@email.it'];
// aggiungo un'altra mail per amicizia
mailingList.push('nando@email.it');


// chiedo all'utente la sua email utilizzando un prompt

let userMail = prompt('Inserisci la tua email');
console.log(userMail);

// controllo tutto il contenuto dell'array (mailingList) con un ciclo for:

for ( i = 0; i < mailingList.length; i++) {
console.log(mailingList[i]);

}