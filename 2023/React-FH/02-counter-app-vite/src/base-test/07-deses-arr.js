

const personajes = ['Patri','Ari','Moe'];
const [ , , p3 ] = personajes;
console.log( p3 );


const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo(); 
console.log(letras, numeros);


const usState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hello World') } ];
}

const [ nombre, setNombre ] = usState( 'Patri' );

console.log( nombre );
setNombre();





