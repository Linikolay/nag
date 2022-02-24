
import React, { Component, lazy } from 'react';
import { Container, Row, Col, NavLink } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import mini1 from '../img/mini1.png';
import mini2 from '../img/mini2.png';
import banner from '../img/banner.png';
import routersimg from '../img/router.png';
import partner from '../img/partner.png';

import Slider from "react-slick";

import back from "../img/back.svg";
import backp from "../img/backp.svg";

import nextp from "../img/nextp.svg";
import next1 from "../img/next1.svg";

import cartbtn from "../img/cartbtn.svg";
import srav from "../img/sravbtn.svg";
import favorite from "../img/favorite.svg";
import "bootstrap/dist/css/bootstrap.min.css"
const CustomRightArrow = ({ onClick }) => {
    return <i className="custom-right-arrow" onClick={() => onClick()} />;
};

const CustomLeftArrow = ({ onClick }) => (
    <i onClick={() => onClick()} className="custom-left-arrow" />
);

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};



class NewProd extends Component {
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
            centerMode: true,
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


                    <Container className='controlerspadr'>
                        <Row>

                            <Col className='nopadd' xs={12}>

                                <span className='populartitle'> Популярные товары</span>


                                <div className='brnpop'>


                                    <button className='minn' onClick={() => {
                                        const nextSlide = this.Carousel.state.currentSlide - 1;
                                        this.Carousel.previous()
                                        this.Carousel.goToSlide(nextSlide)
                                    }}>
                                        <img src={backp}></img>

                                    </button>

                                    <button className='minn' onClick={() => {
                                        const nextSlide = this.Carousel.state.currentSlide + 1;
                                        this.Carousel.next()
                                        this.Carousel.goToSlide(nextSlide)
                                    }}><img src={nextp}></img></button>








                                </div>




                            </Col>
                   

                            <Col className='nopadd notanknew' xs={12}>
                                <Carousel infinite={true} ref={(el) => (this.Carousel = el)} arrows={false} responsive={responsive}>
                                    <div className='catageters' id="1">
                                        <div className='goruptopproducer'>
                                            <div className='new'>
                                                Новинка
                                            </div>


                                        </div>
                                        <div className='catevnuters'>
                                            <img className='routers' src={routersimg} />
                                            <p className='brandtextvers'>Ubiquiti
                                            </p>
                                            <p className='textrowproduct'>Wi-Fi марш рутизатор SNR-CPE-MD1.1
                                                Wi-Fi маршрутизатор SNR-CPE-MD1.1
                                            </p>
                                            <div className='groupelipse'>
                                                <div className='elipse'></div>
                                                <span className='elipsenals'>В наличии</span>
                                                <span className='elipseart'>Арт.: SNR-S1916-1GS</span>
                                            </div>
                                            <p className='titleboldcena'>1 740 000 сум</p>
                                            <div className='cartbtners'>

                                                <div className='btnaddcart'><img src={cartbtn}></img> Добавить</div>
                                                <div className='btnaddcartsrav'><img src={srav}></img></div>
                                                <div className='btnaddcartfavorite'><img src={favorite}></img></div>



                                            </div>

                                        </div>

                                    </div>

                                    <div className='catageters' id="1">
                                        <div className='goruptopproducer'>
                                            <div className='new'>
                                                Новинка
                                            </div>


                                        </div>
                                        <div className='catevnuters'>
                                            <img className='routers' src={routersimg} />
                                            <p className='brandtextvers'>Ubiquiti
                                            </p>
                                            <p className='textrowproduct'>Wi-Fi марш рутизатор SNR-CPE-MD1.1
                                                Wi-Fi маршрутизатор SNR-CPE-MD1.1
                                            </p>
                                            <div className='groupelipse'>
                                                <div className='elipse'></div>
                                                <span className='elipsenals'>В наличии</span>
                                                <span className='elipseart'>Арт.: SNR-S1916-1GS</span>
                                            </div>
                                            <p className='titleboldcena'>1 740 000 сум</p>
                                            <div className='cartbtners'>

