
const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hello World`;


console.log( saludar2('Ari') );
console.log( saludar3('Patri') );
console.log( saludar4() );


const getUser = () => ({
        uid: 'ABC123',
        username: 'Jor502'
});


const user = getUser();
console.log(user);

// Task
const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo );



