import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ( { category }) => {

const { images, isLoading } = useFetchGifs( category )


  return (
    <>
    <h3>{category}</h3>
    
    {
      isLoading && (<h2>Cargando...</h2>) //si esta cargando en true ejecuto la tag h2
    }
    <div className="card-grid">
    {
         images.map( ( image ) => (
            <GifItem 
              key={ image.id } 
              title= { image.title }
              url= { image.url }
              // { ...image } se podria tmb hacer esto para esparcir todas las propr que trae image.
              />
         ))
    
    }
    </div>
    </>
  )
}
