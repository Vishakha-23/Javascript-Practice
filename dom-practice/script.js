let cont = document.querySelector('.container');
cont.style.backgroundColor='red';

//this line does not change any style
let boxes = document.getElementsByClassName('box');
boxes.style.backgroundColor ='blue';

//this should be used instead
const collection = document.getElementsByClassName("box");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "black";
}
