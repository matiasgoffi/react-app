import React from 'react';
import PropTypes from 'prop-types';

// const tecnologies = [ 'HTML5', 'CSS3', 'JavaScript', 'ReactJs',  ];
const description = {
    name: 'Matias',
    age: '31',
    country: 'Argentina'

}

export const FirstApp = ({title, age}) => {
    

  return (
    <>
    <h1>{ title }</h1>
    <p>tecnologies: </p>
    <h2>Description</h2>
    <ul>
        <li>Name: { description.name }</li>
        <li>Age: { age }</li>
        <li>COuntry: { description.country }</li>
    </ul>
    </>
  )
}

FirstApp.propTypes = {
 title: PropTypes.string.isRequired, 
}

FirstApp.defaultProps = {
    title: 33,
}