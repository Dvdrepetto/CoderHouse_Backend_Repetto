const express = require('express')

const app = express()

//config para poder procesar información del cliente
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const PORT = 8090


app.get('/api/mensajes', (req, res)=>{
    console.log('HTTP GET');
    //obtener data

    res.json({msg: 'Hola mundo' })
})

//query params
app.get('/api/mensajes-query-params',(req, res)=>{
    console.log('GET con query params');

    if(Object.entries(req.query).length >0){
        res.json({
            res: 'get con query params ok',
            query: req.query
        })
    } else{
        res.json({
            result: 'no se envió info por query params',
        })
    }
})

//path params
app.get('/api/mensajes/:id', (req, res)=>{
    res.json({
        result: 'recurso buscado',
        pathParams: req.params.id
    })
})


app.post('/api/mensajes', (req, res)=>{
    //res.json(req.body)
    res.json({mensaje:"la informacion se envio de forma correcta"})
})

app.listen(PORT, ()=>{
    console.log('server ok');
})