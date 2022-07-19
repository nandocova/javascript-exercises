const repeatString = function(string, num) {
    let output = string;    
    if (num === 1) {
        return string;
    } else if (num > 1) {
        for (let i = num; i > 1; i--) {
            output = output + string;
        }
    } else if (num === 0) {
        output = '';
    } else if (num < 0) {
        output = "ERROR";
    }

    return output;
};

// Do not edit below this line
module.exports = repeatString;
