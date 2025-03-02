import readline  from 'node:readline'
import { stdin, stdout }  from 'node:process'
const rl = readline.createInterface({ input: stdin, output: stdout });
const ask = (message) => new Promise(resolve => {
  rl.question(message, answer => {
    resolve(answer)
    rl.close()
  })
})
/*
|--------------------------------------------------------------------------
| Bucles
|--------------------------------------------------------------------------
|
| Realiza un programa que imprima la tabla de multiplicar de un numero base ingresado
| por el usuario desde el 1 hasta otro numero ingresado por el usuario
|
|
| Si el usuario teclear como primero número el 5, y como segundo número el 3, el
| resultado será
| 5x1 = 1
| 5x2 = 10
| 5x3 = 15
|
| No hay que olvidar imprimirlo con el formato anterior, no solamente el resultado
|
*/

const numeroBase = Number(await ask("Ingresa el número base: "))

let multiplicadorActual = 1
const multiplicarHasta =  Number(await ask("Ingresa hasta que número se multiplicará: "))

while() {

}
