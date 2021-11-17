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


// creo anche una variabile flag fuori dal ciclo for

let emailSearch = false;


// controllo tutto il contenuto dell'array (mailingList) con un ciclo for:


for ( i = 0; i < mailingList.length; i++) {
    // creo una variabile che mi sostituisca per pulizia di codice maininglist[i]
    let listLength = mailingList[i];
    // mi creo anche una variabile messaggio

     let access;

    // creo un if per verificare che la mail inserita sia presente nella lista array

    if ( listLength === userMail ){
        // a questo punto se la lista dell'array è uguale alla mail inserita dall'utente la variabile flag cambierà in TRUE
        emailSearch = true;
        access = 'puoi accedere al sito';

    } else {
        access = 'accesso negato';
        
    }



}

// OUTPUT

alert(access);