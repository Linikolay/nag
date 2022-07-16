

import React, { Component, lazy } from 'react';
import { Container, Row, Col, NavLink } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import logoser from './cros.jpg';
import two from './two.jpg';
import three from './three.jpg';
import four from './four.jpg';




import "bootstrap/dist/css/bootstrap.min.css"
import '../../App.css'
import '../../Pro.css'


class one extends Component {
    constructor(props) {
        super()
        this.state = {
            sle: "",
            news: "",
            isLoad: false,
        }
    }
    componentDidMount() {
        var pathArray = window.location.pathname.split('/');
        console.log(pathArray[2])

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                mainid: pathArray[2]
            })
        };
        fetch(process.env.REACT_APP_BASE_URL+'/auth/onenews/', requestOptions)
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

        if (!isLoad) {
            return (
                <div></div>
            )
        } else {
            return (
                <div>
           


                    <div className="page-wrap">
                        <div className="main-body">
                   

                            <Container className='controlerspadr'>
                                <Row>
                              <span className='titlenewsmaincintrollers'>  {this.state.main.data.nameru}</span>
                                
                                <div>
                          
                                <p className='mainfileeer' dangerouslySetInnerHTML={{ __html: (this.state.main.data.opes) }}>

</p>
                                
                            
                                </div>
                                </Row>
                            </Container>
                        </div>
                    </div>
             </div>
            )

        }

    }
}

export default one;


