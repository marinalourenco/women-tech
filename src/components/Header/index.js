import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import AppBar from '@mui/material/AppBar';
import logoWomen from '../../assets/images/logoWomen.png'
import "./styles.css"
import { Link, useLocation } from 'react-router-dom';

function Header(props) {
  const location = useLocation();
  return (
    <AppBar> 
      <div className='logo-area'>
        <Link to='/'>
          <img src={logoWomen} alt="Logo Women" />
        </Link>
      </div>
      <nav className='menu'>
        <ul>
          {props.women.map(woman =>(
             <li key={woman.id}>
              <Link 
                to={`/${woman.image}`} 
                className={location.pathname === `/${woman.image}` &&"active"}
              >
                {woman.name}
              </Link>
           </li>
          ))}
          {props.women.length === 0 &&  <Skeleton  width={500} height={50} animation="wave" />}
        </ul>
      </nav>
    </AppBar>
    );
}

export default Header;

