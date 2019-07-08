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

