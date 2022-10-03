import React  from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ({ value }) => {

    //useState
    const [counter, setCounter] = useState(value)
    
    //onClick Event
    const handleAdd = () => {
        // console.log(event)
        //setCounter ( (c) => (c+1))
        setCounter( counter + 1)
    }

    const handleSubstract = () => {
        // console.log(event)
        //setCounter ( (c) => (c+1))
        setCounter( counter - 1)
    }

    const handleReset = () => {
        // console.log(event)
        //setCounter ( (c) => (c+1))
        setCounter( value )
    }

  return (
    <>
    <h1>CounterApp</h1>
    <h2> { counter  } </h2>

    <button onClick={  handleAdd }>
        +1
    </button>
    <button onClick={ handleSubstract }>
        -1
    </button>
    <button onClick={ handleReset }>
        Reset
    </button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired, 
   }
   
   CounterApp.defaultProps = {
       value: 0,
   }