const express = require('express')
const classContainer = require('./container/App')

const app = express();
const PORT = 8070

//instanciando la clase
const archivo = new classContainer('productos.JSON')


app.get('/products',async (req, res)=>{
    
    const prods = await archivo.leer()
    res.send({Productos: prods})
})

app.get('/productoRandom',async (req,res)=>{
    const prods = await archivo.leer()
    const random = parseInt(Math.random()* prods.length)

    res.send({Productos: prods[random]})
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
})

//server.on('error', error => console.log(`error en server ${error}`))