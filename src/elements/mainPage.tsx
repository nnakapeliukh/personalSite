import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
// import { Image } from 'react-bootstrap';
// import faceRound from '../assets/faceRound.png'
import mountainBgd from '../assets/mountainEnhanced.jpg'

function MainPage() {
  return (
    <Container className='hero route bg-image min-vw-100'
      style={{
        backgroundImage: `url(${mountainBgd})`,
        height: '100vh',
        width: '100%',
        backgroundAttachment: 'fixed',
        backgroundPosition: '50% 50%'
      }}
    >
      <Container>
        <Row>        
          <Col xs
            style={{ height: '100vh' }}
          >
            <p
              style={{
                height: '40%',
                paddingTop: '30%',
                textShadow: '1px 1px 11px #000',
                color: 'white',
                fontFamily: 'arial, serif',
                // textShadow: '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff',
              }}
              className='display-2 fw-bold lh-lg text-center'>
              Hi, I&apos;m Nazar
            </p>
            <p
              style={{
                height: '30%',
                textShadow: '1px 1px 11px #000',
                color: 'white',
                fontFamily: 'arial, serif',
              }}
              className='display-6 align-left lh-lg text-center'>
              and I like challenge
            </p>
          </Col>
          <Col xs={12} md>
            {/* <Image
              className='bg-dark float-end '
              width='300px'
              src={faceRound}
              roundedCircle
              img-fluid
            /> */}
          </Col>
        </Row>      
      </Container>      
    </Container>
  );
}

export default MainPage;