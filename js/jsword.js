
var tableaux = document.getElementById('table');
var input = prompt("Entrez un mot");
var word = input;
var tab = tableaux.getElementsByTagName("td");
tab[0].innerHTML = "<span id='color'>"+ input + "</span> ";
tab[1].innerHTML = input.toLowerCase();
tab[2].innerHTML = input.toUpperCase();
var voy = count(word);
tab[3].innerHTML = "votre mot contient " +voy+ " de voyelles";
tab[4].innerHTML = "votre mot contient " +(word.length - voy) +" de consonnes";

function count(word){
    var length = 0;
    var number = 0;
    length = word.length;
    for (var i = 0; i< length; i++)
    {
        if (word.charAt(i) == 'a' || word.charAt(i) =='e' || word.charAt(i) == 'i' || word.charAt(i) == 'y' || word.charAt(i) == 'o'|| word.charAt(i) == 'u')
            number++;
          if (word.charAt(i) == 'A' || word.charAt(i) =='E' || word.charAt(i) == 'I' || word.charAt(i) == 'Y' || word.charAt(i) == 'O'|| word.charAt(i) == 'U')
    number++;

    }
     return number;


}

    var verse = word.split("").reverse().join("");
   tab[5].innerHTML = "Voici votre mot inversé : "+verse+"";



if (verse==word){
    tab[6].innerHTML = "ce mot "+word+" est un paladrome";
}
else {
    tab[6].innerHTML = "ce mot "+word+" n'est pas un paladrome";
}
function all(){
  bouton=location.reload();
}
