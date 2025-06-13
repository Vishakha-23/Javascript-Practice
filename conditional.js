//Demonstrate the use of switch case in JS
let x = 17, z = 28;
let y = '*';

switch (y) {
    case '*':
        console.log(x * z)
        break;
    case '+':
        console.log(x + z)
        break;
    default:
        break;
}
//whether a number is divisible by 2 and 3
((x%2==0) & (x%3==0)) ? console.log('divisible by 2 and 3') : console.log('not divisible by 2 and 3');

//whether a number is divisible by 2 or 3
((x%2==0) || (x%3==0)) ? console.log('divisible by 2 or 3') : console.log('not divisible by 2 or 3');

//whether you can drive or not
(z >=18) ? console.log('You can drive!') : console.log('You can not drive!');

