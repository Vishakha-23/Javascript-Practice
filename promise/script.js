
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         alert('HELLO!');
//     }, 3000);

// })

let p = new Promise((resolve, reject) => {

    console.log("i'm inside promise.")
    setTimeout(() => {
        console.log("i'm inside setTimeout.")

        // resolve('done')
        reject(new Error('this generates error!'))
    }, 5000);
})

// p.then((value) => {
//     console.log(value);
// })


// p.then(alert)

// p.catch((error) => {
//     console.log('Some error occured');
// })

p.then((value)=>{
    console.log(value);
},(error)=>{
    console.log('Some error occurred.')
})

