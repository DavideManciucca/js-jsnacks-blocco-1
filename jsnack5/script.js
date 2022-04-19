const numeriDispari =[]
const limit = 6;
let userNumber;
let flagNumber = false;

for(let i = 0; i < limit; i++){
  userNumber=parseInt(prompt('Inserisci qui un numero intero!'))
  if(!(userNumber % 2 === 0)){
    numeriDispari.push(userNumber);
  }else{
    console.log(userNumber +' è pari')
  }
  console.log(numeriDispari)
}