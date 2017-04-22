/*
# Learning Goals

- Modify a function to call another function as a means to eliminate duplication
- Pass a function as an argument
- Define an anonymous function
- Refactor an anonymous function to an assigned function
*/

let fullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`
}

let greet = (firstName, lastName) => {
  return `Hi ${fullName(firstName, lastName)}`
}

let sayGoodbye = (firstName, lastName) => {
  return `Bye ${fullName(firstName, lastName)}`
}

let firstName = 'Susan'
let lastName = 'Johnson'

// console.log(greet(firstName, lastName))
// console.log(sayGoodbye(firstName, lastName))

let names = [
  'Jon',
  'Arya',
  'Tyrion'
]

let charCheck = (name) => {
  console.log(`${name} is a character in the Game of Thrones`)
}
names.forEach(charCheck)

charCheck('Joffrey')

console.log('===')

names.forEach((name) => {
  console.log(`${name}`)
})
