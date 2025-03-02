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
| Realiza un programa que imprima números desde el 1 hasta un número ingreasdo
| por el usuario, utiliza el bucle while
|
*/

let numeroActual = 0
const numeroFinal = Number(await ask("Ingresar un número"))

while(){

}