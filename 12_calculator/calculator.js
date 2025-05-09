const add = function(num1, num2) {
  if (isNaN(num1) == false && isNaN(num2) == false) {
    let finalNum = num1 + num2;
    return finalNum;
  } else {
    return "Invalid input";
  };
};

const subtract = function(num1, num2) {
  if (isNaN(num1) == false && isNaN(num2) == false) {
    let finalNum = num1 - num2;
    return finalNum;
  } else {
    return "Invalid input";
  };
};

const sum = function(numArray) {
  let finalNum = 0;
	for (num of numArray) {
    finalNum = finalNum + num;
  };
  return finalNum;
};

const multiply = function(numArray) {
  let finalNum = 1;
  for (num of numArray) {
    if (isNaN(num) == false) {
      finalNum = finalNum * num;
    } else {
      return "Invalid Input";
    };
  };
  return finalNum;
};

const power = function(num1,num2) {
  if (isNaN(num1) == false && isNaN(num2) == false) {
    let finalNum = Math.pow(num1, num2);
    return finalNum;
  } else {
    return "Invalid input";
  };	
};

const factorial = function(num) {
  let finalNum = 1;
  let numList = Array.from( {length: num}, (_,i) => 1 + i);
  for (factNum of numList) {
    finalNum = finalNum * factNum;
  };
  return finalNum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
