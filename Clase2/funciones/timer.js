function myFunc(param1, param2) {
    console.log(`parametros: ${param1} - ${param2}`);
}

//setTimeout(myFunc, 2000, 'Hola', 'Coders')

//ejemplo 2 setInterval
let counter = 0
const interval = setInterval(() => {
    //bloque de codigo
    counter++;
    console.log('Levi');

    if(counter === 5){
        //rompe la ejecucion, similar al break
        clearInterval(interval)
    }
}, 1500);