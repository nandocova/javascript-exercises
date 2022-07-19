const reverseString = function(string) {
    let array = string.split("");
    array.reverse();
    let output = "";
    for (i = 0; i < array.length; i++) {
        output = output + array[i];
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
