const removeFromArray = function(array, ...removedItems) {
    for (removedItem of removedItems){
        for (let i = 0; i < array.length; i++) {
            if (array[i] === removedItem){
                array.splice(i, 1);
                i = i - 1
            }
        }  
    }
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
