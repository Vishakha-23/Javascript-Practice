let n = 5;
let y = '*';
let x = ' ';

//lower left triangle
for (let i = 1; i <= n; i++) {
  console.log(y.repeat(i))
}

//lower right triangle 
for (let i = 1; i <= n; i++) {
  console.log(x.repeat(n - i) + y.repeat(i))
}

//upper right triangle 
for (let i = n; i >= 1; i--) {
  console.log(x.repeat(n - i) + y.repeat(i))
}

//upper left triangle 
for (let i = n; i >= 1; i--) {
  console.log(y.repeat(i))
}


//pyramid
for (let i = 1; i <= n; i++) {
  y = '* ';
  console.log(x.repeat(n - i) + y.repeat(i))
}

//inverted pyramid
for (let i = n; i >= 1; i--) {
  y = '* ';
  console.log(x.repeat(n - i) + y.repeat(i))
}

//hollow square
for (let i = 1; i <= 5; i++) {
  y = '* ';
  x = '  ';
  if (i < 5 && i > 1) {
    console.log(y.repeat(1) + x.repeat(3) + y.repeat(1));
  }
  else {
    console.log(y.repeat(5));
  }
}
