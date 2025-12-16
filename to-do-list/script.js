function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


let add_button = document.getElementById("add");

add_button.addEventListener("click", ()=>{
let div=  document.createElement('div');
   let note = document.getElementById("note").value;
   if(note.trim() === "") return;
   div.innerHTML = `<p>${note}</p>`;
  
   div.classList.add("card-body", "mt-4")
     
   
document.getElementById("cardContainer").append(div);
note = "";
})