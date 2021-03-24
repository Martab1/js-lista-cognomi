

/* 

Consegna
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘bianchi’, ‘neri’, ‘rossi’, ‘verdi’, ‘gialli’
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana", 1 oppure 2 oppure 3 oppure ecc... (non 0 oppure 1 oppure 2 oppure ecc.. tipici degli array), 
del nuovo utente inserito sopra all'interno dell'array, dopo l'ordinamento alfabetico

*/


// 1. chiedi cognome
var cognome = prompt ("inserisci il tuo cognome");
console.log("cognome utente: " + cognome);

// 2. inserimento nell'Array
var list = ["bianchi", "neri", "rossi", "verdi", "gialli"];
list.push(cognome);

// 3. lista ordinata alfabeticamente
console.log(list.sort());

// 4. posizione elementi da 1 
console.log("il cognome utente ha posizione " + (list.indexOf(cognome) + 1));




