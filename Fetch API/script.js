
let p = fetch('http://goweather.xyz/weather/Berlin');

p.then((value)=>{
    console.log(value.status)
    console.log(value.ok)
    return value.json()
}).then((value)=>{
    console.log(value);
})

console.log('next api!')
let p1 = fetch('https://goweather.herokuapp.com/weather/Ny');

p1.then((value)=>{
    console.log(value.status)
    console.log(value.ok)
    return value.json()
}).then((value)=>{
    console.log(value);
})