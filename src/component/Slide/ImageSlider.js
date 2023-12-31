import React, { useState, useCallback } from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import "./ImageSlider.css";

const NextArrow = ({ onClick }) => {
  return (
    <div className="nextArrow" onClick={onClick}>
      <BsChevronRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="prevArrow" onClick={onClick}>
      <BsChevronLeft />
    </div>
  );
};

const ImageSlider = ({ onChange,props, parentCallback, maincount, images, slidesToShow = maincount }) => {

  const [imageIndex, setImageIndex] = useState(0);
 

  const settings = {
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: slidesToShow,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,
    beforeChange: (current, next) => setImageIndex(next),
  
  };

  const templateImages = images.map((image, idx) => {

    if (image !== null) {
      if(idx === imageIndex ){
        onChange (images[imageIndex])
      }
      return (
        <div
          className={idx === imageIndex ? "activeSlide actpoper" : "slide"}
          key={image._id}
        >
   
            {
              images.length>1&&(
                <div className="slideWrapper">
                {image.code ? image.code : <img src={process.env.REACT_APP_IMG+image.url} alt={image.alt} />}
              </div>
              )
            }
       
        </div>
      );
    }
    return null;
  });

  return <Slider {...settings}>{templateImages}</Slider>;
};

export default ImageSlider;
