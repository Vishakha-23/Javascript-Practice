
let arr = [1, 2, 6, 9, 10, 54, 32, 11, 7, 3];

// console.log(arr);
// console.log(arr.length);

arr[6] = 67;
console.log(arr);

// console.log(arr.join('a'));

console.log(arr.pop());//returns and removes last element from array 
console.log(arr);

console.log(arr.push(48));//returns length of new array after pushing new element from last
console.log(arr);

console.log(arr.shift());//returns and removes first element from beginning
console.log(arr);

console.log(arr.unshift(5));//returns length and adds element from beginning
console.log(arr);

delete arr[2];//deletes item but size of array doesn't changes
console.log(arr);

let arr2 = ['a', 'dee', 'bee', 'see'];
let newArr = arr.concat(arr2);
console.log(newArr)

console.log(arr2.sort());//sorts array alphabetically




























