// 1a
let randomNum = Math.random();
randomNum *= 5;
randomNum = Math.floor(randomNum); 
randomNum++;
console.log(randomNum);

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

// 1e
if (randomNum == 2 || randomNum == 4 ) {
    console.log("Equal to either 2 or 4");
}

// B2
randomNum ? greaterthanorequal(randomNum >=4) : lessthan(randomNum <4);
console.log(randomNum);

// B3
switch (randomNum){
    case 1:
        console.log("One");
        break;
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
        break;
    }
