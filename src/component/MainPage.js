
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LeftCategory from './LeftCategory';
import RightBaners from './RightBaners'
import Popular from './Popular'
import logo from '../img/logo.svg';

import reg from '../img/reg.svg';
import cart from '../img/cart.svg';
import favorite from '../img/favorite.svg';
import  start from '../img/start.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class MainPage extends Component {
    render() {

        return (
            <div className="page-wrap">
                <div className="main-body">

       
                <Container>
  <Row>
    <Col className='leftsider' xs={3}><LeftCategory/></Col>
    <Col className='centerbanners' xs={9}>
<RightBaners/>
        
    </Col>
    <Col className='centerbanners' xs={12}>
<Popular/>
        
    </Col>
  </Row>

</Container>
                </div></div>
        )
    }
}

export default MainPage;
