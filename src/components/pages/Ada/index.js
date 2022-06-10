import React from 'react';
import Header from '../../Header';
import Banners from '../../Banners';
import Footer from '../../Footer';
import './styles.css';
import { useWomen } from '../../../hooks/WomenProvider'
import Container from '../../Container';
import AdaContent from '../../AdaContent';
import GraceContent from '../../GraceContent';

function Ada() {
  const { womenList } = useWomen()
  return (
    <React.Fragment>
      <Header women={womenList}/>
    <Container>
      <AdaContent />
    </Container>
    <Footer/>
    </React.Fragment>
  );
}

export default Ada;