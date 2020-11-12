let randomNumber = Math.floor(Math.random()*50+1);
const checkButton = document.querySelector('button');
const againButton = document.querySelector('#again');
const guess1 = document.getElementById('test');
let highScore;
let point = 10;

againButton.onclick = () =>{
    randomNumber = Math.floor(Math.random()*50+1);
    document.querySelector('#message').innerHTML = "Start guessing...";  
    document.querySelector('button').style.display = "block";
    document.querySelector('#test').value = "";
    point = 10; 
    document.querySelector('#score').innerHTML = point;
    document.querySelector('#num').innerHTML = "?";
    document.body.style.backgroundColor = "#222";  
}


checkButton.onclick = () => {
    if (point === 0) {
        document.querySelector('#message').innerHTML = "You lost!"
        document.querySelector('button').style.display = "none";
          } else if (randomNumber > guess1.value) {
        document.querySelector('#message').innerHTML = "Too low"
        point -= 1;
        document.querySelector('#score').innerHTML = point;
        } else if (randomNumber < guess1.value) {
        document.querySelector('#message').innerHTML = "Too high"
        point -= 1;
        document.querySelector('#score').innerHTML = point;
     } else {
        document.querySelector('#num').innerHTML = guess1.value;
        document.querySelector('#message').innerHTML = "You win!"
        document.body.style.backgroundColor = "green";  
        document.querySelector('button').style.display = "none";
        highScore = document.querySelector('#high').innerHTML;
        if (point >= highScore) {
        document.querySelector('#high').innerHTML = point;
            }
     }
     if (point < 1) {
        document.querySelector('#message').innerHTML = "You lost!"
        document.querySelector('#chck').hidden = true;
          }
     }
