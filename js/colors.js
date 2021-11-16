//console.log("Nighmare nighmare nitrmardsrs")

const myButton = document.querySelector("button");
const myBox = document.querySelector(".box")
const colors = ["red","green","blue","yellow"]
console.log(myButton);
myButton.addEventListener("click", changeColor);

//lõpeta ära kui ajurakke jääb
function changeColor()
{
    let rnd = Math.floor(Math.random() * colors.length);

    if (rnd == ){
        
        myBox.style.backgroundColor = colors[rnd]
        
    }
    
    console.log(rnd)
    console.log("Go change color or else")
}