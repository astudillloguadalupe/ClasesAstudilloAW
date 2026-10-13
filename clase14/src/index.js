// Imprime por consola
console.log('Hola JS')

// Tipado
let nombre = 'Andres'
nombre = 'Jose'

// Operadores aritméticos
const edad = 25
const mayoriaEdad = 18

const aumentoEdad = edad + 1

// Operadores lógicos / comparación
let resultadoMayorEdad = edad >= mayoriaEdad

console.log(resultadoMayorEdad)

// Estructura de control
if (edad > mayoriaEdad) {
    console.log('Es mayor')
}
else if (edad === mayoriaEdad) {
    console.log('Tiene ' + mayoriaEdad)
}
else {
    console.log('Es menor')
}