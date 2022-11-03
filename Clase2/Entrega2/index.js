const Conteiner = require("./app.js")
const productos = new Conteiner("./productos.json")

async function ejecutar(){

    const objeto4={
        nombre:"objeto4  ",
        precio:200,
        thumbnail:"url",
        id:4
    }

    const objeto3={
    nombre:"objeto3 ",
    precio:320,
    thumbnail:"url",
    id:3
    }

    const objeto2={
    nombre:"objeto2  ",
    precio:324,
    thumbnail:"url",
    id:2
    }

    const objeto1={
    nombre:"objeto1  ",
    precio:300,
    thumbnail:"url",
    id:1
    }

    //await productos.getAll().then(a=>console.log(a));
    //await productos.save()
    //await productos.getById()
    //await productos.deleteById()
    //await productos.deleteAll()
    
}

ejecutar()