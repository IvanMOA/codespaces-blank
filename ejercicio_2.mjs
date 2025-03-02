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
| Realiza un programa que realice una cuenta regresiva desde el número que
| ingrese el usuario hasta el 0
|
*/

let numeroActual = Number(await ask("Ingresar un número"))
const numeroFinal = 0

while() {

}
