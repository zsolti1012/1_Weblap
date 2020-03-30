function meretezes(value){
  var a = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--size'));
  if(a>0){
  document.documentElement.style.setProperty('--size', (a+value)+"px");
  }
}
function tipusok(value){
  if (value ==1){
    document.documentElement.style.setProperty('--style', "italic");
  }
  else if (value==2){
    document.documentElement.style.setProperty('--weight', "bold");
  }
  else if (value==3){
    document.documentElement.style.setProperty('--weight', "normal");
  }
}
function stilus(){
  var a = document.getElementById("kivalaszt").value;
  document.documentElement.style.setProperty('--family', a);
}
function szinezes(){
  var a = document.getElementById("betuszin").value;
  document.documentElement.style.setProperty('--color', a);
}