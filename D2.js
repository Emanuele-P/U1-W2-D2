/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const numbers = [20, 22]

const numberOne = numbers[0]
const numberTwo = numbers[1]
if (numberOne > numberTwo) {
  console.log('The largest number is', numberOne)
} else if (numberOne < numberTwo) {
  console.log('The largest number is', numberTwo)
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const inputNumber = []
if (inputNumber > 5 || inputNumber < 5) {
  console.log('Ex2) not equal')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

const checkNumber = 50
if (checkNumber % 5 === 0) {
  console.log('Ex3)', checkNumber, 'is divisible by 5')
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const nOne = 5
const nTwo = 3
if (nOne === 8 || nTwo === 8 || nOne + nTwo === 8 || nOne - nTwo === 8) {
  console.log('Ex4) verified')
} else {
  console.log('Ex4) not verified')
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const totalShoppingCart = 30
let shippingCost = 10

if (totalShoppingCart > 50) {
  console.log('Ex5) The total amount is', totalShoppingCart)
} else {
  console.log('Ex5) The total amount is', totalShoppingCart + shippingCost)
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let blackFriday = totalShoppingCart * 0.2
let discountedTotal = totalShoppingCart - blackFriday

if (discountedTotal > 50) {
  console.log('Ex6) The total amount is', discountedTotal)
} else {
  console.log('Ex6) The total amount is', discountedTotal + shippingCost)
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let n1 = 4
let n2 = 9
let n3 = 15

if (n1 >= n2) {
  if (n3 >= n1) {
    console.log(n3, n1, n2)
  } else {
    if (n3 >= n2) {
      console.log(n1, n3, n2)
    } else {
      console.log(n1, n2, n3)
    }
  }
} else {
  if (n3 >= n1) {
    console.log(n3, n2, n1)
  } else {
    if (n3 >= n1) {
      console.log(n2, n3, n1)
    } else {
      console.log(n2, n1, n3)
    }
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/*function check(valore) {
  return typeof valore === 'number'
}
console.log('Ex8) This is a number', check(8))*/

let test = 'test'
if (typeof test === 'number') {
  console.log('Ex8) It is a number!')
} else {
  console.log('Ex8) It is not a number!')
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let oddorEven = 7
if (oddorEven % 2 === 0) {
  console.log('Ex9) This number is Even')
} else {
  console.log('Ex10) This number is Odd')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
if (val < 5) {
  console.log('Meno di 5')
} else if (val < 10) {
  console.log('Meno di 10')
} else {
  console.log('Uguale a 10 o maggiore')
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = 'Toronto'
console.log('Ex11)', me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log('Ex12)', me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop()
console.log('Ex13)', me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const list = []
list.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log('Ex14)', list)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

list.splice(9, 1, 100)
console.log('Ex15)', list)
