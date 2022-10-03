test( 'esta prueba no debe fallar', () => {
            if ( 1 === 0) {
                throw new Error ('you cant divide by 0')
            }
})