
import React, { Component, lazy } from 'react';
import { Container, Row, Col, NavLink, Breadcrumb, Dropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from 'styled-components';
import mini1 from '../../img/mini1.png';
import mini2 from '../../img/mini2.png';
import banner from '../../img/banner.png';
import routersimg from '../../img/router.png';
import partner from '../../img/partner.png';

import countico from '../../img/countico.svg';
import filtericon from '../../img/filtericon.svg';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import sortico from '../../img/sortico.svg';

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
            categories: "",
            main: "",
            activepage: 1,
            count: "",
            all: false,
            breadchild: "",
            breadcat: "",
            get: false,
            pops: false,
            banload: true,
            catload: true,
            cenload: true,
            tipload: true,
            mini: ''
        }
        this.change = this.change.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.load = this.load.bind(this);
        this.pops = this.pops.bind(this);
        this.closepop = this.closepop.bind(this);

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    tip = () =>{
        if(this.state.tipload == true){
            this.setState({
                tipload: false
            })
        }else{
            this.setState({
                tipload: true
            })
        }
    }
    cen = ()=>{
        if(this.state.cenload == true){
            this.setState({
                cenload: false
            })
        }else{
            this.setState({
                cenload: true
            })
        }
    }
    ban = () =>{
        if(this.state.banload == true){
            this.setState({
                banload: false
            })
        }else{
            this.setState({
                banload: true
            })
        }
    }
    categ = ()=>{
        if(this.state.catload == true){
            this.setState({
                catload: false
            })
        }else{
            this.setState({
                catload: true
            })
        }
    }
    closepop = () => {
        this.setState({
            pops: false
        })
    }
    pops = () => {
        console.log("gjdfkgjl")
        this.setState({
            pops: true
        })
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }


    updateWindowDimensions = () => {
        console.log(window.innerWidth)
        if (window.innerWidth <= 1446) {
            this.setState({
                get: true
            })
        } else {
            this.setState({
                get: false
            })
        }


    }
    bufer = e => {

        navigator.clipboard.writeText(e)
        /* Скопируйте текст внутри текстового поля */
        NotificationManager.success(e, 'Артикул Скопирован');

    }
    change = e => {
        this.setState({
            sle: e
        })
    }
    handleScroll() {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        // console.log(this.state.product)
        if (windowBottom >= docHeight) {
            // console.log('bottom reached')
            var pathArray = window.location.pathname.split('/');
            //   
            // console.log(this.state.allpage)
            if (this.state.activepage == this.state.allpage + 200 || this.state.allpage == 0 || this.state.allpage == null) {

            } else {


                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        currentpage: this.state.activepage + 1,
                    })
                };
                fetch(process.env.REACT_APP_BASE_URL+'/auth/getonecategoryscontroll/' + pathArray[2], requestOptions)
                    .then((response) => response.json())

                    .then(data => {
                        // console.log(data)
                        const concater = [...this.state.product, ...data.child.product]
                        console.log(concater)
                        // this.state.product.concat(data.child.product)
                        this.setState({
                            isLoad: true,
                            activepage: data.activepage,
                            allpage: data.allpage,
                            product: concater
                        })
                        if (data.data.lvl == 2) {

                            const concater = [...this.state.product, ...data.child.product]
                            this.setState({
                                construktor: [],
                                isLoad: true,
                                product: concater,
                                activepage: data.activepage,
                                allpage: data.allpage
                            })
                        } else {
                            const maina = data.data.filter((cll, id) => id <= 2);

                            console.log(maina)
                            if (data.data.length > 3) {
                                this.setState({
                                    construktor: maina,
                                    isLoad: true,
                                    mini: maina,
                                })
                            } else {
                                console.log(data.data.child)
                                if (data.data.child) {
                                    if (data.data.child.length > 0) {
                                        const concater = [...this.state.product, ...data.child.product]
                                        this.setState({

                                            isLoad: true,
                                            product: concater,
                                            activepage: data.activepage,
                                            allpage: data.allpage
                                        })
                                    }
                                }
                                else {
                                    const concater = [...this.state.product, ...data.child.product]
                                    this.setState({
                                        isLoad: true,
                                        product: concater,
                                        activepage: data.activepage,
                                        allpage: data.allpage
                                    })
                                }

                            }
                        }

                    }
                    )


                    .catch((error) => {
                        console.error(error);
                    });
            }
        } else {


        }
    }
    componentDidMount() {
        if (window.innerWidth <= 1446) {
            this.setState({
                get: true
            })
        } else {
            this.setState({
                get: false
            })
        }

        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.updateWindowDimensions);
        var pathArray = window.location.pathname.split('/');
        console.log(pathArray)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                currentpage: 1
            })
        };
        fetch(process.env.REACT_APP_BASE_URL+'/auth/getonecategoryscontroll/' + pathArray[2], requestOptions)
            .then((response) => response.json())

            .then(data => {
                console.log(data)
                this.setState({
                    count: data.count,
                    maincategor: data.data,
                    product: data.child.product,
                    activepage: data.activepage,
                    breadcat: data.bradcat,
                    breadchild: data.breadchild,
                    allpage: data.allpage
                })
                if (data.data.lvl) {
                    if (data.data.lvl == 2) {
                        this.setState({
                            construktor: [],
                            isLoad: true,
                            product: data.child.product,
                            activepage: data.activepage,
                            allpage: data.allpage,
                            breadcat: data.bradcat,
                            breadchild: data.breadchild,
                        })
                    }



                } else {
                    const maina = data.data.filter((cll, id) => id <= 2);


                    if (data.data.length > 3) {

                        this.setState({
                            construktor: maina,
                            isLoad: true,
                            mini: maina,
                            breadcat: data.bradcat,
                            breadchild: data.breadchild,
                        })
                    } else {

                        if (data.data.child) {
                            if (data.data.child.length > 0) {
                                this.setState({
                                    construktor: data.data.child,
                                    isLoad: true,
                                    product: data.child.product,
                                    activepage: data.activepage,
                                    allpage: data.allpage,
                                    breadcat: data.bradcat,
                                    breadchild: data.breadchild,
                                })
                            }
                        }
                        else {

                            this.setState({
                                construktor: data.data,
                                isLoad: true,
                                product: data.child.product,
                                activepage: data.activepage,
                                allpage: data.allpage,
                                breadcat: data.bradcat,
                                breadchild: data.breadchild,
                            })
                        }

                    }
                }

            }
            )


            .catch((error) => {
                console.error(error);
            });
    }
    load() {
        console.log(this.state.mini)
        if (this.state.all == false) {
            this.setState({
                all: true,
                construktor: this.state.maincategor

            })
        } else {
            this.setState({
                all: false,
                construktor: this.state.mini
            })
        }

    }


    render() {
        const { isLoad } = this.state
        console.log(this.state.construktor)
        // ariaLabel={['Lower thumb', 'Upper thumb']}
        if (!isLoad) {
            return (
                <p></p>
            )
        } else {
            return (
                <div className="page-wrap">
                    <NotificationContainer />
                    {this.state.pops == true && (
                        <div className='custompopups'>
                            <div className='titlepopuresfilter'>Фильтр</div>
                            <button onClick={this.closepop} className='closedpopus buttonclassmobilessrm'>X</button>




                            <Col className=' cladco' xs={12}>

                                <Row>


                                    {
                                        this.state.construktor.length > 0 && (


                                            <Col className=' cladco' xs={12}>

                                                <button className='btnbrands'>
                                                    <span > Подкатегории</span>


                                                </button>



                                                <img className='imgdowncater' src={down}></img>

                                                <div>


                                                    {this.state.construktor.map((data) =>
                                                        <div>
                                              
                                                                    <div className="form-group1 margcat">

                                                                        <a className={"linkcaters"} href={'/category/' + data._id}>{data.nameru}</a>
                                                                    </div>
                                                          

                                                        </div>
                                                    )}


                                                    {(() => {

                                                        if (this.state.maincategor.length > 3) {
                                                            if (this.state.all == false) {
                                                                return (
                                                                    <button className='ffdfdf' onClick={this.load} >Еще</button>
                                                                )
                                                            } else {
                                                                return (
                                                                    <button className='ffdfdf' onClick={this.load} >Скрыть</button>
                                                                )
                                                            }

                                                        } else {
                                                            return (
                                                                <p></p>
                                                            )
                                                        }
                                                    })()}




                                                </div>
                                            </Col>
                                        )
                                    }
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





                                </Row>



                                <button onClick={this.ban} className='btnbrands'>
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


                        </div>
                    )}
                    <div className="main-body">


                        <Container className='controlerspadr'>

                            <Row>


                                {(() => {
                                    if (this.state.breadchild.length == 0 && this.state.breadcat.length == 0) {
                                        return (
                                            <Breadcrumb className='breadr'>
                                                <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                                                <Breadcrumb.Item active>
                                                    Категории
                                                </Breadcrumb.Item>

                                            </Breadcrumb>
                                        )
                                    } else if (this.state.breadchild.length == 0 && this.state.breadcat.length == undefined) {
                                        return (
                                            <Breadcrumb className='breadr'>
                                                <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                                                <Breadcrumb.Item href="/category/allcategory">
                                                    Категории
                                                </Breadcrumb.Item>
                                                <Breadcrumb.Item active>{this.state.breadcat.nameru}</Breadcrumb.Item>
                                            </Breadcrumb>
                                        )
                                    } else if (this.state.breadchild.length == undefined && this.state.breadcat.length == undefined) {
                                        return (
                                            <Breadcrumb className='breadr'>
                                                <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                                                <Breadcrumb.Item href="/category/allcategory">
                                                    Категории
                                                </Breadcrumb.Item>
                                                <Breadcrumb.Item href={'/category/' + this.state.breadcat._id}>{this.state.breadcat.nameru}</Breadcrumb.Item>
                                                <Breadcrumb.Item active>{this.state.breadchild.nameru}</Breadcrumb.Item>

                                            </Breadcrumb>
                                        )
                                    }
                                })()}


                                <Col className='' xs={12}>

                                    <span className='populartitle'> {this.state.breadcat.nameru}</span>
                                    {this.state.get == true && (
                                        <div className='mobilesort'>

                                            <div className='countcategory'>
                                                <img src={countico}></img> <span className='minitextccounttext'>Товаров: {this.state.count}</span>
                                            </div>


                                        </div>
                                    )}
                                    {this.state.get == true && (
                                        <div className='mobilblockers'>

                                            <div className='sortblock'>
                                                <img src={sortico}></img>   <span className='minitextccounttext'></span><Dropdown className='sortdrops'>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        <span>Популярности</span>
                                                    </Dropdown.Toggle>

                                                    {/* <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu> */}
                                                </Dropdown>
                                            </div>
                                            <div className='filtermob'>
                                                <button onClick={this.pops} className='buttonclassmobilessrm'><img className='filtericon' src={filtericon}></img></button>

                                            </div>
                                        </div>
                                    )}



                                </Col>
                                <Col className='nopadd cladco' xs={12}>


                                </Col>
                                <Col className='nopadd cladco' xs={12}>

                                    <Row className='norow'>
                                        {this.state.get == false && (


                                            <Col xl={2}>
                                                <Row>


                                                    {
                                                        this.state.construktor.length > 0 && (


                                                            <Col className=' cladco' xs={12}>

                                                                <button onClick={this.categ} className='btnbrands'>
                                                                    <span  className='noldder'> Подкатегории</span>


                                                                </button>



                                                                <img className='imgdowncater' src={down}></img>

                                                                <div>


                                                                    {this.state.construktor.map((data) =>
                                                                        <div>
                                                                      {this.state.catload==true&&(
                                                                                <div className="form-group1 margcat">

                                                                                    <a className={"linkcaters"} href={'/category/' + data._id}>{data.nameru}</a>
                                                                                </div>
                                                                      )}
                                                                                    
                                                                            

                                                                        </div>
                                                                    )}


                                                                    {(() => {

                                                                        if (this.state.maincategor.length > 3) {
                                                                            if (this.state.all == false) {
                                                                                return (
                                                                                    <button className='ffdfdf' onClick={this.load} >Еще</button>
                                                                                )
                                                                            } else {
                                                                                return (
                                                                                    <button className='ffdfdf' onClick={this.load} >Скрыть</button>
                                                                                )
                                                                            }

                                                                        } else {
                                                                            return (
                                                                                <p></p>
                                                                            )
                                                                        }
                                                                    })()}




                                                                </div>
                                                            </Col>
                                                        )
                                                    }
                                                    <Col className=' cladco' xs={12}>


                                                        <button onClick={this.ban} className='btnbrands'>
                                                            Производитель
                                                        </button>
                                                        <img className='imgdowncater' src={down}></img>
                                                        {this.state.banload == true&&(
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
                                            )}
                                                        
                                                    </Col>
                                                    <Col>     <button onClick={this.cen} className='btnbrands'>
                                                        Фильтр по цене
                                                    </button>
                                                        <img className='imgdowncater' src={down}></img>
                                                    </Col>
                                                    {this.state.cenload == true&&(

                                                    
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

)}


                                                    <Col className=' cladco' xs={12}>
                                                        <button onClick={this.tip} className='btnbrands'>
                                                            Тип товара
                                                        </button>
                                                        <img className='imgdowncater' src={down}></img>
                                                        {this.state.tipload == true&&(

                                                       
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
                                                         )}
                                                    </Col>


                                                </Row>
                                            </Col>
                                        )}
                                        {
                                            this.state.get == true && (
                                                <Col className=' cladco' xl={12}>


                                                    <Row className='norow'>
                                                        {this.state.product.map((data) =>
                                                            <Col className='nopadd' xs={6} sm={6} md={6} lg={4} xl={3}>
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
                                                                    <div className='absoluuuu333 catevnuters'>
                                                                        {
                                                                            data.image.length > 0 && (
                                                                                <div className='containerimg'>
                                                                                    <img className='routers' src={ "https://new.itmag.uz"+data.image[0].url} />
                                                                                </div>

                                                                            )
                                                                        }

                                                                        {
                                                                            data.brand.length > 0 && (
                                                                                <p className='brandtextvers'>{data.brand[0].nameru}
                                                                                </p>
                                                                            )
                                                                        }

                                                                        <Link to={'/view/' + data._id}>  <p className='textrowproduct'>{data.nameru}
                                                                        </p></Link>

                                                                        <div className='groupelipse'>
                                                                            <div className='elipse'></div>
                                                                            <span className='elipsenals'>В наличии</span>

                                                                            <button onClick={() => this.bufer(data.artikul)} className='snerstest'><span className='elipseart'>{data.artikul}</span></button>

                                                                        </div>
                                                                        <p className='titleboldcena'>{data.sum.toLocaleString()}  сум</p>


                                                                    </div>

                                                                </div>


                                                            </Col>

                                                        )}

                                                    </Row>

                                                </Col>
                                            )
                                        }

                                        {
                                            this.state.get == false && (
                                                <Col className=' cladco' xs={10}>


                                                    <Row className='norow'>
                                                        {/* <Col xs={12}>

                                                            <div className='countcategory'>
                                                                <img src={countico}></img> <span className='minitextccounttext'>Товаров: {this.state.count}</span>
                                                            </div>
                                                            <div className='sortblock'>
                                                                <img src={sortico}></img>   <span className='minitextccounttext'>Сортировка по:</span>
                                                                <Dropdown className='sortdrops'>
                                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                                        <span>Популярности</span>
                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu>
                                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>

                                                        </Col> */}
                                                        {this.state.product.map((data) =>
                                                            <Col className='nopadd' xs={6} sm={6} md={12} lg={4} xl={3}>
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
                                                                    <div className='catevnuters absoluuuu'>
                                                                        {
                                                                            data.image.length > 0 && (
                                                                                <Link className={"mainlinkblackcolor"} to={"/view/" + data._id}>     <img className='routers' src={"https://new.itmag.uz"+data.image[0].url} /></Link>
                                                                            )
                                                                        }
                                                                        {
                                                                            data.brand.length > 0 && (
                                                                                <p className='brandtextvers'>{data.brand[0].nameru}
                                                                                </p>
                                                                            )
                                                                        }

                                                                        <Link to={'/view/' + data._id}>  <p className='textrowproduct'>{data.nameru}
                                                                        </p></Link>

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

                                                                            {
                                                                                data.count == 0 && (
                                                                                    <span className='elipsenals awaitcount'>Ожидается</span>
                                                                                )
                                                                            }
                                                                            {
                                                                                data.count > 0 && (
                                                                                    <span className='elipsenals'>В наличии</span>
                                                                                )
                                                                            }
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



                                                                    </div>

                                                                </div>


                                                            </Col>

                                                        )}

                                                    </Row>

                                                </Col>
                                            )
                                        }

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
