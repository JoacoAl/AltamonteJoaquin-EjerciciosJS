/* Ejercicio 1 - 6 */
let miNombre = "Joaquin";
let miApellido = "Altamonte";
let miEdad = 18;
let miMascota = "Apu";
let edadMascota = 10;
console.log(miNombre, miApellido, miEdad, miMascota, edadMascota);

/* Ejercicio 7 */
const nombreCompleto = `${miNombre} ${miApellido}`;
console.log(nombreCompleto);

/* Ejercicio 8 */
let textoPresentacion = `Mi nombre es ${miNombre}, mi apellido es ${miApellido}, tengo ${miEdad} años. El nombre de mi mascota es ${miMascota} tiene ${edadMascota} años `;
console.log(textoPresentacion);

/* Ejercicio 9 */
const sumaEdades = miEdad + edadMascota;
const restaEdades = miEdad - edadMascota;
const productoEdades = miEdad * edadMascota;
const divisionEdades = miEdad / edadMascota;
console.log(sumaEdades, restaEdades, productoEdades, divisionEdades);

/* Ejercicio 10 */
textoPresentacion = `Mi nombre es ${miNombre}, mi apellido es ${miApellido}, tengo ${miEdad} años. El nombre de mi mascota es ${miMascota} tiene ${edadMascota} años. La suma entre mi edad y la de mi perro es de ${sumaEdades}, la resta es de ${restaEdades}, el producto es de ${productoEdades} y la division es de ${divisionEdades}`;
miNombre +
  " " +
  miApellido +
  " " +
  miEdad +
  " " +
  miMascota +
  " " +
  edadMascota +
  " " +
  sumaEdades +
  " " +
  restaEdades +
  " " +
  productoEdades +
  " " +
  divisionEdades;

console.log(textoPresentacion);

/* Ejercicio 11 */

const alumnos = {
  nombre: "Joaquin",
  apellido: "Altamonte",
  edad: "18",
  fechaDeNacimiento: "11/09/2004",
  signo: "virgo",
};
console.table(alumnos);
console.log(alumnos.nombre);
console.log(alumnos.apellido);
console.log(alumnos.edad);
console.log(alumnos.fechaDeNacimiento);
console.log(alumnos.signo);

/* Ejercicio 12 */

const mascota = {
  nombre: "Apu",
  raza: "Labrador",
  edad: "10",
  cumpleaños: "02/01/2013",
  color: "dorado",
};
console.table(mascota);
console.log(mascota.nombre);
console.log(mascota.raza);
console.log(mascota.edad);
console.log(mascota.cumpleaños);
console.log(mascota.color);

/* Ejercicio 13*/

const frutas = ["manzana", "pera", "banana", "uva", "sandia"];

console.log(frutas);

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);

/* Ejercicio 14 */

const numeros = [10, 20, 30, 40, 50];

console.log(numeros);

console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

/* Ejercicio 15 */

const familia = ["mama", "papa", "yo", "hermano", "mascotas"];

console.log(familia);

console.log(familia[0]);
console.log(familia[1]);
console.log(familia[2]);
console.log(familia[3]);
console.log(familia[4]);

/* Ejercicio 16 */

let textoAleatorio = [`${frutas[1]} ${numeros[3]} ${familia[4]}`];
console.log(textoAleatorio);

/* Ejercicio 17 */

/* const edadMia = Number(prompt("Ingrese su edad:"));
const edadCompañero = Number(prompt("Ingrese la edad de su compañero"));

const edadesIguales = edadCompañero === edadMia;
const soyMayor = edadMia > edadCompañero;
const soyMenor = edadMia < edadCompañero;
console.log("Mi edad es igual a la de mi compañero:", edadesIguales);
console.log("Mi edad es mayor a la de mi compañero:", soyMayor);
console.log("Mi edad es menor a la de mi compañero:", soyMenor);
 */
/* Ejercicio 18 */
/* 
const compararEdad = Number(prompt("Ingrese Su Edad:"));

const soyMayorDeEdad = compararEdad >= edadMia;

console.log("Soy mayor de edad", soyMayorDeEdad);
 */

//Lo comento para que no me moleste en los ejercicios siguientes

/* Ejercicio 19 */

/* const edadPersona = Number(prompt("Ingrese su edad:"));
const alturaPersona = Number(prompt("Ingrese su altura"));

const puedeSubir = edadPersona > 6 && alturaPersona > 120;

console.log("Puede subir a la atracción", puedeSubir); */

/* Ejercicio 20 */

const pasePersona = prompt("Ingrese su pase: 'VIP', 'NORMAL', 'LIMITADO' ");
const saldoPersona = prompt("Ingrese su saldo:");

const puedePasar = pasePersona == "VIP" || saldoPersona > 1000;

console.log("La persona puede pasar", puedePasar);
