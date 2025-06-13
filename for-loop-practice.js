 //initializing object
 const obj = {
    'name' : 'Vishakha',
    'role' : 'student',
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