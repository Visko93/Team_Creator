import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
// const CreateItens = inputArray => {
//   inputArray.map((item, index) => (
//       <li key={index}className="list__item">{item}</li>
//   ))
// }

export function CustomList({itens, ...props}) {
  if (!itens[0].length > 2) {
    return (
      <ul className='list' {...props}>
        {itens.map((item, index) => (
        <li key={index} className='list__item'>{item}</li>
    ))}
      </ul>
    )
  }
  return (
    <ul className='list' {...props}>
      {itens.map((item, index) => (
      <li key={index} className='list__item'>
        <p className="item__name">Name: {item.name}</p>
        <p className="item__age">Age: {item.age}</p>
        <p className="item__nac">Nacionality: {item.nacionality}</p>
      </li>
  ))}
    </ul>
  )
}
