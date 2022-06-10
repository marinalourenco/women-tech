import React, { useMemo } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Link } from "react-router-dom"
import Box from '@mui/material/Box';
import './styles.css'


function Banners(props) {
  console.log(props)
  return (
    <main className="banners-container">
         <Box sx={{ width: "100%", height: "auto", marginBottom: 10, }}>
          <ImageList cols={3} gap={8}>
          {props.women.map((woman)=>(
            <Link to={`/${woman.image}`} key={woman.image}>
            <ImageListItem>
            <img
              className="image-woman"
              src={require(`../../assets/images/${woman.image}_01.png`)}
              alt={woman.image}
              loading="lazy"
            />
            <ImageListItemBar  title={woman.name} subtitle={woman.desc} />
           
          </ImageListItem>
          </Link>
          ))}
          </ImageList>
        </Box>
    </main>
  );
}

export default Banners;