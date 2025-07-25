const loadScript = async (src) => {

    return new Promise((resolve, reject) => {
        let script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(src)
        }
        document.head.append(script);
    })
}

//problem 2
// const main2 = async () => {
//     let a = await loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js');
//     console.log(a);
// }
// main2();

//problem 3
// async function func1() {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(4)
//             // resolve(5)
//         }, 3000);
//     })
// }

// let a1 = async () => {
//     try {
//         let a = await func1();
//     } catch (err) {
//         console.log('An error occurred!')
//     }
// }
// a1();

//problem 4


const p1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject(1)
            resolve(5)
        }, 1000);
    })
}
const p2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(4)
            // resolve(5)
        }, 2000);
    })
}

let p3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject(4)
            resolve(5)
        }, 3000);
    })
}


const run = async()=>{
    console.time('run')
    let a1= await p1()
    let a2= await p2()
     let a3= await p3()
    console.log(a1,a2,a3)
    console.timeEnd('run')
}
run();

