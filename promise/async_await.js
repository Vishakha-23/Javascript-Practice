
async function harry() {

    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('20 deg');
        }, 2000);
    })
    let bangWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('24 deg');
        }, 4000);
    })

    console.log('waiting for delhiWeather')
    let a = await delhiWeather;
    console.log('waiting for bangWeather')
    let b = await bangWeather;

  return [a,b];
}

const cherry= async() =>{
    console.log('Im second function!')
    
}
let func = async ()=>{
    // harry();
    // cherry();
    let a = await harry();
    let b = await cherry();

}

func();