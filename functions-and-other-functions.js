/*
# Learning Goals

- Modify a function to call another function as a means to eliminate duplication
- Pass a function as an argument
- Define an anonymous function
- Refactor an anonymous function to an assigned function
*/
//
// let fullName = (firstName, lastName) => {
//   return `${firstName} ${lastName}`
// }
//
// let greet = (firstName, lastName) => {
//   return `Hi ${fullName(firstName, lastName)}`
// }
//
// let sayGoodbye = (firstName, lastName) => {
//   return `Bye ${fullName(firstName, lastName)}`
// }
//
// let firstName = 'Susan'
// let lastName = 'Johnson'
//
// console.log(greet(firstName, lastName))
// console.log(sayGoodbye(firstName, lastName))
// console.log(fullName(firstName, lastName))
//
// let names = [
//   'Jon',
//   'Arya',
//   'Tyrion',
//   'Robb',
//   'Benjen'
// ]
//
// names.forEach(name => {
//   console.log(`${name} is a character in the Game of Thrones`)
// })

let livingCharacters = [  'Jon',
  'Arya',
  'Tyrion']

let deadCharacters =['Robb',
'Benjen']


let characters = [
  ['Bran', 'Ricken', 'Sansa'],
  ['Jaime', 'Cersei', 'Tywin']
]

// stark = new Array (characters[0])
// stark = characters[0]
characters.forEach((families) => {
  let stark = characters[0]
  let lannister = characters[1]

  stark.forEach((character, index) =>  {
    console.log(`The # ${index} Stark is ${character}`)
  })
  console.log(`First index fight: ${stark[0]} vs ${lannister[0]}`)
})

let characterFight = (families) => {
  let stark = families[0]
  let lannister = families[1]
  stark.forEach((character, index) =>  {
    console.log(`The # ${index} Stark is ${character}`)
  })
  console.log(`First index fight: ${stark[0]} vs ${lannister[0]}`)
}

characterFight(characters)

//



let charCheck = (name) => {

}
//
// names.forEach(charCheck)
//
// console.log(livingCharacters)
// console.log("=====")
// console.log(deadCharacters)
//
// charCheck('Joffrey')
//
// console.log('===')
//
// names.forEach((name) => {
//   console.log(`${name}`)
// })
