//player 1.....
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomimage1="dice"+randomNumber1+".png";
var temp1=document.querySelectorAll("img")[0];
temp1.setAttribute("src",randomimage1);

//player 2......
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomimage2="dice"+randomNumber2+".png";
var temp2=document.querySelectorAll("img")[1];
temp2.setAttribute("src",randomimage2);
