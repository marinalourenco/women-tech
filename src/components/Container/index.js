import React from 'react';
import "./styles.css"

// import { Container } from './styles';

function Container({children}) {
  return (
  <div className='container'>
    {children}
  </div>
  );
}

export default Container;