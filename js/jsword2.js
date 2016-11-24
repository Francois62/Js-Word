//var mot = document.getElementById('input');
var input = prompt("Entrez un mot");
var word = input.split('') ;
//input.getElementsByTagName('td')[mot].style.backgroundColor = "navy";
var len = input.length;
var words = [];
//var i =0;
var voy = ['a','e','i','o','u','y'];
var nbrv = 0;
words[0] =  input;
words[1] =  input.toUpperCase();
words[2] =  input.toLowerCase();
list();
for (var i = 0; i < words.length; i++) { //cibler les lettres du mot saisi une par une
  for (var j = 0; j < voy.length; j++) { // la meme chs pour les voyelles
    if (words[i] == voy[j] ){ //verification voyelles de la lettre {
      nbrv++;
      alert(nbrv);
    }
  }
}

function list(){
 var j = 0;
  var row = words.insertRow(0);//insérer ligne
  while(j<words.length){
   console.log(noms[j]);
    var cell = row.insertCell(j);
    cell.innerHTML = words[j];
j++;
}
}


//for (var i = 0; i < words.length; i++) {
  //  alert(words[i]);
//}

//function count(){
  // input = Number(input)
  // var somme = document.getElementById("word");
   //somme.innerHTML = mot;
if (voy==false){
  var somme = len-voy;
  somme.innerHTML = mot;
}
//count();

//function g() {
    /* Script incomplet, juste pour l'exemple */
  //  return {
  //      x: 12,

  //      y: 21
  //  };
//}
