var genera = document.getElementById("calcola");
var panino = document.getElementById("nomePanino");
var ingredienti = document.getElementsByClassName("ingredienti");
var sconti = document.getElementById("couponCliente");
var totale = document.getElementById("conto");
var codiciSconto = ["benvenuto","fedelissimo","mizzica"];
var costoPane = 2

genera.addEventListener("click",
function(){
if(panino.value =! ""){
var somma = 0;
for(var i=0; i<ingredienti.length; i++){
if(ingredienti[i].checked === true){
somma   +=costoPane+ parseInt(ingredienti[i].value);
}
}
if(codiciSconto.includes(sconti.value)==true){
somma -= somma* 0.3.toFixed(2);
}
totale.innerHTML=somma + " €"
} else{
    alert("inserisci il nome del tuo panino")
}
}
)