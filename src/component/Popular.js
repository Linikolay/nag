
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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




class Popular extends Component {
    constructor(props) {
        super()
        this.state = {
            sle: "",
        }
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);

        this.next1 = this.next1.bind(this);
        this.previous1 = this.previous1.bind(this);
    }

    componentDidMount() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

            })
        };
        fetch('http://192.168.109.214:5000/auth/getallpopularproduct', requestOptions)
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
    }

    next1() {
        this.slider.slickNext();
    }
    next() {
        this.slider.slickNext();
    }
    previous1() {
        this.slider.slickPrev();
        console.log("fdsfjsdhf")
    }
    previous() {
        this.slider.slickPrev();
        console.log("fdsfjsdhf")
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
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
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


                    <Container className='controlerspadr'>
                        <Row>

                            <Col className='nopadd' xs={12}>

                                <span className='populartitle'> Популярные товары</span>


                                <div className='brnpop'>



                                <button className="minn" onClick={this.previous1}>
                                <img src={backp}></img>
                                </button>
                                <button className="minn" onClick={this.next1}>
                                <img src={nextp}></img>
                                </button>






                                </div>




                            </Col>
                            <Col className='nopadd cladco' xs={12}>

                                <button className='activecategorymain '>Все категории</button>
                                <button className='noactivecategorymain '>Все категории</button>
                            </Col>

                            <Col className='nopadd' xs={12}>
                                {/* <Carousel autoPlay={true} infinite={true} ref={(el) => (this.Carousel = el)} arrows={false} responsive={responsive}> */}
                                <Slider ref={c => (this.slider = c)}{...settings}>
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
                                    </Slider>
                                {/* </Carousel> */}



                            </Col>

                        </Row>
                    
                    </Container>


                </div></div>
        )
    }
}

export default Popular;
