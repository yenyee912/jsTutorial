// array of objects
let fruits= [ // key-value pairs
  {name: "Apple", color: "red", price: 5, inStock: false, },
  {name: "Orange", color: "orange", price: 6, inStock: false},

  {name: "Orange", color: "orange", price: 4.5, inStock: true},

  {name: "Pear", color: "green", price: 3, inStock: true},

  { name: "Apple", color: "red", price: 2, inStock: true }
]
// console.log("first object of fruits",fruits[0])

for (let i=0; i<fruits.length; i++){
  // console.log("the name is: ", fruits[i].name, "it is", fruits[i].color, "the price is:", fruits[i].price)
  // data formatting
  let allCapsName= fruits[i].name.toUpperCase()
  
  // console.log(parseInt(fruits[i].price))
  let firstNumber= parseInt(fruits[i].price)
  if (fruits[i].price- firstNumber == 0){
    fruits[i].price= fruits[i].price.toString()+".00"
  }

  else{
    fruits[i].price= fruits[i].price.toString()+"0"
  }

  let text = `The name of fruit is ${allCapsName}. 
  It is ${fruits[i].color}. It is RM${fruits[i].price}.`
  
  if (fruits[i].inStock){
    text+= `It is in stock.`

  } 
  
  else{
    text+= `It is sold out.`
  }
  
  console.log(text)


}


// object
let oneFruit = { name: "Apple", color: "red", price: 5, inStock: false }
console.log(oneFruit.color) // "Apple"









