let number1= 0

while(number1 <10){
  console.log("the number is:", number1)
  number1+=3
}

let input1= window.prompt("Please enter yes or no only:")
// console.log(input1)

while( input1!="yes" && input1!= "no"){
  console.log("this is not the correct input: ", input1)
  input1 = window.prompt("Please enter yes or no only:")
  // break;
}



