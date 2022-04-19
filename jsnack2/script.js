let validword = false;
let primaParola;
let secondaParola;

while(!validword){
  primaParola=prompt('inserisci qui una parola a scelta!');
  secondaParola=prompt('inserisci qui una parola diversa!');
  if(!isNaN(primaParola || secondaParola)){
    alert('non devi inserire numeri!')
  }
  else if(primaParola.length > secondaParola.length){
    alert('la parola più lunga è '+primaParola);
    console.log('la parola più lunga è'+primaParola);
  }else if (primaParola.length < secondaParola.length){
    alert('la parola più luga è '+secondaParola);
    console.log('la parola più lunga è'+ secondaParola)
  }else if (primaParola.length === secondaParola.length){
    alert('le due parole hanno la stessa lunghezza!');
    console.log('le due parole hanno la stessa lunghezza!');
  }
}