

describe('Test en <demo.test>', () => { 
    
    test('Esta prueba no debe fallar', () => { 
    
        // 1. Iniciacilización
    
        const message1 = "Hello world";
    
    
        // 2. Estímulo
    
        const message2 = message1.trim();
    
    
        // 3. Observar el comportamiento esperado
    
        expect ( message1 ).toBe( message2 );
    
    
    })
    
 })

