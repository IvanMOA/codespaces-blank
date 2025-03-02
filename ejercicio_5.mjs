import readline  from 'node:readline'
import { stdin, stdout }  from 'node:process'
const rl = readline.createInterface({ input: stdin, output: stdout });
const ask = (message) => new Promise(resolve => {
  rl.question(message, answer => {
    resolve(answer)
  })
})
/*
|--------------------------------------------------------------------------
| Bucles
|--------------------------------------------------------------------------
|
| Realiza un programa que le pida N cantidad de números al usuario hasta que 
| se ingrese el número 0 y al final nos de el promedio de los números ingresados
|                    
|
*/


const total = 0
let numerosIngresados = 0
let ultimoNumeroIngresado

while() {
  const numero = Number(await ask("Ingresa un número: "))
}
 
//
rl.close()