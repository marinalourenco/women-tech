import React from 'react';
import Header from '../../Header';
import Banners from '../../Banners';
import Footer from '../../Footer';
import './styles.css';
import { useWomen } from '../../../hooks/WomenProvider'
import Container from '../../Container';
import GraceContent from '../../GraceContent';

function Grace() {
  const { womenList } = useWomen()
  return (
    <React.Fragment>
      <Header women={womenList}/>
    <Container>
      <GraceContent/>
    </Container>
    <Footer/>
    </React.Fragment>
  );
}

export default Grace;