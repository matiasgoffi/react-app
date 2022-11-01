import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CheckList } from './CheckList';

const description = {
    name: 'Matias',
    age: '31',
    country: 'Argentina'
}


const backgoroundColor = {
    className: 'green-background',
}

export const FirstApp = ({title}) => {
    

  return (
    <div>
    <h1 className={backgoroundColor.className}>{ title }</h1>
    <Link to='/getpokemon'>get pokemon!</Link>
    <br></br>
    <hr></hr>
    <br></br>
    <h2>Technologies:</h2>
    <CheckList />
    <h2 className={backgoroundColor.className}>Description</h2>
    <ul >
        <li>Name: { description.name }</li>
        <li>Age: { description.age }</li>
        <li>Country: { description.country }</li>
    </ul>
    </div>
  )
}

FirstApp.propTypes = {
 title: PropTypes.string.isRequired, 
}

FirstApp.defaultProps = {
    title: 'App React js',
}