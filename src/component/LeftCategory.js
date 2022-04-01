
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
        fetch('http://192.168.109.214:5000/auth/allcategory', requestOptions)
            .then((response) => response.json())

            .then(data => {
                // console.log(data)
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
            const {isLoad, main} = this.state
            if(!isLoad){
                return(
                    <p></p>
                )
            }else{
        return (
            <div className="page-wrap catereseed1">
                <div className="main-body">
                {this.state.main.data.map((data) =>
   <NavLink href={"category/" + data._id} className='blockcatersrre'>
   <img className='imgtemp' src={"http://192.168.109.214:5000"+data.icon} />
   <div className='blockcater'>
       <p className='textcategory'>{data.nameru}</p>
       <p className='brandcategory'>
           
       {data.child.map((con) =>

        <span>{con.nameru}, </span>
)}
           </p>
   </div>
   <img className='nextcateg' src={next} />


</NavLink>
                )}
                 

                </div>

                <NavLink className='botallcateg'>
                        <img src={allcategory} />
                        <span className='botallcategtext'>Показать все категории</span>
                    </NavLink>
            </div>
        )
    }
    }
}

export default LeftCategory;
