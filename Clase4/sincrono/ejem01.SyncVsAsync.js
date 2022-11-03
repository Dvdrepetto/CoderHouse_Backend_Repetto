// _01 Sync
// const delay = ret => {for (let i = 0; i < ret * 8e6; i++); }

// function hacerTarea(num){
//     console.log('haciendo tarea' + num)
//     delay (100)
// }

// console.log('inicio de tareas');
// hacerTarea(1)
// hacerTarea(2)
// hacerTarea(3)
// hacerTarea(4)
// console.log('fin de tareas')
// console.log('otras tareas ...')

// _02 Async

// 

// _03

const mostrarLetras = (str) => {
    let count = 0;
    const interval = setInterval(() => {
        console.log(str.charAt(count));

        if(count === str.length){
            clearInterval(interval);
            fin();
        } count++;
    }, 1000);
};

const fin = () => console.log("terminé");

setTimeout(mostrarLetras, 0, "hola");
setTimeout(mostrarLetras, 250, "pasteles");
setTimeout(mostrarLetras, 500, "rey");