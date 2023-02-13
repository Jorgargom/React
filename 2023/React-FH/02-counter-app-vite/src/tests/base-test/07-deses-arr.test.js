import { retornaArreglo } from "../../base-test/07-deses-arr.js";

describe('Test 07-deses-arr.js', () => { 
    
    test('retornaArreglo debe devolver un string y un número', () => { 

        const [ letters, numbers ] = retornaArreglo();
        //console.log(retorno);
        expect( letters ).toBe( `ABC` );
        expect( numbers ).toBe( 123 );

        expect( typeof letters ).toBe( 'string' );
        expect(typeof numbers ).toBe( 'number' );

        expect( letters ).toEqual( expect.any(String) );
        expect( numbers ).toEqual( expect.any(Number) );
    })



})