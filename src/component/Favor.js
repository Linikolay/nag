
import React, { Component, lazy } from 'react';
import { Container, Row, Col, NavLink } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useHistory  } from 'react-router-dom'
import aboimg from '../img/aboimg.png';
import logoser from '../img/logoser.svg';
import headsss from '../component/Headers'
import '../App.css'
import "bootstrap/dist/css/bootstrap.min.css"


class Favor extends Component {
    constructor(props) {
        super()
        this.state = {
            sle: "",
            maindata: "",
            isLoad: false,
        }
    }
    componentDidMount(){
        if( localStorage.getItem('favor').length>0){
            this.setState({
                maindata:  JSON.parse(localStorage.getItem('favor')),
                isLoad: true
            })
        }
       
 
    }
    hea = e =>{
        <headsss data={'897459847598'}/>
    }
    render() {
        console.log(this.state.maindata)
        if(!this.state.isLoad){
            return(
                <p>Тут не чего нету</p>
            )
        }else{
            return (
                <div className="page-wrap">
                    <div className="main-body">
                  
    
                        <Container className='controlerspadr'>
                        <Row className='norow'>
                               {this.state.maindata.map((data) =>
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
    
    
    
    
                        </Container>
    
    
                    </div></div>
            )
        }
        
    }
}

export default Favor;
