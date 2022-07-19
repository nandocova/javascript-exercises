const removeFromArray = function(array, ...arg) {
    for (j = 0; j < arg.length; j++) {
        for (i = 0; i < array.length; i++) {
            if (array[i] === arg[j]) {
                array.splice(i, 1);
            }
        }
    }
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
