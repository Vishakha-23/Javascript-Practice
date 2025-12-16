

document.cookie = "key=value"
document.cookie = "name=vish"
document.cookie = "name2=vish2; path=/a; expires=Fri, 1 August 2025 1:25 GMT"


let key = prompt("Enter your key")
let value = prompt("Enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)