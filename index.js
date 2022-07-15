console.log("holiiiiiiiiiiiiiiis");

/*INDEX OF*/
/*El metodo indexOf() retorna el primer índice 
 en el que se puede encontrar un elemento dado en el array
  , o retorna -1 si el elemento no esta presente*/

// const arrayNumeros = [1, 2, 3, 4, 5, 6, -2];

// const indexOfNumber = arrayNumeros.indexOf(-2);

// console.log(indexOfNumber);

/*lastIndexOf()*/

// const animales = ["vaca", "gallina", "cerdo", "pato"];
// const numeros = [1, 4, 2, 3, 4, 5, 6, 4];

// console.log(animales.lastIndexOf("conejo"));
// // console.log(animales.indexOf("conejo"));
// console.log(numeros.lastIndexOf(4));

// .findIndex()
//Nos devuelve el indice del primer elemento que cumple la condición
//dada. Caso contrario devuelve -1
// const arrayObjetos = [
//   { id: 4, nombre: "Messi" }, 0
//   { id: 1, nombre: "Ronaldo" },1
//     { id: 2, nombre: "Messi" }, 2
//   { id: 3, nombre: "Mbappe" }, 3
// ];

// const indexOfObjetos = arrayObjetos.findIndex(
//   (objeto) => objeto.nombre === "Messi"
// );

// console.log(indexOfObjetos);

// .includes() y some()

//INCLUDES:
// El metodo includes determina si un array incluye un elemento determinado
// devuelve true o false segun corresponda

//SOME: El método some() comprueba si al menos un elemento del array cumple
// con la condición implementada por la función proporcionada.

// const arrayNumeros = [1, 2, 3, 4, 5];

// const arrayObjetos = [
//   { id: 1, nombre: "Ronaldo" },
//   { id: 2, nombre: "Messi" },
//   { id: 3, nombre: "Mbappe" },
// ];

// const existeJugador = arrayNumeros.some(3);

// console.log(existeJugador);

//.flat()

// El método flat() crea un nuevo array con todos los elementos de sub-array
// concatenados recursivamente hasta la profundidad especificada.

// const arr = [1, [1, 2], 3, 4, [1, [1, 2]]];

// const arrayFlat = arr.flat(1);
// // const arrayFlatConParametro = arr.flat(3);

// console.log(arrayFlat);

// .reverse()

// Devuelve el mismo array que sobre el cual se aplico, pero invertido

// const numeros = [1, 2, 3, 4];
// console.log(numeros);

// numeros.reverse(); // Cuando aplique reverse, va a cambiar el array original

// console.log(numeros);

// .push()
// El método push() añade uno o más elementos AL FINAL
// de un array y devuelve la nueva longitud del array.

// const alumnos = ["Nati", "Lauti", "Rocio", "Joaco", "Fran"];

// const pushear = alumnos.push("Facu");

// console.log(pushear);

// console.log(alumnos);
// console.log(alumnos.length);

// pop()
// El método pop() elimina el último elemento de un array y lo devuelve.
//  Este método cambia la longitud del array.
// const alumnos = ["Nati", "Lauti", "Rocio", "Joaco", "Santi"];

// let elementoEliminado = alumnos.pop();

// console.log(elementoEliminado);
// console.log(alumnos);

// .shift()
// El método shift() elimina el primer elemento del array y lo retorna.
// Este método modifica la longitud del array.

// const alumnos = ["Nati", "Lauti", "Rocio", "Joaco", "Santi"];

// let elementoEliminado = alumnos.shift();

// console.log(elementoEliminado);
// console.log(alumnos);

// .unshift()
// El método unshift() agrega uno o más elementos al inicio del array,
// y devuelve la nueva longitud del array.

// const alumnos = ["Nati", "Lauti", "Rocio", "Joaco", "Santi"];
// console.log(alumnos);

// alumnos.unshift("Ivan", "Jorge", "Nadia", "Agustin Ibarrola");

// console.log(alumnos);

// .forEach
// El método forEach() ejecuta la función indicada
//  una vez por cada elemento del array.

// const alumnos = ["Ailen", "Agus", "Ariel", "Gabi", "Santi"];

// alumnos.forEach((nombre) => {
//     console.log(`Hola soy ${nombre} y soy crack en js`);
//     console.log("No mentira");
//   });

// const numeros = [1, 2, 3, 4, 5];

// let arrNuevo = [];

// numeros.forEach((numero) => arrNuevo.push(numero * 2));

// console.log(numeros);
// console.log(arrNuevo);

// .map()
// El método map() crea un nuevo array con los resultados de la llamada a la
// función indicada aplicados a cada uno de sus elementos.
// IMPORTANTE: CREA UN ARRAY NUEVO!!!!!!!!

// const numerosDuplicados = numeros.map((numero) => numero * 2);

// console.log(numerosDuplicados);
// console.log(numeros);

// const arrayObjetos = [
//   { id: 1, nombre: "Ronaldo" },
//   { id: 2, nombre: "Messi" },
//   { id: 3, nombre: "Mbappe" },
// ];

// const nombres = arrayObjetos.map((objeto) => objeto.id);

// console.log(nombres);

// .slice()
// El método slice() devuelve una copia de una parte del array
//  dentro de un nuevo array empezando por inicio hasta fin (fin no incluido).
//  El array original no se modificará.

// const numeros = [1, 2, 3, 4, 5];

// let arrayCortado = numeros.slice(0);
// let arrayCortado1 = numeros.slice(1, 3);
// let arrayCortado2 = numeros.slice(1, 8);
// let arrayCortado3 = numeros.slice(-4);
// let arrayCortado4 = numeros.slice(2, -1);

// console.log(arrayCortado2);
// console.log(numeros);

// .splice()
// El método splice() cambia el contenido de un array
//  eliminando elementos existentes y/o agregando nuevos elementos.
// MODIFICA EL ARRAY ORIGINAL, elimina elementos o agrega
//  elementos al array original.

const numeros = [1, 2, 3, 4, 5];

// .splice(indiceDesde, cuantosBorrar, queAgregar)

// numeros.splice(0, 2, 17, 18, 19);
// numeros.splice(2, 2, 17, 18, 19);
// numeros.splice(2, 0, 11, 12, 13);

console.log(numeros);
