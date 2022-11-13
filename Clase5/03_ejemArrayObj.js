const productos = [{
    id: 1,
    nombre: 'Escuadra',
    precio: 323.45
}, {
    id: 2,
    nombre: 'Calculadora',
    precio: 234.56
}, {
    id: 3,
    nombre: 'Globo Terráqueo',
    precio: 45.67
}, {
    id: 4,
    nombre: 'Paleta Pintura',
    precio: 456.78
}, {
    id: 5,
    nombre: 'Reloj',
    precio: 67.89
}, {
    id: 6,
    nombre: 'Agenda',
    precio: 78.90
}]

function getNombres(productos){
    const nombres = productos.map(producto => producto.nombre)
        return nombres.join(',')
}
console.log(getNombres);

function getPrecioTotal(productos){
    let total = 0;
    for(const producto of productos){
        total += producto.precio;
    }
    total = parseFloat(total.toFixed(2))
    return total;
}
console.log(getPrecioTotal);

function getPrecioPromedio(productos){
    if(productos.length === 0){
        throw new Erro ('No se puede calcular el promedio porque el array esta vacio')
    }
    return getPrecioTotal(productos) / productos.length
}

function getProductMinPrice(productos){
    if(productos.length === 0){
        throw new Erro ('No se puede calcular el promedio porque el array esta vacio')
    }
    let min = productos[0].precio;
    let prod = productos[0];
    if (productos.precio < min) {
        min = productos.precio
        prod = productos
    }
    return prod
}

function getProductMaxPrice(productos){
    if(productos.length === 0){
        throw new Erro ('No se puede calcular el promedio porque el array esta vacio')
    }
    let max = productos[0].precio;
    let prod = productos[0];
    if (productos.precio > max) {
        max = productos.precio
        prod = productos
    }
    return prod
}

const info = {
    nombres: getNombres(productos),
    productoPrecioMinimo: getProductMinPrice(productos),
    productoPrecioMaximo:   getProductMaxPrice(productos),
    total: getPrecioTotal(productos),
    promedio: getPrecioPromedio(productos)
}
console.log(info);