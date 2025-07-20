
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('inside p1');
        // resolve('first promise is resolved!')
        reject(new Error('p1 rejected'))
    }, 1000);
})

// p1.then((value) => {
//     setTimeout(() => {
//         console.log(value);
//     }, 2000);

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject('second promise throws error!')
//         }, 3000);
//     })
// }).then((value) => {
//     setTimeout(() => {
//         console.log('second promise is also resolved')
//     }, 3000);
// }).catch((value) => {
//     console.log(value);
// })


//promise API 
 
let p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('p2 resolved');
    }, 2000);
})
let p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        // resolve('p3 resolved');
        reject(new Error('p3 rejected'))
    }, 3000);
})
let p4 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('p4 resolved');
    }, 4000);
})

// let promise_all = Promise.all([p1,p2,p3,p4])
// let promise_all = Promise.allSettled([p1,p2,p3,p4])
// let promise_all = Promise.race([p1,p2,p3,p4])
// let promise_all = Promise.any([p1,p2,p3,p4])
// let promise_all = Promise.resolve(4)
let promise_all = Promise.reject('rejected')
promise_all.then((value)=>{
    console.log(value);
})