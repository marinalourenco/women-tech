import React, { useMemo } from 'react';
import './styles.css'

function Banners(props) {
  console.log(props)
  return (
    <main className="banners-container">
      {props.women.map((woman)=>(
        <div className="banner-impar">
        <img src={require(`../../assets/images/${woman.image}_01.png`)} alt={woman.image}/>
        </div>
      ))}
    </main>
  );
}

export default Banners;