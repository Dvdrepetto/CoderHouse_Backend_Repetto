const ejecutar = unaFuncion =>unaFuncion();
const saludar = () => console.log('Hola soy un callback');

ejecutar(saludar);

//ejemplo_02
const ejecutar2 = (unaFuncion, params) =>unaFuncion(params);
const saludar2 = nombre => console.log(`Hola ${nombre}`);

ejecutar2(saludar2, 'Ale');

/*
--> ejemplo practico - procesamiento de un archivo (CSV) con miles de registros, queremos sabel el tiempo que tarda en hacer todo el procesamiento para mejorarlo
*/

function procesarDatayLogear(text, callbackParaLogear){
// simulación de escribir un archivo
console.log(text);

//cuando finalice, ejecutamos el callback
callbackParaLogear('archivo procesado con exito')
}

procesarDatayLogear('Hola estoy usando callbacks', (mensajeParaLogear) => {
const fecha = new Date().toLocaleDateString();
console.log(`${fecha}: ${mensajeParaLogear}`);
})