

function write() {

    let div = document.createElement('div');
    let x = Math.floor(Math.random() * 7);
let message ='';
    if (x > 2 && x < 4) {
        message = 'Initializing'
    } else if (x > 3 && x < 5) {
        message = 'Reading your Files'
    } else if (x > 5 && x < 7) {
        message = 'Password files Detected '
    } else if (x >= 1 && x < 2) {
        message = 'cleaning up '
    } else {
        message = 'Sending all passwords and personal files to server '
    }
  
    div.innerHTML = `${message}<span class="dots"></span>`;
    document.querySelector('.box').appendChild(div);
     document.querySelector('.box').scrollTop = document.querySelector('.box').scrollHeight;
}

setInterval(write,1000);
