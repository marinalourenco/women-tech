import React from 'react';
import Header from '../../Header';
import Banners from '../../Banners';
import Footer from '../../Footer';
import './styles.css';
import { useWomen } from '../../../hooks/WomenProvider'
import Container from '../../Container';

function Home() {
  const { womenList } = useWomen()
  return (
    <Container>
      <Header women={womenList}/>
      <Banners women={womenList} />
      <Footer/>
    </Container>
  );
}

export default Home;