/*
# Learning Goals
- Declare a function as a means to reduce duplication
- Declare a function that requires arguments
- Implement a function that has a return value
- Demonstrate how functions serve as a “black box” in the context of larger programs
*/

// function greet(){
//   console.log('Hi')
// }

let greet = (firstName, lastName) => {
  if(firstName && lastName) {
    return `Hi ${firstName} ${lastName}`
  }
  else if(firstName) {
    return `Hi ${firstName}`
  }
  else {
    return 'Hi!'
  }
}

// for(let i = 0; i < 5; i++) {
//   greet()
// }

let nameA = 'Susan'
let lastName = 'Johnson'

let nameB = 'Jason'

let greetings = [greet(nameA, lastName), greet(nameB, lastName)]
debugger

let sum = (firstNum, secondNum) => {
  return firstNum + secondNum
}

console.log(sum(3,4)) // => 7

console.log(sum(5, 5)) // => 10
