var totalpar = 0;
var shouldplay6holes = false;
// Prompt the user their name
var userName = prompt("Welcome to GC mini golf! What is your name?");

// Prompt the user for how many holes (save for later)
var numberofholes = prompt("Hello " + userName + " would you like to play 3 or 6 holes?");

// Ask how many putts for each hole

var numberofholes2 = prompt("How many putts for hole 1? (par is 3");
totalpar = totalpar + parseInt(numberofholes2);
var numberofholes3 = prompt("How many putts for hole 2? (par is 3");
totalpar = totalpar + parseInt(numberofholes3);
var numberofholes4 = prompt("How many putts for hole 3? (par is 3");
totalpar = totalpar + parseInt(numberofholes4);

if(numberofholes ==6){
    var numberofholes2 = prompt("How many putts for hole 1? (par is 3");
    totalpar = totalpar + parseInt(numberofholes2);
    var numberofholes3 = prompt("How many putts for hole 2? (par is 3");
    totalpar = totalpar + parseInt(numberofholes3);
    var numberofholes4 = prompt("How many putts for hole 3? (par is 3");
    totalpar = totalpar + parseInt(numberofholes4);
    shouldplay6holes = true;
}
// Add up the strokes
alert("Good game" + userName + "Your total par was" + totalpar);
// Display how many got
console.log("Your total score is" + totalpar);