
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

import Slider from "react-slick";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
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

class NewProd extends Component {
    constructor(props) {
        super()
        this.state = {
            sle: "",
            cart: "",
            favor: []
        }
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);

        this.next1 = this.next1.bind(this);
        this.previous1 = this.previous1.bind(this);
    }
    next1() {
        this.slider.slickNext();
    }
    next() {
        this.slider.slickNext();
    }
    previous1() {
        this.slider.slickPrev();
  
    }
    previous() {
        this.slider.slickPrev();
        
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
   
        e.target.classList.remove('red')

    }
    bufer = e => {

        navigator.clipboard.writeText(e)
        /* Скопируйте текст внутри текстового поля */
        NotificationManager.success(e, 'Артикул Скопирован');

    }
  
    adFavor = e => {
        var cata = false

        var cons = JSON.parse(localStorage.getItem('favor'))
        var gapa = this.state.favor

        var gapas = [...this.state.favor]
        var PowerTone = gapas.pop()
        console.log(this.state.favor.length)
        if (cons != undefined) {
            for (var i = 0; i < this.state.favor.length; i++) {
                if (e._id == this.state.favor[i]._id) {
                    let filteredArray = this.state.favor.filter(item => item._id != e._id)
                    this.setState({
                        favor: filteredArray
                    })
                    localStorage.setItem('favor', JSON.stringify(filteredArray))
                } else if ((this.state.favor.length - 1) == i) {


                    const fava = [...this.state.favor]
                    fava.push(e)
                    this.setState({
                        favor: fava
                    })
                    localStorage.setItem('favor', JSON.stringify(fava))


                }
            }
        }
        if (cons == undefined) {
            localStorage.setItem('favor', JSON.stringify([e]))
            // cons.push(e)
            // localStorage.setItem('favor', JSON.stringify(cons))
            console.log("test")


        } else if (cons.length == 0) {
            console.log("gepers")
            gapa.push(e)
            this.setState({
                favor: gapa
            })
            localStorage.setItem('favor', JSON.stringify(this.state.favor))
        }


    }
    adCart = e =>{
        var cata = false
        var cons = JSON.parse(localStorage.getItem('cart'))
        console.log(e)
        var gapa = this.state.cart
        var gapas = [...this.state.cart]
      
        var PowerTone = gapas.pop()
        
        if (cons != undefined) {
            console.log(this.state.cart.length - 1)
            console.log(this.state.cart.length)
            if(localStorage.getItem('cart').length > 0){
                for (var i = 0; i < this.state.cart.length; i++) {
                    if (e._id == this.state.cart[i]._id) {
                        let filteredArray = this.state.cart.filter(item => item._id != e._id)
                        this.setState({
                            cart: filteredArray
                        })
                    } else  {
                        const fava = [...this.state.cart]
                        fava.push(e)
                        localStorage.setItem('cart', JSON.stringify(fava))
                        this.setState({
                            cart: fava
                        })
                      
    
    
                    }
                }
            }
        }
        if (cons == undefined) {
            localStorage.setItem('cart', JSON.stringify([e]))
            cons.push(e)
        } else if (cons.length == 0) {
            gapa.push(e)
            this.setState({
                cart: gapa
            })
            localStorage.setItem('cart', JSON.stringify(this.state.cart))
        }
    }
    componentDidMount() {

    
        if(JSON.parse(localStorage.getItem('favor')) == null){
            this.setState({
             favor: []
            })
        }else{
            this.setState({
                favor: JSON.parse(localStorage.getItem('favor'))
            })
        }


        if(JSON.parse(localStorage.getItem('cart')) == null){
            this.setState({
             cart: []
            })
        }else{
            this.setState({
                cart: JSON.parse(localStorage.getItem('cart'))
            })
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

            })
        };
        fetch(process.env.REACT_APP_BASE_URL + '/auth/getallnewproduct', requestOptions)
            .then((response) => response.json())

            .then(data => {
              

                if (data.product) {
                    if (data.product.length > 0) {
                        this.setState({
                            main: data,
                            isLoad: true
                        })

                    } else {

                    }
                }
            }
            )


            .catch((error) => {
                console.error(error);
            });
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
                        <NotificationContainer />

                        <Container className='controlerspadr'>
                            <Row>

                                <Col className='nopadd' xs={12}>

                                    <span className='populartitle'> Новинки</span>


                                    <div className='brnpop'>


                                        <button className="minn" onClick={this.previous1}>
                                            <img src={backp}></img>
                                        </button>
                                        <button className="minn" onClick={this.next1}>
                                            <img src={nextp}></img>
                                        </button>





                                    </div>




                                </Col>


                                <Col className='nopadd notanknew' xs={12}>
                                    <Slider ref={c => (this.slider = c)}{...settings}>
                                        {this.state.main.product.map((data) =>
                                            <div className='catageters' id="1">
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
                                                    <Link className={"mainlinkblackcolor"} to={"/view/" + data._id}> <img className='routers' src={process.env.REACT_APP_IMG + data.image[0].url} /></Link>
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
                                                            data.count == 0 && (
                                                                <div className='elipse awaitbtn'></div>
                                                            )
                                                        }
                                                        {
                                                            data.count > 0 && (
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
                                                        <button onClick={() => this.bufer(data.artikul)} className='snerstest'><span className='elipseart'>{data.artikul}</span></button>


                                                    </div>

                                                    {
                                                        data.sum == 0 && (
                                                            <p className='titleboldcena'>По запросу</p>
                                                        )
                                                    }
                                                    {
                                                        data.sum > 0 && (
                                                            <p className='titleboldcena'>{Math.ceil(data.sum).toLocaleString()} сум</p>
                                                        )
                                                    }
                                                    <div className='cartbtners'>
                                                        <button onClick={() => this.adCart(data)} className='dopbtnadd33'> 
                                                         <div className='btnaddcart'><img src={cartbtn}></img> Добавить</div></button>

                                                        <div className='btnaddcartsrav'><img src={srav}></img></div>
                                                        <button onClick={() => this.adFavor(data)} className='btnaddcartfavorite'><img src={favorite}></img></button>



                                                    </div>

                                                </div>

                                            </div>

                                        )}

                                    </Slider>



                                </Col>

                            </Row>

                        </Container>


                    </div></div>
            )
        }
    }
}

export default NewProd;
