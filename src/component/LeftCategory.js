
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

            main: ""
        }

    }
    componentDidMount() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

            })
        };
        fetch('https://new.itmag.uz/auth/allcategory', requestOptions)
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

                    <NavLink href={"category/allcategory"} className='botallcateg'>
                        <img src={allcategory} />
                        <span className='botallcategtext'>Показать все категории</span>
                    </NavLink>
                </div>
            )
        }
    }
}

export default LeftCategory;
