import { getUser, getUsuarioActivo } from "../../base-test/05-funciones";

describe('Test 02-template-string.js', () => { 
    
    test('getUser debe devolver un objeto', () => { 

        const testUser = {
            uid: 'ABC123',
            username: 'Jor502'
        };

        const user = getUser();

        expect( testUser ).toEqual(user)

        })

        test('getUsuarioActivo debe devolver un objeto', () => { 

            const name = "Jorge";
            const user = getUsuarioActivo(name);

        
            expect( user ).toStrictEqual({
                uid: 'ABC567',
                username: name
            });


            })
    

})