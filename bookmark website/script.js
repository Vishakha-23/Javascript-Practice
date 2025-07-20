

let button = document.getElementById('button');
let myList = document.getElementById('bookMarks');

button.addEventListener('click', ()=>{
    let link = document.getElementById('textarea');
  let newList = document.createElement('a');
 newList.href = link.value;
 newList.innerHTML =  link.value;
 myList.append(newList)
 link.value= null;
})