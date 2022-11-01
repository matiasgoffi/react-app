import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Reloj } from "./Reloj";
import { Link } from "react-router-dom";


export const GetPokemon = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=10").then((resp) => {
      setPokemon(resp.data.results.map((poke) => (poke.url, poke.name))).catch(
        (err) => {
          console.log(err);
        }
      );
    });
  }, []);

  const [inputValue, setInputValue] = useState("");

  const handleInput = ({ target }) => {
    setInputValue(target.value);
  };

  const mostrarInput = () => {
    console.log(inputValue)
  };

  const mostrarPokemon = pokemon.includes(inputValue);
 
  const backgoroundColor = {
    className: 'green-background',
}

 

  return (
    <div>
      <h1 className={backgoroundColor.className}>Get Pokemon!</h1>
      <Link to='/firstapp'>First App?</Link>
      <br></br>
      <hr></hr>
      <br></br>
      <form onSubmit={mostrarInput}>
        <input
          type="text"
          name="inputValue"
          placeholder="buscar pokemon"
          value={inputValue}
          onChange={handleInput}
        ></input>
      </form>
      {mostrarPokemon 
        ? <div>{inputValue}</div>
        : <div></div>
      }
      {inputValue.length > 5 && <div>tu pokemon es {inputValue}</div>}
      <Reloj Date= {Date()}/>
    </div>
  );
};
