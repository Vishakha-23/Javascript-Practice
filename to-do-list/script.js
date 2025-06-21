function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function add() {
    let input = document.getElementById('textarea').value;

    if(input.trim()!== ""){
        let newNote = document.createElement('li');
        newNote.classList.add("listStyle");
        
        newNote.textContent = input;
        newNote.style.backgroundColor = getRandomColor();
        newNote.style.border = getRandomColor();
        document.getElementById('todolist').append(newNote)
        document.getElementById('textarea').value = "";
    }
}