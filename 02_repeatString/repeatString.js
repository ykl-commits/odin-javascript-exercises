const repeatString = function(str, num) {

    let outputStr = "";

    if (num < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < num; i++) {
        outputStr += str;

    }

    return outputStr;

};

// Do not edit below this line
module.exports = repeatString;
