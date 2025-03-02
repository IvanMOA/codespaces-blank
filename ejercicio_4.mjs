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
| Realiza un programa que le pida al usuario un número e imprima todos los
| números pares desde el número ingresado por el usuario hasta el 0
|
| Recuerda que en javascript podemos utilizar el operador "%" para obtener 
| el restante de una divisón, ejemplo:
|
|   1 % 2 = 1            2 % 2 = 0            3 % 2 = 1               etc...    
|
|    1                     2                   3                                     
|    - = 0, sobra 1        - = 1, sobra 0      - = 1, sobra 1                                                 
|    2                     2                   2                                   
|
| Nota: se requerirá el uso de condicionales ademas de bucles
|
*/

const numeroInicial = Number(await ask("Ingresa un número: "))
const numeroFinal = 0

while() {

}
