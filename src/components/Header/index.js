import React from 'react';
import logoWomen from '../../assets/images/logoWomen.png'
import "./styles.css"

function Header(props) {
  return (
    <header> 
      <div className='logo-area'>
        <img src={logoWomen} alt="Logo Women" />
      </div>
      <nav className='menu'>
        <ul>
          {props.women.map(woman =>(
             <li key={woman.id}>
              <a href='/'>
                {woman.name}
              </a>
           </li>
          ))}
        </ul>
      </nav>
    </header>
    );
}

export default Header;

