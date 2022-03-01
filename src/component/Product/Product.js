
import React, { Component, lazy, useState } from 'react';
import { Container, Row, Col, NavLink, Breadcrumb } from 'react-bootstrap';
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
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css/bundle";
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
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
const STEP = 10000;
const MIN = 0;
const MAX = 500000;
const COLORS = ["rgba(0, 0, 0, 0.00)", " #0A8ED8", "rgba(0, 0, 0, 0.00)"];
const COLORS2 = ["rgba(0, 0, 0, 0.00)", " rgba(0, 0, 0, 0.00)", "rgba(0, 0, 0, 0.00)"];
class Category extends Component {
    constructor(props) {
        super()
        this.state = {
            values: [0, 500000],
            thumbsSwiper: null,
            setThumbsSwiper:null,
            nav1: null,
      nav2: null
        }
        this.change = this.change.bind(this);
    }
    change = e => {
        this.setState({
            sle: e
        })
    }

    componentDidMount() {
        this.setState({
          nav1: this.slider1,
          nav2: this.slider2
        });
      }

    render() {
        // const [thumbsSwiper, setThumbsSwiper] = useState(null);
        // ariaLabel={['Lower thumb', 'Upper thumb']}
const {thumbsSwiper, setThumbsSwiper} = this.state
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
                            <Col className='nopadd cladco productblocked' xs={12}>

<Row>
<Col className='nopadd cladco' xs={12}>
<div>
        <h2>Slider Syncing (AsNavFor)</h2>
        <h4>First Slider</h4>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        <h4>Second Slider</h4>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={2}
          swipeToSlide={true}
          focusOnSelect={true}
       centerMode={true}
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
</Col>
<Col className='nopadd cladco' xs={12}></Col>
</Row>

                            </Col>
                           


                        </Row>

                    </Container>


                </div></div>
        )
    }
}

export default Category;