                                                <div className='btnaddcart'><img src={cartbtn}></img> Добавить</div>
                                                <div className='btnaddcartsrav'><img src={srav}></img></div>
                                                <div className='btnaddcartfavorite'><img src={favorite}></img></div>



                                            </div>

                                        </div>

                                    </div>
                                    <div className='catageters' id="1">
                                        <div className='goruptopproducer'>

                                            <div className='reqomend'>
                                                Рекомендуем
                                            </div>


                                        </div>
                                        <div className='catevnuters'>
                                            <img className='routers' src={routersimg} />
                                            <p className='brandtextvers'>Ubiquiti
                                            </p>
                                            <p className='textrowproduct'>Wi-Fi марш рутизатор SNR-CPE-MD1.1
                                                Wi-Fi маршрутизатор SNR-CPE-MD1.1
                                            </p>
                                            <div className='groupelipse'>
                                                <div className='elipse'></div>
                                                <span className='elipsenals'>В наличии</span>
                                                <span className='elipseart'>Арт.: SNR-S1916-1GS</span>
                                            </div>
                                            <p className='titleboldcena'>1 740 000 сум</p>
                                            <div className='cartbtners'>

                                                <div className='btnaddcart'><img src={cartbtn}></img> Добавить</div>
                                                <div className='btnaddcartsrav'><img src={srav}></img></div>
                                                <div className='btnaddcartfavorite'><img src={favorite}></img></div>



                                            </div>

                                        </div>

                                    </div>


                                    <div className='catageters' id="1">
                                        <div className='goruptopproducer'>

                                            <div className='discount'>
                                                Акция
                                            </div>

                                        </div>
                                        <div className='catevnuters'>
                                            <img className='routers' src={routersimg} />
                                            <p className='brandtextvers'>Ubiquiti
                                            </p>
                                            <p className='textrowproduct'>Wi-Fi марш рутизатор SNR-CPE-MD1.1
                                                Wi-Fi маршрутизатор SNR-CPE-MD1.1
                                            </p>
                                            <div className='groupelipse'>
                                                <div className='elipse'></div>
                                                <span className='elipsenals'>В наличии</span>
                                                <span className='elipseart'>Арт.: SNR-S1916-1GS</span>
                                            </div>
                                            <p className='titleboldcena'>1 740 000 сум</p>
                                            <div className='cartbtners'>

                                                <div className='btnaddcart'><img src={cartbtn}></img> Добавить</div>
                                                <div className='btnaddcartsrav'><img src={srav}></img></div>
                                                <div className='btnaddcartfavorite'><img src={favorite}></img></div>



                                            </div>

                                        </div>

                                    </div>


                                    <div className='catageters' id="1">
                                        <div className='goruptopproducer'>

                                            <div className='skidk'>
                                                -30%
                                            </div>

                                        </div>
                                        <div className='catevnuters'>
                                            <img className='routers' src={routersimg} />
                                            <p className='brandtextvers'>Ubiquiti
                                            </p>
                                            <p className='textrowproduct'>Wi-Fi марш рутизатор SNR-CPE-MD1.1
                                                Wi-Fi маршрутизатор SNR-CPE-MD1.1
                                            </p>
                                            <div className='groupelipse'>
                                                <div className='elipse'></div>
                                                <span className='elipsenals'>В наличии</span>
                                                <span className='elipseart'>Арт.: SNR-S1916-1GS</span>
                                            </div>
                                            <p className='titleboldcena'>1 740 000 сум</p>
                                            <div className='cartbtners'>

                                                <div className='btnaddcart'><img src={cartbtn}></img> Добавить</div>
                                                <div className='btnaddcartsrav'><img src={srav}></img></div>
                                                <div className='btnaddcartfavorite'><img src={favorite}></img></div>



                                            </div>

                                        </div>

                                    </div>

                                </Carousel>



                            </Col>

                        </Row>
                    
                    </Container>


                </div></div>
        )
    }
}

export default NewProd;
