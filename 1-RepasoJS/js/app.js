// crear variables

// Variables con var
var aprendiendoJS; 
var aprendiendoJS = "Jorge";
console.log(aprendiendoJS);

// Variables con const

const aprendiendoJSCONST = "Jorge DEV";

console.log(aprendiendoJSCONST);

// Variables con let

let aprendiendoJSLET;
aprendiendoJSLET = "JorgeDEV";
console.log(aprendiendoJSLET);

// Scope

var musica = "Rock";

if (musica) {
    var musica = "Mola";
    console.log("dentro del if: ", musica);
}

console.log('Fuera del if; ', musica);

// Scope con let

let musica1 = "Rock";

if (musica) {
    let musica1 = "Mola";
    console.log("dentro del if: ", musica1);
}

console.log('Fuera del if; ', musica1);

// Template Strings

const nombre = "Jorge";
const trabajo = "Desarrollador Web";

console.log('Nombre: ' + nombre + ', Trabajo: ' + trabajo);
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

// Concatenar con múltiples lineas

const contenedorApp = document.querySelector('#app');

let html = '<ul>' + 
                '<li> Nombre: ' + nombre + '</li>' +
                '<li> Trabajo: ' + trabajo + '</li>' +
            '</ul>';

let htmlApp = `<ul>
                <li>Nombre: ${nombre}</li>
                <li>Nombre: ${trabajo}</li>
            </ul>
            `;

contenedorApp.innerHTML = html;
contenedorApp.innerHTML = htmlApp;

// Creando una función

// Function Declaration

function saludar(nombre) {
    console.log('Bienvenido: ' + nombre);
}

saludar();

// Function expression

const cliente = function (nombreCliente) {
    console.log('Mostrando el nombre del cliente: ' + nombreCliente);
}

cliente('Jorge');

// Parametros por default en las funciones

function actividad(nombre = 'Javi', actividad = 'Aprendiendo Javascript') {
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
    
}

actividad('Jorge', 'Aprendiendo Javascript');
actividad('Patri', 'Aprendiendo Javascript');
actividad('Francisco');

// Arrow Functions

let viajando = (destino, duracion) => {
    return `Viajando a la ciudad de: ${destino} durante ${duracion}`;
}

let viaje;
viaje = viajando('Paris');
viaje = viajando('Paris', '10 días');

console.log(viaje);

// Objetos


// Object literal

const persona1 = {
    nombre: 'Jorge',
    profesion: 'Web Developer',
    edad: '38',
}

const persona2 = {
    nombre: 'Jorge',
    profesion: 'Web Developer',
    edad: '38',
}

console.log(persona1);
console.log(persona2);

// Object constructor

function Tarea (nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

const tarea1 = new Tarea ('Aprender Javascript', 'Urgente');
const tarea2 = new Tarea ('Aprender PHP', 'Urgente');
const tarea3 = new Tarea ('Aprender React', 'Urgente');
const tarea4 = new Tarea ('Aprender Java', 'Urgente');

console.log(tarea1);
console.log(tarea2);
console.log(tarea3);
console.log(tarea4);


// Prototypes

function Cosas (nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

Cosas.prototype.mostrarInformacionCosas = function() {
    return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
}

const cosas1 = new Cosas('Aprendiendo Javascript', 'Urgentísimo');
const cosas2 = new Cosas('Aprendiendo React', 'Urgentísimo');


console.log(cosas1.mostrarInformacionCosas());
console.log(cosas2.mostrarInformacionCosas());


// Destructuring de objetos

const aprendiendoJavascript = {
    version: 'ES6+',
    frameworks: ['React', 'VueJS', 'AngularJS']
}

console.log(aprendiendoJavascript);