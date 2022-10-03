import React from 'react';
import { useState } from 'react';
import { AddCategory } from './componentes/AddCategory';
import { GifGrid } from './componentes/GifGrid';


export const GifExperApp = () => {
  
  const [categories, setCategories] = useState([ 'One Punch Man']);

  const onAddCategory = ( newCategory ) => {
    
    if ( categories.includes(newCategory) )return;

     setCategories( [newCategory,...categories]);
  }


    return (
    <>
    <h1>GiftExperApp</h1>
    <AddCategory 
      onNewCategory= { (value) => onAddCategory(value) }
    />
        {
         categories.map((category) => {
          
          return (
              <GifGrid 
                key= {category}
                category={category}
              />
          )
         }
         )
      }
    </>
  )
}
