var szamok= [0,1,2,3];
for (var a=0;a<4;a++)
{
    var c;
    do
    {
        do{
          szamok[a]=Math.floor(Math.random() * 10);
        }while(szamok[a]==0);
        c = 0;
        while ((c<a) && (szamok[c]!=szamok[a])){
              c++;
            }
    }
    while (c<a);
}
if (a.length > 4)
{
var uzenet=document.createTextNode("Négyjegynél nem adhatsz meg többet.");
tipus.appendChild(uzenet);
}
function tippek(){
  var helyok=0;
  var joszam=0;
  var a = document.getElementById("tippek").value;
  for (var i = 0; i < a.length; i++) {
    if(a[i]==szamok[i]){
      helyok++;
    }
    else{
      for (var t = 0; t < a.length; t++) {
        if(szamok[i]==a[t]){
          joszam++;
        }
      }
    }
  }
  if (helyok==4){
    var tipus = document.createElement("LI");
    var uzenet = document.createTextNode(" Próbálkozás: ["+a+"] ("+helyok+") jó helyen található, ("+joszam+") rossz helyen található - Gratulálok eltaláltad!");
    tipus.appendChild(uzenet);
    var lista = document.getElementById("eredmenyek");
    lista.insertBefore(tipus, lista.childNodes[0]);
  }
  else{
    var tipus = document.createElement("LI");
    var szoveg = document.createTextNode(" Próbálkozás: ["+a+"] ("+helyok+") jó helyen található, ("+joszam+") rossz helyen található");
    tipus.appendChild(szoveg);
    var lista = document.getElementById("eredmenyek");
    lista.insertBefore(tipus, lista.childNodes[0]);
  }
}