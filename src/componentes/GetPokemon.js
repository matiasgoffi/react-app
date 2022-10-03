// import { Container } from "@mui/system";
// import React from "react";


export const GetPokemon = async() => {
  
    const url = `https://pokeapi.co/api/v2/pokemon`
    const resp = await fetch( url );
    const { results } = await resp.json();
    
    const pokemon = results.map( img => ({
         name: img.name,
        url: img.url,

    }));

//     return (
        
//             <h1>
//                 si llego a leer este msje, lo lograste! le estas pegando a una api por tu cuenta!.
//             {/* { pokemon[0].name } */}
//             </h1>
        
  
// )

}
