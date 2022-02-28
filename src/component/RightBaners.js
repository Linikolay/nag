
import React, { Component, lazy } from 'react';
import { Container, Row, Col, NavLink } from 'react-bootstrap';

import mini1 from '../img/mini1.png';
import mini2 from '../img/mini2.png';
import banner from '../img/banner.png';
import partner from '../img/partner.png';

import Slider from "react-slick";

import back from "../img/back.svg";

import next1 from "../img/next1.svg";
import backp from "../img/backp.svg";

import nextp from "../img/nextp.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css"


class RightBaners extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);

        this.next1 = this.next1.bind(this);
        this.previous1 = this.previous1.bind(this);

    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
        console.log("fdsfjsdhf")
    }


    next1() {
        this.slider1.slickNext();
    }
    previous1() {
        this.slider1.slickPrev();
        console.log("fdsfjsdhf")
    }


    render() {
        const settings1 = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            // autoplay: true,
            // speed: 2000,
            slidesToScroll: 1,

       

        }
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            // autoplay: true,
          
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

        };
        return (
            <div className="page-wrap">
                <div className="main-body">


                    <Container>
                        <Row>
                            <Col className='centerbanners alignbaner maincatalogs' xs={8}>



                                <button className="buttonleft" onClick={this.previous1}>
                                    <img className='imgback' src={back}></img>
                                </button>
                                <button className="buttonright" onClick={this.next1}>
                                    <img className='imgnext' src={next1}></img>
                                </button>



                                <Slider ref={c => (this.slider1 = c)}{...settings}>
                                    <div className='mainnon'>
                                        <img  src={banner} />
                                    </div>
                                    <div>
                                        <img className='banerimg' src={banner} />
                                    </div>
                                    <div>
                                        <img className='banerimg' src={banner} />
                                    </div>
                                    <div>
                                        <img className='banerimg' src={banner} />
                                    </div>
                                    <div>
                                        <img className='banerimg' src={banner} />
                                    </div>
                                    <div>
                                        <img className='banerimg' src={banner} />
                                    </div>
                                    <div>
                                        <img className='banerimg' src={banner} />
                                    </div>
                                    <div>
                                        <img className='banerimg' src={banner} />
                                    </div>
                                    <div>
                                        <img className='banerimg' src={banner} />
                                    </div>
                                </Slider>
                            </Col>
                            <Col className='centerbanners centerbannersmini' xs={4}>
                                <img className='mini1' src={mini1} />
                                <img className='mini2' src={mini2} />
                            </Col>


                            <Col className='' xs={12}>
<p className='nasvibirat'>Нас выбирают</p>
                            </Col>
                            <Col className='centerbanners alignbaner mainmalabs' xs={12}>



                                <button className="buttonleft buttonleft22" onClick={this.previous}>
                                    <img className='imgback ' src={backp}></img>
                                </button>
                                <button className="buttonright buttonleft33" onClick={this.next}>
                                    <img className='imgnext' src={nextp}></img>
                                </button>



                                <Slider className='' ref={c => (this.slider = c)}{...settings1}>
                                    <div className='banerimg'>
                                        <img className='partnerbanners' src={partner} />
                                    </div>
                                    <div className='banerimg'>
                                        <img className='partnerbanners' src={partner} />
                                    </div>
                                    <div className='banerimg'>
                                        <img className='partnerbanners' src={partner} />
                                    </div >
                                    <div className='banerimg'>
                                        <img className='partnerbanners' src={partner} />
                                    </div>
                                    <div className='banerimg'>
                                        <img className='partnerbanners' src={partner} />
                                    </div>
                                    <div className='banerimg'>
                                        <img className='partnerbanners' src={partner} />
                                    </div>
                                    <div className='banerimg'> 
                                        <img className='partnerbanners' src={partner} />
                                    </div>
                                    <div className='banerimg'>
                                        <img className='partnerbanners' src={partner} />
                                    </div>
                                    <div className='banerimg'>
                                        <img className='partnerbanners' src={partner} />
                                    </div>
                                </Slider>
                            </Col>
                        </Row>

                    </Container>




                </div>


            </div>
        )
    }
}

export default RightBaners;
