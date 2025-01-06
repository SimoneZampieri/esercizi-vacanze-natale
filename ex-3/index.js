/*
  Dato un array di regali, filtralo dal meno al più costoso.

  Input:
  const regali = [
    { nome: "Macchinona", prezzo: 56 },
    { nome: "Librino", prezzo: 5 },
    { nome: "Giocattolone", prezzo: 25 },
    { nome: "Sedia", prezzo: 15 },
    { nome: "Berretto troppo costoso", prezzo: 58 },
  ];

  Output: [
    { nome: "Librino", prezzo: 5 },
    { nome: "Sedia", prezzo: 15 },
    { nome: "Giocattolone", prezzo: 25 },
    { nome: "Macchinona", prezzo: 56 },
    { nome: "Berretto troppo costoso", prezzo: 58 },
  ];
*/

const regali = [
  { nome: "Macchinona", prezzo: 56 },
  { nome: "Librino", prezzo: 5 },
  { nome: "Giocattolone", prezzo: 25 },
  { nome: "Sedia", prezzo: 15 },
  { nome: "Berretto troppo costoso", prezzo: 58 },
];


regali.sort((a,b) => {
  if(a.prezzo < b.prezzo){
    return -1
  } if(a.prezzo > b.prezzo){
    return 1
  } else{
    return 0
  };
});

console.log(regali);