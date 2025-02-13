//Random number generator
function randomNumberGenerator(min,max){
    return Math.floor(Math.random()*(max - min + 1))
    +min;
}
//magic 8 ball sayings

const sayings = [
    "Yes",
    "No",
    "It is certain",
    "Don't count on it",
    "Ask again later",
    "My reply is no",
    "Without a doubt",
    "Better not tell you now",
    "My sources say no",
    "Yes definitely",
    "You may rely on it",
    "Concentrate and ask again",
    "Cannot predict now",
];
function askQuestion() {
    document.getElementById("answer").textContent = getMagic8BallSaying();
}
function getMagic8BallSaying(){
    const randomIndex = randomNumberGenerator(0,sayings.length-1);
    console.log("Random Index:", randomIndex); 
    return sayings[randomIndex];
}
console.log(getMagic8BallSaying());
