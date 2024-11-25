import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Images from '../../constants/images';

function Login() {

  return (
    <>
      <section className='login-page'>
        <Container>
          <Row>
            <Col xl={6}>
              <div className='login-form'>
                  <img src={Images.logo} alt="app-logo" />
              </div>
            </Col>
            <Col xl={6}>
                 
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Login