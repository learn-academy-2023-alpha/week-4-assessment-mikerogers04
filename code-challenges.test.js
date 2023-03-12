// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


//Template jest test for reuse
// describe("greeter", () => {
//   it("returns a generic greeting", () => {
//     expect(greeter()).toEqual("Hello, LEARN student!")
//   })
// })

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

//Test variable with different data types
const colors3 = [6, "black", "white", true, null]
//Expected output(can be in any order): ['white', true, 'black', null ]

describe("shuffleArray", () => {
  const expected1 = ["yellow", "blue", "pink", "green"]
  const expected2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
  const expected3 = ["black", null, "white", true]
  it("returns an array with the first item removed and the remaining elements shuffled.", () => {
    expect(shuffleArray(colors1)).toEqual(expect.not.arrayContaining(expected1))
    expect(shuffleArray(colors2)).toEqual(expect.not.arrayContaining(expected2))
    expect(shuffleArray(colors3)).toEqual(expect.not.arrayContaining(expected3))  
  })
})
//Test failed: ReferenceError: shuffleArray is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// b) Create the function that makes the test pass.

//Pseudo:
//Create a function called shuffleArray.
//Input: An array 
//Use .shift to remove first item in the array.
//Use .sort to sort the remaining elements
  //.sort requires a function be passed inside it
      //Pass an anonymous function within the .sort
      //Use Math.random to generate a random number then subtract .5 so that a negative or positive number is generated 50% for each random generation. 
//Output: An array with the first item removed and the remaining elements shuffled. 

const shuffleArray  = (array) => {
    array.shift()                                 //Using .shift to remove first element in the array.
    return array.sort(() => Math.random() - 0.5)  //Math.random returns a number from 0 to 1 but not including 1. Minus .5 will effectively give the randomization a 50% chance for a negative and a 50% chance for a positive number. 
}

//Test console logs to see if array had removed first item and shuffled correctly. 
 console.log(shuffleArray(colors1))
 console.log(shuffleArray(colors2))
//Test log to check test variable with different data types in array
 console.log(shuffleArray(colors3))
 
//Test Passed as expected
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31
//Test variable
const votes3 = { upVotes: 4500, downVotes: 6000}
// Expected output: -1500

describe("finalTally", () => {
    it("returns the final tally", () => {
      expect(finalTally(votes1)).toEqual(11)
      expect(finalTally(votes2)).toEqual(-31)
      expect(finalTally(votes3)).toEqual(-1500)
    })
  })

//Test failed as expected: ReferenceError: finalTally is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total

// b) Create the function that makes the test pass.

//Pseudo: 
//Create a function called finalTally
//Input: An object
//Destructure object to be able to access values easier without having to use dot notation.
  //Do subtraction on the upvotes and downvotes and store into a variable
//Output: The final tally based on up and down votes. 

const finalTally = (object) => {
    const {upVotes, downVotes} = object   //Object destructuring 
    const totalVotes = upVotes - downVotes
  return totalVotes
}

//Test logs to check if key-pair values deconstructed properly and subtraction outputed correctly. 
console.log(finalTally(votes1))
console.log(finalTally(votes2))
//Test log to check for different values
console.log(finalTally(votes3))


//Test passed as expected
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
//Test variable to check if the spread operator would work correctly. 
const dataArray3 = [5, 6, 9, 81, 67, 9]
//Output:   ['array', 'object', 'number', 'string', 'Boolean', 'null', 'undefined', 5, 6, 9, 81, 67]


describe("noDuplicates", () => {
  it("returns an array with no duplicate values", () => {
    expect(noDuplicates(dataArray1)).toEqual(expect.not.arrayContaining(["array", "object", "number", "string", "Boolean", "null", "undefined"]))
    expect(noDuplicates(dataArray3)).toEqual(expect.not.arrayContaining(['array', 'object', 'number', 'string', 'Boolean', 'null', 'undefined', 5, 6, 9, 81, 67]))
  })
})

//Test failed as expected: ReferenceError: noDuplicates is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total

// b) Create the function that makes the test pass.

// Pseudo: Original function
//Create a function called noDuplicates, using an array as the input. 
  //Combine both arrays by using .concat and store result into a variable.
  //Use set method and pass in the combined array to create a set of unique values(essentially eliminating duplicate values). 
    //Each value in a set can only occur once. 
//Output: One array with no duplicate values. 

//Original function using .concat and Set
// const noDuplicates = (array) => {              
//   const combinedArray = array1.concat(array2)
//   return [...new Set (combinedArraay)]
// }

//Pseudo: Refactored function
//Create a function called noDuplicates. 
//Input: Using a rest parameter to allow for a dynamic number of arguments. A rest parameter will collect x amount of arguments that get passed into the function upon invocation and will return an array with all those values. Rest parameter syntax: ...combinedArray. Had to do a decent amount of research to figure out the name of what this was called and explanation as to why it was introduced. Learned in depth the differences between a parameter and an argument. Also, found out that there is a built-in arguments object in every function. 

//This was an incredible article to read about these topics:  https://www.samanthaming.com/tidbits/20-destructuring-function-arguments/
//Biggest takeaway from this article: The "P" in Parameter stands for the Placeholder in the function declaration. The "A" in Argument stands for the the Actual value of the function.

//Use the set method and pass in the rest parameter in the argument. Will return an array of unique values no matter how many arguments are passed in function invocation. 
//Output: One array with no duplicate values. 

//Refactored function using spread operator
const noDuplicates = (...combinedArray) => {
    // Original attempt was to pass both arrays using the spread operator and copy them both into a new variable. Encountered errors, listed below. I don't fully understand why the errors were happening. But, some research allowed me to know that when the test ran and the function invoked, the value 'undefined' within the second array was the problem. The value of undefined is not an iterable value. Even though the value of undefined was a string and not actually undefined is where I am puzzled with this. 
    // const array3 = [...array1, ...array2] //TypeError: array2 is not iterable
    // TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))
    return [...new Set (combinedArray)]
}

//Test log to check if array concated and removed duplicate elements. This works as intended. 
// console.log(noDuplicates(dataArray1, dataArray2))
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

//Test log for refactored code using spread operator. This worked as intended. 
console.log(noDuplicates(...dataArray1, ...dataArray2, ...dataArray3))
//Output: ['array', 'object', 'number', 'string', 'Boolean', 'null', 'undefined', 5, 6, 9, 81, 67]

//Test passed as expected
//  Test Suites: 1 passed, 1 total
//  Tests:       3 passed, 3 total
