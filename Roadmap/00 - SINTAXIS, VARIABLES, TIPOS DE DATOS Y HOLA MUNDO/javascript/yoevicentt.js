/* Ejercicio 1 de Logica

1. Crea un comentario en el código y coloca la URL del sitio web oficial del
 *   lenguaje de programación que has seleccionado.

R: https://developer.mozilla.org/en-US/docs/Web/JavaScript*/

/* Ejercicio 2 de Logica

2.  Representa las diferentes sintaxis que existen de crear comentarios
 *   en el lenguaje (en una línea, varias...).

R: */

// Comentario de una linea

/* Comentario 
de
varias
lineas*/

/* Ejercicio 3 de Logica

3.  Crea una variable (y una constante si el lenguaje lo soporta). 

R: */

let myName = 'Yoeli';
const PI = 3.1416;

/* Ejercicio 4 de Logica

4.  Crea variables representando todos los tipos de datos primitivos
 *   del lenguaje (cadenas de texto, enteros, booleanos...).

R: */


// Variable String con comillas simples
let myText = 'Esto es un string con comillas simples';

//Variable String con comillas dobles
let myText2 = "Esto es un string con comillas dobles"

// Variable de tipo number entero
let inter = 3;

// Variable de tipo boolean
let on = true;

/**  Variable de tipo NaN (La variable de tipo NaN suele visualizarse cuando hay un numero multiplicado por algo que no es otro numero,
 * (puede haber una operacion por ahi que este errada)
*/
let multiplicacion = inter * myText;

/** Variable de tipo null (las variables de tipo null suelen aplicarse intencionalmente
 * esto quiere decir que es el programador el que le asigna un valor null a una variable, constante, etc
)*/

let varNull = null;

/** Variable undefined se lo asigna el propio javascript y es basicamente cuando un primitivo no tiene valor asignado
 * 
 */

let indefinido;

/* Ejercicio 5 de Logica

5. Imprime por terminal el texto: "¡Hola, [y el nombre de tu lenguaje]!"

R: */

console.log("¡Hola, JavaScript!");