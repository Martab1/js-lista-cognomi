

/* 

Consegna
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘bianchi’, ‘neri’, ‘rossi’, ‘verdi’, ‘gialli’
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione "umana", 1 oppure 2 oppure 3 oppure ecc... (non 0 oppure 1 oppure 2 oppure ecc.. tipici degli array), 
del nuovo utente inserito sopra all'interno dell'array, dopo l'ordinamento alfabetico
5. stampa in html

*/

// 1. chiedi cognome
var cognome = prompt ("inserisci il tuo cognome").toLowerCase().trim();
console.log("cognome utente: " + cognome);

// 2. inserimento nell'Array
var list = ["bianchi", "neri", "rossi", "verdi", "gialli"];
list.push(cognome);

// 3. lista ordinata alfabeticamente
console.log(list.sort());

// 4. posizione elementi da 1 
var position = (list.indexOf(cognome) + 1);
console.log("il cognome utente ha posizione " + position);

// 5. stampa tutto in html
var items = "";

for (var i = 0; i < list.length; i++){
    items += "<li>" + list[i] + "</li>";
}

document.getElementById("list").innerHTML = items;
document.getElementById("position").innerHTML = "il cognome utente ha posizione " + position;
