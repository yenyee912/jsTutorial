let students= ["ali", "abu", "muthu", "ah lee", "ah ming", "shan"]

// ["ali0", "abu1", "muthu2", "ah lee3", "ah ming4", "shan5"]

// array manipulation
// students.push("jeremy")

for (let i=0; i<students.length; i++){
  // console.log(students[i], "is a boy")
  // console.log("student", i, students[i])

  // index

  students[i]= students[i]+i



}
console.log(students)
// ["ali0", "abu1", "muthu2", "ah lee3", "ah ming4", "shan5"]




// students.shift()
for (let j=0; j<students.length; j+=2){
  // j=0 ali 
  // j=2 muthu 
  // j=4 ah ming

  // j=6==> j<6 

  // string --> text
  let x= "jeremey"
  let fL= x[0]
  
  let firstLetter= students[j][0] //
  let secondLetter= students[j][1] //get the second letter of every student
  
  if (firstLetter == "a"){
    console.log(j, students[j])

  }

  else{
    console.log(j, 'is not start with a')
  }

}


