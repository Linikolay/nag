
import React, { Component, lazy } from 'react';
import { Container, Row, Col, NavLink } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import mini1 from '../img/mini1.png';
import mini2 from '../img/mini2.png';
import banner from '../img/banner.png';
import routersimg from '../img/router.png';
import partner from '../img/partner.png';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
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
    bufer = e =>{

        navigator.clipboard.writeText(e)
        /* Скопируйте текст внутри текстового поля */
        NotificationManager.success(e , 'Артикул Скопирован' );
   
    }
    componentDidMount() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

            })
        };
        fetch(process.env.REACT_APP_BASE_URL+'/auth/getallpopularproduct', requestOptions)
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
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            // autoplay: true,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                      slidesToShow: 4,
                  
                    }
                  },
                  {
                    breakpoint: 991,
                    settings: {
                      slidesToShow: 3,
                  
                    }
                  },
                  {
                    breakpoint: 749,
                    settings: {
                      slidesToShow: 2,
                  
                    }
                  }

            ]
            
            ,
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


        const { isLoad } = this.state
        if (!isLoad) {
            return (
                <p></p>
            )
        } else {


            return (
                <div className="page-wrap">
                    <div className="main-body">
                    <NotificationContainer/>

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
                     

                                <Col className='nopadd marginmaincontrolls' xs={12}>
                                    <Slider ref={c => (this.slider = c)}{...settings}>
                                        {this.state.main.product.map((data) =>
                                            <div className='catageters'>
                                                <div className='goruptopproducer'>

                                                    {
                                                        data.new == true && (
                                                            <div className='new newvenv testposition'>
                                                                Новинка

                                                            </div>
                                                        )
                                                    }

                                                    {
                                                        data.recomend == true && (
                                                            <div className='reqomend testposition'>
                                                                Рекомендуем
                                                            </div>
                                                        )
                                                    }


                                                    {
                                                        data.act == true && (
                                                            <div className='discount testposition'>
                                                                Акция
                                                            </div>
                                                        )
                                                    }


                                                    {
                                                        data.discount > 0 && (
                                                            <div className='skidk testposition'>
                                                                -{data.discount}%
                                                            </div>
                                                        )
                                                    }


                                                </div>
                                                <div className='catevnuters'>
                                                <Link className={"mainlinkblackcolor"} to={"/view/" + data._id}> <img className='routers' src={process.env.REACT_APP_IMG+data.image[0].url} /></Link>
                                                    {
                                                        data.brand.length > 0 && (
                                                            <p className='brandtextvers'>{data.brand[0].nameru}
                                                            </p>
                                                        )
                                                    }

                                                    <p className='textrowproduct'><Link className={"mainlinkblackcolor"} to={"/view/" + data._id}>{data.nameru}</Link>
                                                    </p>
                                                    <div className='groupelipse'>
                                                       
                                                        {
                                                            data.count == 0&&(
                                                                <div className='elipse awaitbtn'></div>
                                                            )
                                                        }
                                                           {
                                                            data.count >0&&(
                                                                <div className='elipse'></div>
                                                            )
                                                        }

                                                        {/* {
                                                            data.count == 0&&(
                                                                <span className='elipsenals awaitcount'>Ожидается</span>
                                                            )
                                                        }
                                                           {
                                                            data.count >0&&(
                                                                <span className='elipsenals'>В наличии</span>
                                                            )
                                                        } */}

                                                     
                                                        <button  onClick={() => this.bufer(data.artikul)}  className='snerstest'><span className='elipseart'> {data.artikul}</span></button>
                                                         

                                                    </div>

                                                    {
                                                            data.sum ==0&&(
                                                                <p className='titleboldcena'>По запросу</p>
                                                            )
                                                        }
                                                         {
                                                            data.sum >0&&(
                                                                <p className='titleboldcena'>{Math.ceil(data.sum).toLocaleString()} сум</p>
                                                            )
                                                        }
                                                 

                                                    <div className='cartbtners'>

                                                        <div className='btnaddcart'><img src={cartbtn}></img> Добавить</div>
                                                        <div className='btnaddcartsrav'><img src={srav}></img></div>
                                                        <div className='btnaddcartfavorite'><img src={favorite}></img></div>



                                                    </div>

                                                </div>

                                            </div>

                                        )}


                                    </Slider>
                                    {/* </Carousel> */}



                                </Col>

                            </Row>

                        </Container>


                    </div></div>
            )
        }
    }
}

export default Popular;
