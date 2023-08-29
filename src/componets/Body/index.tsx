import image from "../../asset/slider-img.jpg";
import "./index.css";
import Button from "../Button";
import React, { useRef } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

const Rootcontainer = styled.div(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "150px 0px ",
  "@media (max-width:1000px)": {
    flexDirection: "column",
    alignItems: "center",
    padding: "0px 0px 19px",
  },
}));

const Body = () => {
  const sliderRef: any = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current?.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <Rootcontainer>
      <div className="body">
        <div style={{ margin: "40px 0px" }}>
          <h1 className="body-heading">
            ELECTRICAL
            <br />
            SERVICE
            <br />
            PROVIDERS
          </h1>
          <p className="body-text">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem
          </p>
          <Button name="Contact Us" />
        </div>
      </div>
      <div className="body">
        <div className="end">
          <Slider {...settings} className="slider" ref={sliderRef}>
            <img src={image} alt="" />
            <img src={image} alt="" />
          </Slider>
        </div>
        <div className="end">
          <button className="prev-button" onClick={handlePrevClick}>
            <GoChevronLeft style={{ fontSize: "25px" }} />
          </button>
        </div>
        <div className="end">
          <button className="next-button" onClick={handleNextClick}>
            <GoChevronRight style={{ fontSize: "25px" }} />
          </button>
        </div>
      </div>
    </Rootcontainer>
  );
};

export default Body;
