//create secretNumber
var secretNumber = 33;

//ask user for guess
var guess = Number(prompt("Guess a number"));

//check guess

if(guess === secretNumber) {
  alert("You got it right!");
}
else if(guess > secretNumber) {
  alert("Too High");
}
else {
  alert("Too low")
}

var count = 1;

while(count < 6) {
  console.log("count is: " + count);
  count++
}
