import React from 'react'
import { GetPokemon } from './GetPokemon'

export const PokemonGrid = ({pokemon}) => {
    
    GetPokemon(pokemon)

  return (
     <h1>
          si llego a leer este msje, lo lograste! le estas pegando a una api por tu cuenta!.       
          {/* { pokemon[0].name } */}
     </h1>
        
  )
}
