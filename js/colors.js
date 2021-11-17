//console.log("Nighmare nighmare nitrmardsrs")

const myButton = document.querySelector("button");
const myBox = document.querySelector(".box");
const colors = ["red","green","blue","yellow"]
console.log(myButton);
let randomValues = [];
//lõpeta ära kui ajurakke jääb
myButton.addEventListener("click", changeColor);
let name = "pottah";
console.log(`${name}`)

function changeColor()
{
    
    if (randomValues.length === 0){
        for(let i = 0; i < colors.length; i++)
        {
        randomValues.push(i);
        }
    }

    let randomIndex = Math.floor(Math.random() * randomValues.length);
    let indexFromMyarray = randomValues[randomIndex];
    randomValues.splice(randomIndex, 1);
    console.log(randomValues);
    myBox.style.backgroundColor = colors[indexFromMyarray];

    
    
}