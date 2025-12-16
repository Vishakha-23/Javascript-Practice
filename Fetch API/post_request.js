//fetch API
// let p = fetch('http://goweather.xyz/weather/Berlin');

// p.then((value)=>{
//     console.log(value.status)
//     console.log(value.ok)
//     return value.json()
// }).then((value)=>{
//     console.log(value);
// })

// console.log('next api!')
// let p1 = fetch('https://goweather.herokuapp.com/weather/Ny');

// p1.then((value)=>{
//     console.log(value.status)
//     console.log(value.ok)
//     return value.json()
// }).then((value)=>{
//     console.log(value);
// })

//sending post request using fetch API
// let option = {
//     method: "POST",
//     body: JSON.stringify({
//         title: 'helloo!',
//         body: 'not-your-type',
//         userId: 10,
//     }),

//     headers: {
//         "Content-type": "application/json"
//     }
// }

// let p2 = fetch('https://jsonplaceholder.typicode.com/posts', option)
// p2.then(response => response.json())
//     .then(json => console.log(json))

const createToDo = async (x) => {
    let option = {
        method: "POST",
        body: JSON.stringify(x),
        headers: {
            "Content-type": "application/json"
        }
    }

    let p2 = await fetch('https://jsonplaceholder.typicode.com/posts', option)
    let response = await p2.json()
    return response;

}

const getTodo = async (id) => {
    let p = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    let response = await p.json()
    return response;
}
const mainFunc = async () => {
    let todo = {
        title: "hello",
        body: 'its your choice',
        userId: 1,
    }
    let todor = await createToDo(todo)
    console.log(todor)
    console.log(await getTodo(10))
}

mainFunc()