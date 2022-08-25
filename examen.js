//Variables(3) Traduce a código JavaScript las variables del ejemplo anterior

let Name = "Azul";
let lastName = "Petrocelli";
let userName = "Azul Petrocelli";
let age = 19;
let email = "azulpetrocelli81@gmail.com";
let adult = true;
let savedMoney = 20000;
let debts = 7000;

//Variables(4) Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior
let fullName = Name + lastName;
let trueMoney = savedMoney - debts;

//Funciones(2) Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

function printName1(nombre, apellido, apodo) {
  let completeName = nombre + " " + apellido;
  let nickname = apodo;
  console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
};

//o sino podemos hacer 
function printName2(nombre, apellido, apodo) {
  return "Mi nombre es " + nombre + " " + apellido + ", pero prefiero que me digas " + apodo + ".";
};


printName2("Azul", "Petrocelli", "Azu");
printName2("Azul", "Petrocelli", "Azu");

//Condicionales(2) Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
     case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == "Basic"){
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert"){
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == "ExpertPlus"){
  console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
  console.log("Solo puedes tomar los cursos gratis");
}

//Condicionales(3) Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

let mySuscription = "Expert";

let suscripcion = [
  "Free",
  "Basic",
  "Expert",
  "ExpertPlus",
];

let mensaje = [
  "Solo puedes tomar los cursos gratis",
  "Puedes tomar casi todos los cursos de Platzi durante un mes",
  "Puedes tomar casi todos los cursos de Platzi durante un año",
  "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
];

for (let i = 0; suscripcion.length > i ;i++) {
  if ( mySuscription == suscripcion[i]) {
    console.log(`Estas suscrito al plan ${suscripcion[i]} en el cual ${mensaje[i]}`)
  }
}

//Esta es otra forma de hacer el ejercicio condicionales(3) mas sencilla

const suscripciones = {
  Free: "Solo puedes tomar los cursos gratis",
  Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
  Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
  ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
}

function tipoDeSuscripcion (suscripcion) {
  if (suscripciones[suscripcion]) {
    console.log(suscripciones[suscripcion]);
  } else {
    console.warn("Este tipo de suscripcion no existe");
  }
}

tipoDeSuscripcion("Free");

//Ciclos(2) Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

let i = 0;
while (i < 5) {
  i++;
  console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let x = 10;
while (x >= 2) {
  x--;
  console.log("El valor de i es: " + x);
}

//Ciclos(3) Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

let numero1 = 2;
let numero2 = 2;
let result = prompt(`¿Cuanto es ${numero1} + ${numero2}?`);

if (result == (numero1 + numero2)) {
  alert("CORRECTO!!");
} else {
  alert("INCORRECTO!!");
}

//Listas(2) Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
let myArray = [
  "valor1",
  "valor2",
  "valor3",
  "valor4",
  "valor5",
  "valor6",
];

recibirArray = (array) => {
  console.log("El primer valor del array ingresado es " + array[0]);
};

recibirArray(myArray);

//Listas(3) Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

let otroArray = [
  "valor1",
  "valor2",
  "valor3",
  "valor4",
  "valor5",
  "valor6",
];

imprimirTodosLosArrays = (array) => {
  console.log("Los valores del array son:")
  for (let i= 0; array.length > i; i++) {
    console.log(array[i])
  }
}

imprimirTodosLosArrays(otroArray);

//Listas(4) Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

let auto = {
  marca: "Toyota",
  patente: "XDE235",
  color: "Rojo",
}

readObject = (object) => {
  for (let key in object) {
    console.log(object[key]);
  };
};

readObject(auto)