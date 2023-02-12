import { getSaludo } from "../../base-test/02-template-string";

describe('Test 02-template-string.js', () => { 
    
    test('getStaludo debe devolver "Hola Jorge"', () => { 

        const name = "Jorge";
        const message = getSaludo(name);

    expect( message ).toBe(`Hola ${ name }`)
    })



})