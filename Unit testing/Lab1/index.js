//problem 1
//input: "hamada" ===> output: HaAMADA. expect
//input: 12 ===> output: "".   expect

const capitalizeText = (input) => {
  if (typeof input !== "string") {
    throw new TypeError("parameter should be string");
  }
  return input.toUpperCase();
};

//test that the function takes a string  it will return a string

//test that the function takes a string and return it after capitalize it

//test if the function takes number it will throw type error says parameter should be string

//problem 2

// input number 3 ==> output should be [0,1,2]

const createArray = (number) => {
  const myArray = Array.from(Array(number).keys());
  return myArray;
};

//test that the return value of type array
//test if we pass 3 it will return array of length 3 and test it's include 1
//make a variable and intialize it by 1 and before each test increase it by one and pass it to every function call
//try to delay the testing process 5 seconds
//try to use different styles (expect , should , assert)
//after finishing your test process try to  run it on a browser//bonus
//make pending test case
ex = { capitalizeText, createArray };
module.exports = ex;
