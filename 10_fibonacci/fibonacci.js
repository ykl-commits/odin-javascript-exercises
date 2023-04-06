const fibonacci = function(position) {
    //fibonacci = positionber(positionbers.reduce((acc, 1) => acc + 1, 1));
    //variable to store positionber current fibonacci positionber
    //need two variables to store the two previous positionbers

    let a = 0;
    let b = 1;

    // Use a for loop to iterate from 2 (the third Fibonacci positionber) 
    // up to the target position. For each iteration, 
    // set a variable temp to the sum of a and b, then update 
    // a to b and b to temp.
    if (position < 0) return "OOPS";
    if (position === 0) return a;
        for (let i = 2; i <= position; i++) {
            let temp = a + b;
            a = b;
            b = temp;
        }
    return b;

};

// Do not edit below this line
module.exports = fibonacci;
