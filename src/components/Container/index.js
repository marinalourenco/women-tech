import React from 'react';
import {Container as ComponentContainer} from '@mui/material';
import "./styles.css"

// import { Container } from './styles';

function Container({children}) {
  return (
    <ComponentContainer className="container"maxWidth="lg" maxHeight="lg">
    {children}
    </ComponentContainer>
  );
}

export default Container;