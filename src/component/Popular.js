
import React, { Component } from 'react';
import { Container, Row, Col, NavLink } from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import mini1 from '../img/mini1.png';
import mini2 from '../img/mini2.png';
import banner from '../img/banner.png';
import partner from '../img/partner.png';

import Slider from "react-slick";

import back from "../img/back.svg";

import next1 from "../img/next1.svg";
import backp from "../img/backp.svg";

class Popular extends Component {
    constructor(props) {
        super()
        this.state = {
         sle: "",
        }
      }
    next1() {
        this.slider1.slickNext();
    }
    back() {
        this.slider1.slickPrev();
       
    }
    handleMouseEnter = (e) => {
e.target.classList.add('red')
        const sle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
          }
        this.setState({
            sle: sle
        })
    }
    handleOff = (e) => {
        console.log(e.target)
        e.target.classList.remove('red')

    }
    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            autoplay: false,
            speed: 2000,
            slidesToScroll: 1,

            appendDots: dots => (
                <div
                    style={{
                        // backgroundColor: "#ddd",
                        borderRadius: "10px",
                        padding: "10px",
                        position: "relative",
                        top: "-46px",
                    }}
                >
                    <ul style={{ margin: "0px" }}> {dots} </ul>
                </div>
            ),
            customPaging: i => (
                <div
                    style={{
                        width: "41px",
                        height: "2px",
                        background: "rgba(255, 255, 255, 0.06)",
                        border: "100px",
                    }}
                >

                </div>
            )

        }
        return (
            <div className="page-wrap">
                <div className="main-body">


                    <Container>
                        <Row>

                            <Col className='' xs={12}>

                                <span className='populartitle'> Популярные товары</span>


                                <div className='brnpop'>
                                    <button className="" onClick={this.previous}>
                                        <img className='imgback' src={back}></img>
                                    </button>
                                    <button className="" onClick={this.next}>
                                        <img className='imgnext' src={next1}></img>
                                    </button>
                                </div>
                            </Col>
                            <Col className='' xs={12}>


                            </Col>

                            <Col  xs={12}>
                                <Slider className='listmainpage' ref={c => (this.slider = c)}{...settings}>
                                    <div  id="1">
                                        <div  className='red' >
                                            <img className='partnerbanners' src={partner} />
                                        </div>

                                        <p className='eeee'>dslkfjsdkfjsdjflkdjsl</p>
                                    </div>
                                    <div id="2" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleOff}>

                                        <div id="2">
                                            <img className='partnerbanners' src={partner} />
                                        </div>
                                    </div>
                                    <div>
                                        <img className='partnerbanners' src={partner} />
                                    </div>
                                    <div>
                                        <img className='partnerbanners' src={partner} />
                                    </div>
                                    <div>
                                        <img className='partnerbanners' src={partner} />
                                    </div>
                                    <div>
                                        <img className='partnerbanners' src={partner} />
                                    </div>
                                    <div>
                                        <img className='partnerbanners' src={partner} />
                                    </div>
                                    <div>
                                        <img className='partnerbanners' src={partner} />
                                    </div>
                                    <div>
                                        <img className='partnerbanners' src={partner} />
                                    </div>
                                </Slider>

                            </Col>

                        </Row>

                    </Container>


                </div></div>
        )
    }
}

export default Popular;
