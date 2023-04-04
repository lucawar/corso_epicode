/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I PRINCIPALI DATATYPE DI JAVASCRIPT SONO:
1. STRINGA: è una riga di testo, e va inserita tra apici o doppi apici.
2. BOOLEAN: sono valori booleani, e possono assumere solo il valore vero o falso. Tramite questi dati possiamo rappresentare dei valori che informano l 'algoritmo nell'informatica.
3. NUMERI: indica dati numerici, e possono essere numeri interi o decimali
4. DATA: è un dato che consente di memorizzare l'ora e le date:
*/


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

var nome = 'Luca';
nome = 'Guerra';   //ESERCIZIO 5: Ho riassegnato un nuovo nome alla variante nome.
console.log(nome)
document.getElementById ('nome').innerHTML= nome;


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

document.getElementById ('addizione').innerHTML= x + 20;  
var y = x + 20;                                                                   //non riesco a capire perchè mi da NaN, nell'esercizio della sottrazione,la formula, funziona, con l addizione no :(
console.log(y)



/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x = 12;
console.log(x)




/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
const lillo = 'lillo';
       // il valore di lillo non può essere cambiato in quanto è una constante, infatti risulterebbe un errore nel DOM e nella console nel caso provassimo a cambiarlo.
console.log(lillo)    



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

document.getElementById ('sottrazione').innerHTML= x - 4;
var z = x - 4;
console.log(z)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
var nome1 = 'jhon';
console.log(nome1)
document.getElementById ('nome1').innerHTML= nome1;

var nome2 = 'Jhon';
console.log(nome2)
document.getElementById ('nome2').innerHTML= nome2;


document.getElementById ('nome1verifica').innerHTML= nome1 === nome2;
var verifica = nome2.toLowerCase();
document.getElementById ('nome2verifica').innerHTML= nome1 === verifica;
