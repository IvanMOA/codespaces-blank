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
| Listas
|--------------------------------------------------------------------------
|
| Realiza un programa que le pida N cantidad de números al usuario hasta que 
| se ingrese el número 0, guardalos en una lista y encuentra el número más 
| grande
|
*/

//
rl.close()