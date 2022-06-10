import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import './styles.css';
import { useWomen } from '../../../hooks/WomenProvider'
import Container from '../../Container';
import AdaContent from '../../AdaContent';


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