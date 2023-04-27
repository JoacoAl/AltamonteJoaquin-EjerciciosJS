let miNombre = "Joaquin";
let miApellido = "Altamonte";
let miEdad = 18;
let miMascota = "Apu";
let edadMascota = 10;
console.log(miNombre, miApellido, miEdad, miMascota, edadMascota);

const nombreCompleto = `${miNombre} ${miApellido}`;
console.log(nombreCompleto);

let textoPresentacion = `Mi nombre es ${miNombre}, mi apellido es ${miApellido}, tengo ${miEdad} años. El nombre de mi mascota es ${miMascota} tiene ${edadMascota} años `;
console.log(textoPresentacion);

const sumaEdades = miEdad + edadMascota;
const restaEdades = miEdad - edadMascota;
const productoEdades = miEdad * edadMascota;
const divisionEdades = miEdad / edadMascota;
console.log(sumaEdades, restaEdades, productoEdades, divisionEdades);

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
