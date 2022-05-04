//player 1.....
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomimage1="dice"+randomNumber1+".png";
var randomSource1=randomimage1;
var temp1=document.querySelectorAll("img")[0];
temp1.setAttribute("src",randomSource1);

//player 2......
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomimage2="dice"+randomNumber2+".png";
var randomSource2=randomimage2;
var temp2=document.querySelectorAll("img")[1];
temp2.setAttribute("src",randomSource2);
