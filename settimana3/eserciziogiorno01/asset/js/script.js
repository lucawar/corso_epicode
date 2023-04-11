/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
//definizione funzione
function area(l1, l2) {
    return l1 * l2;
}


//utilizzo la funzione
let result = area(10, 6);
console.log(result);


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

//definisco la funzione
function crazySum(numero1, numero2) {

    if (numero1 != numero2) {
        var somma = numero1 + numero2;
        return somma;
    }
    else {
        var sommaPerTre = (numero1 + numero2) * 3;
        return sommaPerTre;

    }
}

//utilizzo la funzione e passo i parametri se previsti dalla stessa

var addizione = crazySum(20, 5);
var addizionePerTre = crazySum(5, 5);
var pippo = crazySum(10, 16);
console.log(addizione);
console.log(addizionePerTre);
console.log(pippo);


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(numero3) {
    var sottrazione;
    if (numero3 < 19) {
        sottrazione = Math.abs(numero3 - 19);
        return sottrazione;
    }
    else {
        sottrazione = Math.abs(numero3 - 19) * 3;
        return sottrazione;
    }
}

let sottrazione = crazyDiff(20);
console.log(sottrazione);


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    let risultato;
    if(n>=20 && n<=100 || n===400){
        risultato = true;
        return risultato;
    }else{
        risultato = false;
        return risultato;
    }
}

let risultato = boundary(401);
console.log(risultato);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(input) {
    let risultato;
    if(input == "EPICODE"){
        return input;
    } else {
          risultato = input.concat("EPICODE");
    return risultato;}  
    
}
console.log(epify("Frequento il corso di "));
console.log(epify("EPICODE"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(n){
    let risultato;
    if(n % 3 ===  0 || n % 7 === 0){
        risultato = true;
        return risultato;
    } else {
        risultato = false;
        return risultato;
    }
}

let esito = check3and7(5);
console.log(esito);


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/


const reverseString = function (str) {
	let splitString = str.split('');
	let reverseString = splitString.reverse();
	let finalString = reverseString.join('');
	return finalString;
};
    console.log(reverseString('EPICODE'));


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirstPhrase = function (str) {
	let words = str.split(' ');
	let finalString = [];
	for (let i = 0; i < words.length; i++) {
		let firstChar = words[i].charAt(0);
		let uppercaseChar = firstChar.toUpperCase();
		let cutString = words[i].slice(1);
		let finalWord = uppercaseChar + cutString;
		finalString.push(finalWord);
	}
	console.log(finalString.join(' '));
};


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
const cutString = function (str) {
	return str.slice(1, str.length - 1);
};
console.log(cutString('EPICODE'));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = function (n) {
	const arr = [];
	for (let i = 0; i < n; i++) {
		arr.push(Math.floor(Math.random() * 10));
	}
	return arr;
};
console.log(giveMeRandom(5));
