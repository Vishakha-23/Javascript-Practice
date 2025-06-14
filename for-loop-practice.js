//initializing object
const obj = {
  'name': 'Vishakha',
  'role': 'student',
  'skill': 'Web development'
}

//for-in loop : loop through keys of an object
for (const key in obj) {

  const element = obj[key];
  console.log(element);

}

//for-of loop : loop through iterable data structure
for (const element of 'Vishakha') {
  console.log(element);
}

//write a program to print the marks of student in object below
let obj1 = {
  'harry': 98,
  'rohan': 70,
  'akash': 7
}

//returns array of key vlue pair of object
console.log(Object.entries(obj1));

const obj_arr = Object.entries(obj1);
for (let i = 0; i < obj_arr.length; i++) {
  
  console.log(obj_arr[i]);
}


for (const key in obj1) {
  if (Object.prototype.hasOwnProperty.call(obj1, key)) {
    const element = obj1[key];//to print values
    console.log(key);//to print keys
  }
}