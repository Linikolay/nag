
import React, { Component, lazy } from 'react';
import { Container, Row, Col, NavLink } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import aboimg from '../img/aboimg.png';
import logoser from '../img/logoser.svg';
import partner from '../img/partner.png';

import a from './para/a.png';
import aa from './para/aa.png';
import aaa from './para/aaa.png';
import aaaa from './para/aaaa.png';
import aaaaa from './para/aaaaa.png';
import aaaaaa from './para/aaaaaa.png';
import aaaaaaa from './para/aaaaaaa.png';
import aaaaaaaa from './para/aaaaaaaa.png';
import aaaaaaaaa from './para/aaaaaaaaa.png';
import aaaaaaaaaa from './para/aaaaaaaaaa.png';
import aaaaaaaaaaa from './para/aaaaaaaaaaa.png';
import aaaaaaaaaaaa from './para/aaaaaaaaaaa.png';
import aaaaaaaaaaaaa from './para/aaaaaaaaaaaa.png';


import "bootstrap/dist/css/bootstrap.min.css"



class Parther extends Component {
    constructor(props) {
        super()
        this.state = {
            sle: "",
        }
    }
    render() {
        return (
            <div className="page-wrap">
                <div className="main-body">


                    <Container className='controlerspadr'>
                        <Row>
                            <p className='tetilepatrhners'>Наши партнеры</p>
                            <Col className='' xs={12}>
                                
                                <div className='imgparmauioage'>
                                    <img className='parthmain' src={a}></img>
                                </div>
                                <div className='imgparmauioage'>
                                    <img className='parthmain' src={aa}></img>
                                </div>
                                <div className='imgparmauioage'>
                                    <img className='parthmain' src={aaa}></img>
                                </div>
                                <div className='imgparmauioage'>
                                    <img className='parthmain' src={aaaa}></img>
                                </div>
                                <div className='imgparmauioage'>
                                    <img className='parthmain' src={aaaaa}></img>
                                </div>
                                <div className='imgparmauioage'>
                                    <img className='parthmain' src={aaaaaa}></img>
                                </div>


                                <div className='imgparmauioage'>
                                    <img className='parthmain' src={aaaaaaa}></img>
                                </div>


                                <div className='imgparmauioage'>
                                    <img className='parthmain' src={aaaaaaaa}></img>
                                </div>


                                <div className='imgparmauioage'>
                                    <img className='parthmain' src={aaaaaaaaa}></img>
                                </div>


                           


                                <div className='imgparmauioage'>
                                    <img className='parthmain' src={aaaaaaaaaaa}></img>
                                </div>


                            
                            </Col>



                        </Row>

                    </Container>


                </div></div>
        )
    }
}

export default Parther;
