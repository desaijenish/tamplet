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

const Width50 = styled.div(() => ({
  width: "50%",
  "@media (max-width:1000px)": {
    width: "100%",
    marginTop: "20px",
  },
}));
const Heading = styled.h1(() => ({
  fontSize: "2.9rem",
  "@media (max-width:1000px)": {
    fontSize: "1.9rem",
  },
}));

const Text = styled.p(() => ({
  margin: "14px 0px ",
  lineHeight: "25px",
  wordSpacing: "2px",
  fontSize: "17px",
  "@media (max-width:500px)": {
    margin: "14px 0px",
    lineHeight: "20px",
    wordSpacing: "1px",
    fontSize: "14px",
  },
}));
const End = styled.div(()=>({
  display:'flex',
  justifyContent:"end",
  "@media (max-width:1000px)": {
    justifyContent:"center",
  },
}) )
const PrevButton = styled.button(()=>({
  width:'45px',
  height:'45px',
  border:'none',
  borderRadius:'100%',
  backgroundColor:'white',
  margin:'-32px 150px 0px 0px',
  zIndex:1,
  "@media (max-width:1000px)": {
    margin:'-25px 0px 0px 150px',
  },
  "@media (max-width:500px)": {
    margin:'-29px 0px 0px 70px',
    width:'35px',
    height:'35px',
    fontSize:'10px',
  },
}))
const NextButton = styled.button(()=>({
  width:'45px',
  height:'45px',
  border:'none',
  borderRadius:'100%',
  backgroundColor:'#4b208c',
  margin:'-65px 105px 0px 0px',
  zIndex:1,
  "@media (max-width:1000px)": {
    margin:'-65px 0px 0px 230px',
  },
  "@media (max-width:500px)": {
    margin:'-50px 0px 0px 130px',
    width:'35px',
    height:'35px',
    fontSize:'10px',
  },
}))
const Sliders = styled(Slider)( ()=>({
  position:'relative',
  width:'80%',
  overflow:'hidden',
  borderRadius:'50%',
  border:'8px solid #4b208c'
}) )

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
      <Width50>
        <div style={{ margin: "40px 0px" }}>
          <Heading>
            ELECTRICAL
            <br />
            SERVICE
            <br />
            PROVIDERS
          </Heading>
          <Text>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem
          </Text>
          <Button name="Contact Us" />
        </div>
      </Width50>
      <Width50>
        <End>
          <Sliders {...settings} ref={sliderRef}>
            <img src={image} alt="" width={'100%'}/>
            <img src={image} alt=""  width={'100%'}/>
          </Sliders>
        </End>
        <End >
          <PrevButton  onClick={handlePrevClick}>
            <GoChevronLeft style={{ fontSize: "25px" }} />
          </PrevButton>
        </End>
        <End>
          <NextButton onClick={handleNextClick}>
            <GoChevronRight style={{ fontSize: "25px" }} />
          </NextButton>
        </End>
      </Width50>
    </Rootcontainer>
  );
};

export default Body;
