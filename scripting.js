function random1(){
    var number = Math.floor(Math.random() *6) +1;
    return number;
}
var refresh = document.querySelector("h1");
refresh.addEventListener("click",start1);
function start1(){
    var firstDice= random1();
    var secondDice=random1();
    if(firstDice>secondDice)
        refresh.innerHTML="PLAYER 1 WINS ";
    else if(firstDice<secondDice)
        refresh.innerHTML="PLAYER 2 WINS ";
    else 
        refresh.innerHTML="SAME NUMBER";
    
    var image1 = document.querySelector(".img1");
    var image2 = document.querySelector(".img2");

    var firstsrc="images/dice"+firstDice+".png";
    image1.setAttribute("src", firstsrc);
    image2.setAttribute("src", "images/dice"+secondDice+".png");
}


