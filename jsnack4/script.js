const listaNomi = ['davide', 'antonio', 'manuele', 'giovanni'];
let nomeUtente;
let =messaggio;
let flagNome = false;

while(flagNome === false){
  nomeUtente=prompt('inserisci qui il tuo nome !');
  for(let i = 0; i < listaNomi.length; i++){
    if(listaNomi[i]===nomeUtente){
    flagNome = true;
    }
    
  }
if(flagNome===false){
  alert('spiacenti ma non sei presente nella lista, prova a digitare nuovamente il tuo nome!')
}

}
document.getElementById('messaggio').innerHTML=` sei presente nella lista`;



