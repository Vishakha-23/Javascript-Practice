

function write() {

    let div = document.createElement('div');
    let x = Math.floor(Math.random() * 7);

    if (x > 2 && x < 4) {
        div.innerText = 'Initializing'
    } else if (x > 3 && x < 5) {
        div.innerText = 'Reading your Files'
    } else if (x > 5 && x < 7) {
        div.innerText = 'Password files Detected '
    } else if (x >= 1 && x < 2) {
        div.innerText = 'cleaning up '
    } else {
        div.innerText = 'Sending all passwords and personal files to server '
    }

    document.querySelector('.box').appendChild(div);
}

setInterval(() => {
    write();
}, 1000);
