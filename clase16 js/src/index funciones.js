// {// Imprime por consola
// console.log('Hola JS')

// // Tipado
// let nombre = 'Andres'
// nombre = 'Jose'

// // Operadores aritméticos
// const edad = 25
// const mayoriaEdad = 18

// const aumentoEdad = edad + 1

// // Operadores lógicos / comparación
// let resultadoMayorEdad = edad >= mayoriaEdad

// console.log(resultadoMayorEdad)

// // Estructura de control
// if (edad > mayoriaEdad) {
//     console.log('Es mayor')
// }
// else if (edad === mayoriaEdad) {
//     console.log('Tiene ' + mayoriaEdad)
// }
// else {
//     console.log('Es menor')
// }
// }

//ESTRUCTURA DE CONTROL DE BUCLE
// for(let i =0; i< 10; i++){
//     console.log(i)
// }

//ARREGLOS
// const numeros = [1,2,3,4,5,6]
// const numeros2 = [1,2,3,4,5,6]

// console.log(numeros[2][1])
// numeros[2]= 5

//ESTRUCTURA DE CONTROL DE BUCLE
// for(let i =0; i< numeros.length; i++){
//     console.log(numeros[i])
// }

// OBJETOS

// const persona = {
//     edad: 20,
//     estudia: true,
//     nombre: "Guada",
//     redes: [
//         'instagram',
//         'tiktok',
//         'youtube'
//     ],
//     otros: {
//         pasatiempo: 'ver mi serie',
//         mascotas: 3
//     },

//     caminar: function name(params){
//         //
//     }
// }
// persona.nacionalidad = 'Argentina'
// console.log(persona.redes[1])
// console.log(persona.otros['pasatiempo'])

//FUNCIONES declarado
// function suma(a, b){
//     // console.log(a + b)
//     return a + b
// }

// Invocar / Ejecutar / Llamar 
//<------ 
//const resultado = suma(10,2) 

//console.log(resultado)


//Funcion flecha -> anonima
//FatARroww

// const resta = ( a,b)=>{
//     return a - b
// }

// const resta = (a,b)=> a + b

// const resta = a => a + 5

//Callback 

const a = (cb)=> {
    console.log ('Se ejecuto a ')
    cb()
}
//Nuestro callback
const b = () => {
    console.log('Se ejecuto el callback b')
}

// console.log(b())
//a(b)

a(()=>{
     console.log('Se ejecuto el callback b')
})



