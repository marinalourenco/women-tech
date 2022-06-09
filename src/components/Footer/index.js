import React from 'react';
import logoWomen from '../../assets/images/logoWomen.png'
import "./styles.css"

// import { Container } from './styles';

function Footer() {
  return(
    <footer>
      <div>
      <img src={logoWomen} alt="logo"/>

      </div>
      
      <span>
      © 2022 women tech - Todos os direitos são de vocês
      </span> 
    </footer>
  );
}

export default Footer;