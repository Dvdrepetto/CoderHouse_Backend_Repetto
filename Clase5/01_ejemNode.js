const personas = [
    {
        nombre: 'david',
        edad: 29,
    },
    {
        nombre: 'facu',
        edad: 20,
    },
    {
        nombre: 'juan',
        edad: 33,
    } 
]

const nombrePersonas = personas.map(persona =>{
    return persona.nombre
})

console.log(nombrePersonas);