/*
 Scrivi una funzione "trovaBabboNatale" che, dato un array di nomi, 
 restituisca "Babbo Natale trovato!" se il nome "Babbo Natale" è presente, 
 altrimenti "Babbo Natale non trovato".

 Input: ["Giovanni Gianni", "Bruno Barbieri", "Babbo Natale","Ermenegildo Buffetti"]
 Output: "Babbo Natale trovato!";
*/

const people = ["Giovanni Gianni", "Bruno Barbieri", "Babbo Natale","Ermenegildo Buffetti"];

function trovaBabboNatale(nomi){
    if(nomi.includes('Babbo Natale')){
        return "Babbo Natale trovato!"
    } else{
        return "Babbo Natale non trovato"
    };
};

console.log(trovaBabboNatale(people));