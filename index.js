
document.querySelector("button").addEventListener("click",function(){
    var random1 = Math.floor(Math.random()*6 + 1);

    var randomDiceImage = "dice" + random1 + ".png";

    var randomImageSource = "images/" + randomDiceImage;

    var image1 = document.querySelectorAll("img")[0];
    image1.classList.add("roll-animation");
    setTimeout(function(){
        image1.classList.remove("roll-animation");
    },1000);
    image1.setAttribute("src",randomImageSource);


    var random2 = Math.floor(Math.random()*6 +1);

    var randomDiceImage2 = "dice" + random2 + ".png";

    var randomImagesrc2 = "images/" + randomDiceImage2;
    var image2 = document.querySelectorAll("img")[1];
    image2.classList.add("roll-animation");
    setTimeout(function(){
        image2.classList.remove("roll-animation");
    },1000);
    image2.setAttribute("src",randomImagesrc2);

    if(random1>random2)
    {
        document.querySelector("h1").innerHTML = "Player 1 Wins 🥳";
    }
    else if(random2>random1)
    {
        document.querySelector("h1").innerHTML = "Player 2 Wins 🥳"
    }
    else{
        document.querySelector("h1").innerHTML = "Draw!";
    }
});
