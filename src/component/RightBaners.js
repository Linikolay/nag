
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

import a from "../part/1.png";
import aa from "../part/2.jpeg";
import aaa from "../part/3.jpg";
import aaaa from "../part/4.png";
import aaaaa from "../part/5.png";
import aaaaaa from "../part/6.png";
import aaaaaaas from "../part/7.png";
import aaaaaaa from "../part/8.jpg";
import aaaaaaaaas from "../part/9.png";
import aaaaaaaaaaa from "../part/10.png";


import nextp from "../img/nextp.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css"




const IMAGE = [
    {src: a},
    {src: aa},
    {src: aaa},
    {src: aaaa},
    {src: aaaaa},
    {src: aaaaaa},
    {src: aaaaaaa},
    {src: aaaaaaaaas},
    {src: aaaaaaas},

    {src: aaaaaaaaaaa},
]
class RightBaners extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoad: false,
            isLoaded: false,
            part: false
        }

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
    updateWindowDimensions = () => {
        { console.log(window.innerWidth) }
        if (window.innerWidth <= 1199) {
            this.setState({
                part: true
            })
        } else {
            this.setState({
                part: false
            })
        }
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    componentDidMount() {
              if (window.innerWidth <= 1199) {
            this.setState({
                part: true
            })
        } else {
            this.setState({
                part: false
            })
        }
        window.addEventListener('resize', this.updateWindowDimensions);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

            })
        };
        fetch('https://new.itmag.uz/auth/getbaner', requestOptions)
            .then((response) => response.json())

            .then(data => {
                console.log(data)
                this.setState({
                    main: data,
                    isLoad: true
                })
            }
            )


            .catch((error) => {
                console.error(error);
            });


        const requestOptions1 = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

            })
        };
        fetch('https://new.itmag.uz/auth/getParther', requestOptions1)
            .then((response) => response.json())

            .then(data => {
                console.log(data)

                this.setState({
                    parth: data,
                    isLoaded: true
                })
            }
            )


            .catch((error) => {
                console.error(error);
            });


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
        const { isLoad, isLoaded } = this.state

        if (!isLoad || !isLoaded) {
            return (
                <p></p>
            )
        } else {


            return (

                <div className="page-wrap">
                    <div className="main-body">


                        <Container>
                            <Row>
                                <Col className='centerbanners alignbaner maincatalogs' xs={12} sm={12} md={12} lg={12} xl={8} >



                                    <button className="le" onClick={this.previous1}>
                                        <img className='imgback' src={back}></img>
                                    </button>
                                    <button className="rg" onClick={this.next1}>
                                        <img className='imgnext' src={next1}></img>
                                    </button>


                                    {
                                        this.state.main.data.length > 0 && (

                                            <Slider ref={c => (this.slider1 = c)}{...settings}>


                                                {this.state.main.data.map((data) =>
                                                    <a href={data.url} className='mainnon img44444'>
                                                        <img src={data.icon} />
                                                    </a>
                                                )}


                                            </Slider>
                                        )
                                    }

                                </Col>
                     
                                    <Col className='centerbanners centerbannersmini mediaminicontainer' xs={1} sm={1} md={1} lg={12} xl={4}>
                                    <img className='mini1' src={mini1} />
                                    <img className='mini2' src={mini2} />
                                </Col>

                           
                                {this.state.part == false&&
                                (
                                    <Col className='' xs={12}>
                                    <p className='nasvibirat'>Нас выбирают</p>
                                </Col>

                                )}
 {this.state.part == false&&
                                (
                                    <Col className='centerbanners alignbaner mainmalabs' xs={1} sm={1} md={1} lg={12} xl={12}>



                                    <button className="mommomoo buttonleft buttonleft22" onClick={this.previous}>
                                        <img className='imgback ' src={backp}></img>
                                    </button>
                                    <button className="mommomoo buttonright buttonleft33" onClick={this.next}>
                                        <img className='imgnext' src={nextp}></img>
                                    </button>

                                    {
                                        this.state.main.data.length > 0 && (

                                            <Slider className='' ref={c => (this.slider = c)}{...settings1}>


                                                {IMAGE.map((data) =>
                                                    <a href={data.url} className='banerimg'>
                                                        <img className='partnerbanner miniparh' src={data.src} />
                                                    </a>
                                                )}


                                            </Slider>
                                        )
                                    }

                                </Col>
                                )}
                              
                                
                            </Row>

                        </Container>




                    </div>


                </div>
            )
        }
    }
}

export default RightBaners;

