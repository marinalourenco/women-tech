import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import './styles.css';
import { useWomen } from '../../../hooks/WomenProvider'
import Container from '../../Container';
import MaryContent from '../../MaryContent';

function Mary() {
  const { womenList } = useWomen()
  return (
    <React.Fragment>
      <Header women={womenList}/>
    <Container>
     <MaryContent /> 
    </Container>
    <Footer/>
    </React.Fragment>
  );
}

export default Mary;