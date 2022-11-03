function dividir(dividendo, divisor){
    return new Promise((resolve,reject) => {
        if(divisor === 0 ){
            reject('no se puede dividir por cero')
        }
        resolve(dividendo / divisor)
    })
}

dividir(10, 05)
.then(resultado =>{
    console.log(`resultado ${resultado}`);
})
.catch(error =>{
    console.log(`Error: ${error}`);
})
.finally(() => {
    const fecha = new Date().toLocaleDateString();
    console.log(`${fecha}`);
})