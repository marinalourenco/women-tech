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
    <React.Fragment>
      <Header women={womenList}/>
    <Container>
      <Banners women={womenList} />
    </Container>
    <Footer/>
    </React.Fragment>
  );
}

export default Home;