
const myButton = document.querySelector("button");
const myBox = document.querySelector(".box");
const img = document.getElementById("#img");
let sources = ["img/img1.jpg","img/img2.jpg","img/img3.jpg"]
let randomValues = [];

myButton.addEventListener("click", changeImage);
function changeImage()
{
     
    if (randomValues.length === 0){
        for(let i = 0; i < sources.length; i++)
        {
        randomValues.push(i);
        }
    }
    let randomIndex = Math.floor(Math.random() * randomValues.length);
    let indexFromMyarray = randomValues[randomIndex];
    randomValues.splice(randomIndex, 1);
    let randomImage = Math.round(Math.random()* sources.length);
    document.getElementById("img").src=sources[indexFromMyarray];


}