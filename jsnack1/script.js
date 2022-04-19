// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

 
let result = false;
let primNum;
let secNum;
const message= document.getElementById(output)

while(!result){
  primNum=parseInt(prompt('inserisci qui un numero intero!'));
  secNum=parseInt(prompt('inserisci qui un altro numero intero!!'));
  if(isNaN(primNum && secNum)){
    alert('non hai inserito correttamente dei numeri');
  }else if(primNum > secNum){
    alert('il numero più grande è '+primNum+'!');
   
  }else if(primNum < secNum){
    alert('il numero più grande è '+secNum+'!');
   
  }else if(primNum === secNum){
    alert('hai inserito due numeri uguali!');
   
  }
}