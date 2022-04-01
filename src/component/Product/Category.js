
import React, { Component, lazy } from 'react';
import { Container, Row, Col, NavLink, Breadcrumb } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from 'styled-components';
import mini1 from '../../img/mini1.png';
import mini2 from '../../img/mini2.png';
import banner from '../../img/banner.png';
import routersimg from '../../img/router.png';
import partner from '../../img/partner.png';
import ReactSlider from 'react-slider'
import { Range, getTrackBackground } from "react-range";
import Slider from "react-slick";

import back from "../../img/back.svg";
import backp from "../../img/backp.svg";
import slidebtn from "../../img/slidebtn.svg";
import nextp from "../../img/nextp.svg";
import next1 from "../../img/next1.svg";
import down from "../../img/downcat.svg";
import cartbtn from "../../img/cartbtn.svg";
import srav from "../../img/sravbtn.svg";
import favorite from "../../img/favorite.svg";
import "bootstrap/dist/css/bootstrap.min.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../App.css'
import '../../Pro.css'
const STEP = 10000;
const MIN = 0;
const MAX = 500000;
const COLORS = ["rgba(0, 0, 0, 0.00)", " #0A8ED8", "rgba(0, 0, 0, 0.00)"];
const COLORS2 = ["rgba(0, 0, 0, 0.00)", " rgba(0, 0, 0, 0.00)", "rgba(0, 0, 0, 0.00)"];
class Category extends Component {
    constructor(props) {
        super()
        this.state = {
            isLoad: false,
            values: [0, 500000],
            main: ""
        }
        this.change = this.change.bind(this);
    }
    change = e => {
        this.setState({
            sle: e
        })
    }
    componentDidMount() {
        var pathArray = window.location.pathname.split('/');
        console.log(pathArray)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

            })
        };
        fetch('http://192.168.109.214:5000/auth/getonecategory/' + pathArray[2], requestOptions)
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
    render() {
        const { isLoad } = this.state
        // ariaLabel={['Lower thumb', 'Upper thumb']}
        if (!isLoad) {
            return (
                <p></p>
            )
        } else {
            return (
                <div className="page-wrap">
                    <div className="main-body">


                        <Container className='controlerspadr'>

                            <Row>
                                <Breadcrumb className='breadr'>
                                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                                        Library
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                                </Breadcrumb>
                                <Col className='nopadd' xs={12}>

                                    <span className='populartitle'> Популярные товары</span>

                                </Col>
                                <Col className='nopadd cladco' xs={12}>


                                </Col>
                                <Col className='nopadd cladco' xs={12}>

                                    <Row>
                                        <Col xs={2}>
                                            <Row>

                                                <Col className=' cladco' xs={12}>
                                                    <button className='btnbrands'>
                                                        Производитель
                                                    </button>
                                                    <img className='imgdowncater' src={down}></img>
                                                    <div>

                                                        <div className="form-group1">
                                                            <input type="checkbox" id="javascript" />
                                                            <label htmlFor="javascript"> SNR</label>
                                                        </div>


                                                        <div className="form-group1">
                                                            <input defaultChecked={true} type="checkbox" id="javascript1" />
                                                            <label htmlFor="javascript1"> MikroTik</label>
                                                        </div>


                                                        <div className="form-group1">
                                                            <input type="checkbox" id="javascript2" />
                                                            <label htmlFor="javascript2"> PowerTone</label>
                                                        </div>

                                                    </div>
                                                </Col>
                                                <Col>     <button className='btnbrands'>
                                                    Фильтр по цене
                                                </button>
                                                    <img className='imgdowncater' src={down}></img>
                                                </Col>
                                                <Col className=' cladco sliderfilters' xs={12}>

                                                    <Range
                                                        values={this.state.values}
                                                        step={STEP}
                                                        min={MIN}
                                                        max={MAX}
                                                        onChange={values => this.setState({ values })}
                                                        renderTrack={({ props, children }) => (
                                                            <div className='zaglushe'
                                                                onMouseDown={props.onMouseDown}
                                                                onTouchStart={props.onTouchStart}
                                                                style={{
                                                                    ...props.style,
                                                                    height: "23px",
                                                                    display: "flex",
                                                                    width: "100%"
                                                                }}
                                                            >
                                                                <div
                                                                    className='colpser'
                                                                    ref={props.ref}
                                                                    style={{
                                                                        height: "10px",
                                                                        width: "100%",
                                                                        borderRadius: "4px",
                                                                        backgroundColor: 'red',
                                                                        background: getTrackBackground({
                                                                            values: this.state.values,
                                                                            colors: COLORS2,
                                                                            min: MIN,
                                                                            max: MAX
                                                                        }),
                                                                        alignSelf: "center"
                                                                    }}
                                                                >

                                                                </div>
                                                            </div>
                                                        )}
                                                        renderThumb={({ props, isDragged }) => (
                                                            <div
                                                                {...props}
                                                                style={{
                                                                    ...props.style,

                                                                }}
                                                            >

                                                            </div>
                                                        )}
                                                    />
                                                    <Range
                                                        values={this.state.values}
                                                        step={STEP}
                                                        min={MIN}
                                                        max={MAX}
                                                        onChange={values => this.setState({ values })}
                                                        renderTrack={({ props, children }) => (
                                                            <div
                                                                onMouseDown={props.onMouseDown}
                                                                onTouchStart={props.onTouchStart}

                                                                style={{
                                                                    ...props.style,
                                                                    height: "23px",
                                                                    display: "flex",
                                                                    width: "100%"
                                                                }}
                                                            >
                                                                <div
                                                                    ref={props.ref}
                                                                    className={"maincikir"}
                                                                    style={{
                                                                        height: "5px",
                                                                        width: "100%",
                                                                        borderRadius: "4px",
                                                                        backgroundColor: 'red',
                                                                        background: getTrackBackground({
                                                                            values: this.state.values,
                                                                            colors: COLORS,
                                                                            min: MIN,
                                                                            max: MAX
                                                                        }),
                                                                        alignSelf: "center"
                                                                    }}
                                                                >
                                                                    {children}
                                                                </div>
                                                            </div>
                                                        )}
                                                        renderThumb={({ props, isDragged }) => (
                                                            <div
                                                                {...props}
                                                                style={{
                                                                    ...props.style,


                                                                    backgroundColor: "transparent",
                                                                    display: "flex",
                                                                    justifyContent: "center",
                                                                    alignItems: "center",

                                                                }}
                                                            >
                                                                <span

                                                                >
                                                                    <img className='slidergttn' src={slidebtn}></img>
                                                                    <span
                                                                        style={{
                                                                            fontFamily: "Arial",
                                                                            fontSize: "12px",
                                                                            position: "absolute",
                                                                            marginTop: "-20px",

                                                                            marginLeft: "-2px"
                                                                        }}
                                                                    >


                                                                    </span>
                                                                </span>

                                                            </div>

                                                        )}
                                                    />



                                                    <div className='dislbbbdf'>
                                                        <span className='tas1'><div className='textmiongo1'>от</div>{this.state.values[0]}<div className='textmiongo2'>сум</div></span>
                                                        <span className='tas2'><div className='textmiongo3'>до</div>{this.state.values[1]}<div className='textmiongo4'>сум</div></span>
                                                    </div>





                                                </Col>




                                                <Col className=' cladco' xs={12}>
                                                    <button className='btnbrands'>
                                                        Тип товара
                                                    </button>
                                                    <img className='imgdowncater' src={down}></img>
                                                    <div>

                                                        <div className="form-group1">
                                                            <input type="checkbox" id="javascript5" />
                                                            <label htmlFor="javascript5"> Новые поступления</label>
                                                        </div>


                                                        <div className="form-group1">
                                                            <input defaultChecked={true} type="checkbox" id="javascript16" />
                                                            <label htmlFor="javascript16"> Акции</label>
                                                        </div>


                                                        <div className="form-group1">
                                                            <input type="checkbox" id="javascript27" />
                                                            <label htmlFor="javascript27"> Рекомендуем</label>
                                                        </div>

                                                    </div>
                                                </Col>


                                            </Row>
                                        </Col>


                                        <Col className=' cladco' xs={10}>


                                            <Row>
                                                {this.state.main.tesr.map((data) =>
                                                    <Col className='nopadd' xs={3}>
                                                        <div className='productercateg' id="1">
                                                            <div className='goruptopproducer'>
                                                                {
                                                                    data.new == true && (
                                                                        <div className='new'>
                                                                            Новинка

                                                                        </div>
                                                                    )
                                                                }

                                                                {
                                                                    data.recomend == true && (
                                                                        <div className='reqomend'>
                                                                            Рекомендуем
                                                                        </div>
                                                                    )
                                                                }


                                                                {
                                                                    data.act == true && (
                                                                        <div className='discount'>
                                                                            Акция
                                                                        </div>
                                                                    )
                                                                }


                                                                {
                                                                    data.discount > 0 && (
                                                                        <div className='skidk'>
                                                                            -{data.discount}%
                                                                        </div>
                                                                    )
                                                                }






                                                            </div>
                                                            <div className='catevnuters'>
                                                                <img className='routers' src={"http://192.168.109.214:5000" + data.image[0].url} />
                                                            
                                                                <p className='brandtextvers'>{data.brand[0].nameru}
                                                                </p>
                                                                <Link to={'/view/' + data._id}>  <p className='textrowproduct'>{data.nameru}
                                                                </p></Link>
                                                              
                                                                <div className='groupelipse'>
                                                                    <div className='elipse'></div>
                                                                    <span className='elipsenals'>В наличии</span>
                                                                    <span className='elipseart'>{data.artikul}</span>
                                                                </div>
                                                                <p className='titleboldcena'>{data.sum.toLocaleString()}  сум</p>


                                                            </div>

                                                        </div>


                                                    </Col>

                                                )}

                                            </Row>

                                        </Col>

                                    </Row>


                                </Col>


                            </Row>

                        </Container>


                    </div></div>
            )
        }

    }
}

export default Category;
