const limit = 5;
let number
let somma = 0;

for(let i = 0; i < limit; i++){
  number=parseInt(prompt('inserisci qui un numero!'))
  somma+=number;
  if(isNaN(number)){
    alert('inserisci dei numeri!')
    console.log('devi inserire dei numeri!! Ricarica la pagina per ottenere il risultato corretto!!')
  }
}
console.log('il totale della somma è  '+ somma)