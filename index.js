
const diceImage = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png",]
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    
    console.log(randomNumber1);
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
   
    console.log(randomNumber2);

    const p1ImageElement = document.getElementById("p1Dice") 
    p1ImageElement.setAttribute("src", diceImage[randomNumber1 - 1])

    const imageElement = document.querySelector("#p2Dice")
    imageElement.setAttribute("src", diceImage[randomNumber2 - 1]);

    var h1Ele = document.querySelector("h1");
    if(randomNumber1 === randomNumber2){
        h1Ele.textContent = "= Draw";
    } else if(randomNumber1 > randomNumber2){
        h1Ele.textContent = "🚩Player 1 Wins";
    }else{
        h1Ele.textContent = "🚩Player 2 Wins";
    }
console.log(imageElement);