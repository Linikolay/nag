
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
import  '../App.css';
import "bootstrap/dist/css/bootstrap.min.css"

class AllCategory extends Component {
    constructor(props) {
        super()
        this.state = {
            isLoad: false,
            pop: false,
            main: "",

        }

    }

    componentDidMount() {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

            })
        };


        fetch(process.env.REACT_APP_BASE_URL + '/auth/allcategorycop', requestOptions)
            .then((response) => response.json())

            .then(data => {
                // const result = data.data.filter((word, index) => index < 7);

                console.log(data)
                this.setState({
                    mains: data,

                    isLoaded: true
                })
            }
            )


            .catch((error) => {
                console.error(error);
            });

    }
    render() {
        const { isLoad, main, mains, category, isLoaded } = this.state
        if (!isLoaded) {
            return (
                <p></p>
            )
        } else {
            return (
                <div className="page-wrap ">
                    <div className=''>
                     
                        <Container className=''>
                            <Row>
                               
                                <Col className='' xs={12}>
                                <p className='titlecatereminest'>Список категорий</p>
                                    <div className='otlblosk'>
                                        {mains.data.map((data, id) =>
                                            <div className=''>
                                                {data.child.length <= 2 && (
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
                                    {mains.data.map((data, id) =>
                                        <div className='agares'>
                                            {data.child.length > 2 && (
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
                </div>
            )
        }
    }
}

export default AllCategory;
