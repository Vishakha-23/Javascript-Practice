let addButton = document.getElementById("add_button");

addButton.addEventListener("click", () => {
 
if (document.getElementById("note").value == ""){
    alert("Error! Please enter someting..")
}
    let div = document.createElement("div");
    div.innerText = document.getElementById("note").value;
    let container = document.getElementById("container");
    container.append(div);
    document.getElementById("note").value = "";
 

})

let button = document.getElementById("button");
button.addEventListener("click", () => {
    if (button.innerText == "Dark Mode") {
        document.body.style.backgroundColor = " black";
        document.body.style.color = " white";
        button.innerText = "Light Mode"
    }
    else{
        document.body.style.backgroundColor = " white";
        document.body.style.color = " black";
        button.innerText = "Dark Mode"
    }
})

// document.onload(())
//  let answer = document.querySelectorAll(".accordion");
// answer.forEach((ansEvent)=>{
//    ansEvent.addEventListener("click", () => {
//     ansEvent.classList.toggle("active");
// });

// })
let accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");
  });
});
