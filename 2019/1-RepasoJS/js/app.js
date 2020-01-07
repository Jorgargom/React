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
    version: {
        nueva: 'ES6+',
        antigua: 'ES5'
},
    frameworks: ['React', 'VueJS', 'AngularJS']
}

console.log(aprendiendoJavascript);

// Destructuring es extraer valores de un objeto
let {nueva} = aprendiendoJavascript.version;
console.log(nueva);


//Object literal enhancement

const band = "ACDC";
const genero = 'Rock';
const canciones = ['cancion1', 'Cancion2', 'Cancion3'];

const ACDC = {band,genero,canciones};

console.log(ACDC);

// Métodos o funciones

const person = {
    nombre: 'Jorge',
    trabajo: 'Web developer',
    edad: '38',
    musicaRock: true,
    mostrarInformacion () {
        console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`)
    }
}

person.mostrarInformacion();


// Areglos y .map

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

const appContenedor = document.querySelector('#app');

let html5='';
carrito.forEach(producto => {
    html5 += `<li>${producto}</li>`;
});

appContenedor.innerHTML = html5;

// .map

carro = ['Producto 1', 'Producto 2', 'Producto 3'];

carro.map(producto => {
    return 'El producto es ' + producto;
});

console.log(Object.keys(person));


// Sprear operator

let lenguajes = ['Javascript', 'PHP', 'Python'];
let frameworks = ['Angular', 'Laravel', 'Django'];

// unir los arreglos en 1 solo

let combinacion = [...lenguajes,...frameworks];

console.log(combinacion);

let [ultimo] = [...lenguajes].reverse();

console.log(ultimo);

function suma(a,b,c) {
    console.log(a+b+c);
}

const numeros = [1,2,3];

suma(...numeros);


// Metodos en arreglos

const personajes = [
    {nombre: 'Jorge', edad: 38, aprendiendo: 'Javascript'},
    {nombre: 'Patri', edad: 28, aprendiendo: 'PHP'},
    {nombre: 'Lucas', edad: 28, aprendiendo: 'Java'},
    {nombre: 'Maria', edad: 24, aprendiendo: 'Python'},
    {nombre: 'Julia', edad: 36, aprendiendo: 'ReactJS'},
];

console.log(personajes);

// Mayores de 30 años

const mayores = personajes.filter(personaje => {
    return personaje.edad > 30;
})

console.log(mayores);

// Que aprende Patri y su edad

const patri = personajes.find( persona => {
    return persona.nombre === 'Patri';
});

console.log('Patri está aprendiendo: ' + patri.aprendiendo + ' a la edad de ' + patri.edad + ' años');

let total = personajes.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0);

console.log(total / 5);

// Promises

const aplicarDescuento = new Promise((resolve, reject) => {
    setTimeout(() => {
        let descuento = true;
        if (descuento) {
            resolve('Descuento aplicado!');
        } else {
            reject('No se pudo aplicar el descuento');
        }
    }, 3000);
});

aplicarDescuento.then(resultado => {
    console.log(resultado);
});

// Promise con ajax

const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
    //pasar la cantidad a la api
    const api = `https://randomuser.me/api/`;
    // llamado a ajax
    const xhr = new XMLHttpRequest();
    // abrimos la conexion
    xhr.open('GET', api, true);
    xhr.onload = () => {
        if(xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).results);
        } else {
            reject(Error(xhr.statusText));
        }
    }
    // opcional (on error)
    /* xhr.oneror = (error) => reject(error); */
    // send
    xhr.send()
});

descargarUsuarios(10)
    .then(
        miembros => imprimirHTML(miembros),
       /*  error = console.error(
            new Error('Hubo un error' + error)
        )  */
         
    )

function imprimirHTML(usuarios) {
    let html = '';
    usuarios.forEach(usuario => {
       html5 += `
        <li>
            Nombre: ${usuario.name.first} ${usuario.name.last}
            País: ${usuario.nat}
            Imagen:
                <img src="${usuario.picture.medium}">
        </li>
       `;
        
    });
}

const contenedoresApp = document.querySelector('#app1');
contenedoresApp.innerHTML = html5;

// Escribir clases

class Tareas {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    mostrar () {
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
        
    }
}


class ComprasPendientes extends Tareas {
    constructor (nombre, prioridad, cantidad) {
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }
}
// crear los objetos

let tareas1 = new Tareas ('Aprender Javascript', 'Alta');
let tareas2 = new Tareas ('ser un master Javascript', 'Alta');
let tareas3 = new Tareas ('repasar Javascript', 'Media');
let tareas4 = new Tareas ('Ninja Javascript', 'Baja');

console.log(tareas1.mostrar());
console.log(tareas2.mostrar());
console.log(tareas3.mostrar());
console.log(tareas4.mostrar());


let compra1 = new ComprasPendientes ('Jabon', 'Urgente', ' 2');

console.log(compra1.mostrar());