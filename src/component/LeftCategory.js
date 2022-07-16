
import React, { Component, lazy } from 'react';
import { Container, Row, Col, NavLink } from 'react-bootstrap';

import komutator from '../img/komutator.svg';
import allcategory from '../img/allcategory.svg';
import mediaconverter from '../img/mediaconvert.svg';
import optical from '../img/optical.svg';
import sfp from '../img/sfp.svg';
import usb from '../img/usb.svg';
import voip from '../img/voip.svg';
import next from '../img/next.svg';
import router from '../img/router.svg';

import "bootstrap/dist/css/bootstrap.min.css"

class LeftCategory extends Component {
    constructor(props) {
        super()
        this.state = {
            isLoad: false,
            pop: false,
            main: "",

        }

    }
    popup = e =>{
        console.log("test")
        this.setState({
            pop: true
        })
    }
    exit = e =>{
        this.setState({
            pop: false
        })   
    }
    componentDidMount() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

            })
        };
        fetch(process.env.REACT_APP_BASE_URL+'/auth/allcategory', requestOptions)
            .then((response) => response.json())

            .then(data => {
                // const result = data.data.filter((word, index) => index < 7);

                console.log(data)
                this.setState({
                    main: data,
                    category: data.categors,
                    isLoad: true
                })
            }
            )


            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        const { isLoad, main, category } = this.state
        if (!isLoad) {
            return (
                <p></p>
            )
        } else {
            return (
                <div className="page-wrap catereseed1">
                    {
                        this.state.pop == true && (
                            <div className='popers'>
                                <button className='exitmyconfirm' onClick={this.exit}>X</button>
                                <Container className='shdowmain'>
                                    <Row>
                                        <Col className='classscorll' xs={12}>
                                        <div className='otlblosk'>
                                                {main.data.map((data, id) =>
                                             
                                           
                                                <div className=''>

                                                    {data.child.length <= 2&&(
                                                       
                                                       <NavLink key={data._id} href={"category/" + data._id} className='mainoc blockcatersrre'>

                                                                <div key={data.icon} className='osnova1'>
                                                                    <p key={data.nameru} className='parrent1'>{data.nameru}</p>
                                                                    <p key={data.id} className=''>
                                                                        {data.child.map((con) =>
                                                                            <a className='parrent2' href={"category/" + con._id} key={con._id}>{con.nameru}</a>
                                                                        )}
                                                                    </p>
                                                                </div>
                                                            </NavLink>
                                                    )}
                                                </div>

                                                )}
  </div>
                                              
                                             {main.data.map((data, id) =>
                                             

                                             <div className='agares'>

                                                 {data.child.length > 2&&(
                                                    
                                                    <NavLink key={data._id} href={"category/" + data._id} className='mainoc blockcatersrre'>

                                                             <div key={data.icon} className='osnova1'>
                                                                 <p key={data.nameru} className='parrent1'>{data.nameru}</p>
                                                                 <p key={data.id} className=''>
                                                                     {data.child.map((con) =>
                                                                         <a className='parrent2' href={"category/" + con._id} key={con._id}>{con.nameru}</a>
                                                                     )}
                                                                 </p>
                                                             </div>
                                                         </NavLink>
                                                 )}
                                             </div>

                                             )}
                                           
                                        </Col>
                                    </Row>
                                </Container>

                            </div>
                        )
                    }
                  
                    <div className="main-body">
                        {category.map((data, id) =>
                            <NavLink key={data._id} href={"category/" + data._id} className='blockcatersrre'>
                                {/* <img  className='imgtemp' src={data.icon} /> */}
                                <div key={data.icon} className='blockcater'>
                                    <p key={data.nameru} className='textcategory'>{data.nameru}</p>
                                    <p key={data.id} className='brandcategory'>

                                        {data.child.map((con) =>

                                            <span key={con._id}>{con.nameru}, </span>
                                        )}
                                    </p>
                                </div>
                                <img className='nextcateg' src={next} />


                            </NavLink>
                        )}


                    </div>

                    <NavLink onClick={this.popup} className='botallcateg'>
                        <img src={allcategory} />
                        <span className='botallcategtext'>Показать все категории</span>
                    </NavLink>
                </div>
            )
        }
    }
}

export default LeftCategory;
