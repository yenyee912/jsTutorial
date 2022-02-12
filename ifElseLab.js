// let inputGender = window.prompt("Please enter your gender: ")
// let inputAge = window.prompt("Please enter your age: ")
// let inputCity = window.prompt("Please enter your city: ")
// let inputPhoneNumber = window.prompt("Please enter your phone number: ")

// let inputGender = "M"
// let inputAge = 14
// let inputCity = "C"
// let inputPhoneNumber = "01234567894"

let inputArr= [] // empty
inputArr[0]= "M" // first item
inputArr[1]= 14
inputArr[2]= "C"
inputArr[3] = "01234567894"

console.log(inputArr[0])

// print/output/display every element in this array
// for (let index=0; index<index.length; index++){
//   console.log(inputArr[index])
// }


let phoneNumber = inputArr[3]
let digitAmount = phoneNumber.length
let firstDigit = phoneNumber[0]
let lastDigit = phoneNumber[10]






// switch(inputGender){

//     case "F":
//         gender = "female,"
//         break

//     case "M":
//         gender = "male,"
//         break

//     default:
//         gender = "undefined gender,"
// }

if (inputArr[0] == "F") {
  gender = "female"
}
else if (inputArr[0] == "M") {
  gender = "male"
}
else {
  gender = "undefined gender"
}

console.log(inputArr[0], gender)

// alert(gender)

if (inputArr[1] <= 12) {
  age = "kid"
}
else if (inputArr[1] > 12 && inputArr[1] <= 18) {
  age = "teen"
}
else if (inputArr[1] > 18 && inputArr[1] <= 25) {
  age = "youth"
}
else if (inputArr[1] > 25 && inputArr[1] <= 60) {
  age = "middle-age"
}
else if (inputArr[1] > 60) {
  age = "elderly"
}
else {
  age = "undefined age"
}


// switch (parseInt(inputAge)) {
//     case inputAge<12:
//         age = "kid"
//         break;

//     case inputAge>12:
//         age = "teen"

//     default:
//         age = "undefined age"
//         break;
// }

switch (inputArr[2]) {
  case "A":
    city = "Downtown "
    break;

  case "B":
    city = "Suburban "
    break

  case "C":
    city = "CBD "
    break

  case "D":
    city = "village "
    break

  default:
    city = "undefined address "
    break;
}

if (
  digitAmount == 11 &&
  firstDigit == 0 &&
  lastDigit % 2 == 0
) {
  text5 = "your phone number is valid."
}
else {
  text5 = "your phone number is not valid."
}
let result = ["You are a " + gender, " with age " + inputAge, " is a " + age, " you live in " +
  city, text5]

// alert(result)

// console.log("You are a " + gender + ", with age " + inputAge + ", is a " + age + ", you live in " +
//   city + ", " + text5)