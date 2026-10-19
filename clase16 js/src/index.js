//METODOS DE ARREGLOS 
const numeros = [2,8,12,50]

//ForCach loop no devuelve nada 
//el callback se ejecuta una vez por elemento
// numeros.forEach((numero,indice, arreglo)=>{ 
//     console.log (numero,indice, arreglo)
// })

//Map ->loop ->devuelve un numero arreglo

const numerosIncrementados = numeros.map((numeros)=>{
    return numero + 1
})

console.log(numerosIncrementados)