/*
  Dato un array di oggetti regalo e relativi prezzi, scrivi una funzione 
  "calcolaTotale" che calcoli il costo totale dei regali. 
  (così vediamo quanto spende il nostro babbo natale ehhe)

  Input:
    const regali = [
      { nome: "Macchinina", prezzo: 15 },
      { nome: "Libro", prezzo: 10 },
      { nome: "Giocattolo", prezzo: 20 },
    ];

  Output: 45
*/

const regali = [
  { nome: "Macchinina", prezzo: 15 },
  { nome: "Libro", prezzo: 10 },
  { nome: "Giocattolo", prezzo: 20 }
];

let totale = 0;

function calcolaTotale(prezzi){
  for(let i = 0; i < regali.length; i++){
    totale += regali[i].prezzo
  };

  return totale
};

console.log(calcolaTotale(regali));