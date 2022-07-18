let par = document.getElementById('opis');
let b = document.querySelector('button');
b.addEventListener('click', dodaj_tekst);

function dodaj_tekst(){
 par.textContent = 'dowolny tekst';   
}