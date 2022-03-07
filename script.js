// 1a
let randomNum = Math.random();
randomNum *= 5;
randomNum = Math.floor(randomNum); 
randomNum++;
console.log(randomNum);

// shortcut
// let randomNum = Math.floor(Math.random()*5) +1;

// 1b
if (randomNum >=4) {
    console.log("Greater than or equal to 4");
}
else if (randomNum ===2 || randomNum ===3) {
    console.log("Equal to 2 or 3")
}
else {
    console.log("Equal to 1");
}

// 1c
if (randomNum !==3) {
    console.log("Not Equal to 3");
}

// 1d
if (randomNum !==3 && randomNum !==5) {
console.log("Not equal to 3 and not equal to 5");
}
/* OR
if (randomNum !==3 && 5) {
    console.log("NOT equiail to 3 AND not equal to ");
}
*/

// 1e
if (randomNum == 2 || randomNum == 4 ) {
    console.log("Equal to either 2 or 4");
}

// B2
/* randomNum ? greaterthanorequal(randomNum >=4)? : lessthan(randomNum <4);
console.log(randomNum);
*/
randomNum = (randomNum >=4) ? "Greater than or equal to 4" : "Less than 4";
console.log(randomNum);

// OR
// randomNum >=4 ? console.log("Greater than or equal to 4") : console.log("Less than 4");

// B3
// Switch Statement takes a parament/argument and returns something based on the CASE (or the match) that the paramenter/argument goes with
// In this example, if randomNum is 1 it will display "One" in the terminal, if randomNum is 2, it will dispaly "Two" etc

switch (randomNum){
    case 1:
        console.log("One");
        break;
        // Break keywords are needed betweenb each case so that the code for the case that follows dows NOT also run
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        // break;
        // There is no need for a Break at the end of a switch statement since there are no other cases.
    }
