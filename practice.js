//Random number generator
function randomNumberGenerator(min,max){
    return Math.floor(Math.random()*(max-min+1))
    +min;
}
//magic 8 ball sayings

const sayings=[
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
console.log(sayings[0])