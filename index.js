var randomNumber1 = Math.random()*6;
randomNumber1 = 1+ Math.floor(randomNumber1);

var randomNumber2 = Math.random()*6;
randomNumber2 = 1+ Math.floor(randomNumber2);

var dice_array = ["images/dice1.png" , "images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

var dice_pic1 = dice_array[randomNumber1];
var dice_pic2 = dice_array[randomNumber2];

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , dice_pic1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , dice_pic2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "💫 Player1 wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "💫 Player2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "🫠Oops! Draw";
}
