import readline  from 'node:readline'
import { stdin, stdout }  from 'node:process'
const rl = readline.createInterface({ input: stdin, output: stdout });
const ask = (message) => new Promise(resolve => {
  rl.question(message, answer => {
    resolve(answer)
  })
})
//


const palabra = await ask("Dime una palabra: ") // "Axel"
const vecesARepetir = Number( await ask("Dime un numero: ")  ) // 3

let palabraRepetida = ""

let numeroActual = 0
while(numeroActual < vecesARepetir){
    palabraRepetida = palabraRepetida + palabra
    numeroActual += 1
}

console.log(palabraRepetida);









//
rl.close()