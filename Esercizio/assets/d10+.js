// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

 function selectContainer() {
   let containerElement = document.getElementById("container"); 
   console.log(containerElement)

 }
 selectContainer(); 

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function selettore (tag){
  const td = document.getElementsByTagName(tag);
  return td;

};

// selectAllTableData()

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function stampatd(){
  const td = selettore("td")
   for (let i = 0; i < td.length; i++) {
       console.log(td[i].innerText);
  }
 };

stampatd();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

 function addRedBackground() {
   let linkElements = document.querySelectorAll('a')
   linkElements.forEach(function(link) {
     link.style.backgroundColor = 'red';
   });
 }

 addRedBackground();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

 function addNewItemToList(){
   let li = document.createElement('li');
   li.innerText = "testodiprova"
   let myList = document.getElementById('myList')
   myList.appendChild(li);
 }

 addNewItemToList();


/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function emptylist(){

}

emptylist()

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"


*/

function Classe () {
  const tr = document.getElementsByTagName("tr");
      tr.classList.add("prova");
};

Classe();


// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */
