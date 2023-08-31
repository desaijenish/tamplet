import React from "react";
import AboutLogo from "../../asset/plug.png";

import image1 from "../../asset/about-img1.jpg";
import image2 from "../../asset/about-img2.jpg";
import styled from "@emotion/styled";

const RootContainer = styled.div(() => ({
  display: "flex",
  justifyContent: "space-between",
  margin: " 0 auto ",
  padding: "150px 0px 80px",
  "@media (max-width: 900px)": {
    flexDirection: "column",
    alignItems: "center",
    padding: "19px 0px 10px ",
  },
}));

const AboutContainer = styled.div(() => ({
  width: "50%",
  "@media (max-width: 900px)": {
    width: "100%",
  },
}));

const Heading = styled.h1(() => ({
  fontSize: "2rem",
  fontWeight: 800,
}));

const HeadingContainer = styled.div(() => ({
  display: "flex",
  margin: "20px 0px",
}));

const AboutText = styled.p(() => ({
  margin: "14px 0px",
  lineHeight: "25px",
  wordSpacing: "2px",
  fontSize: "17px",
  "@media (max-width: 900px)": {
    padding: "0px",
    margin: "0px",
    lineHeight: "20px",
    wordSpacing: "1px",
    fontSize: "15px",
  },
}));
const Button = styled.button(() => ({
  color: "white",
  textDecoration: "none",
  backgroundColor: "#4b208c",
  border: "0px",
  padding: "15px 50px",
  borderRadius: "10px",
  marginTop: "35px",
  fontSize: "17px",
  cursor: "pointer",
  "@media (max-width: 550px)": {
    padding: "12px 40px",
    borderRadius: "35px",
    marginTop: "5px",
    fontSize: "12px",
  },
}));
const Image1 = styled.img(() => ({
  width: "70%",
  margin: "-100px 0px 0px 80px",
  "@media (max-width: 900px)": {
    width: "70%",
    margin: "30px 0px 0px 0px ",
  },
  borderRadius: "50%",
  border: "5px solid #7b57b2",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));
const Image2 = styled.img(() => ({
  width: "40%",
  margin: "-60px 0px 0px 342px",
  "@media (max-width: 900px)": {
    width: "40%",
    justifyContent: "end",
  },
  "@media (max-width: 600px)": {
    margin: "-10px 0px 0px 100px",
  },
  borderRadius: "50%",
  border: "5px solid #7b57b2",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const About = () => {
  return (
    <RootContainer>
      <AboutContainer>
        <HeadingContainer>
          <Heading>About Us</Heading>
          <img src={AboutLogo} alt="" />
        </HeadingContainer>
        <AboutText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed doeiusmod
          tempor incididunt ut labore et dolore <br/> magna aliqua. Utenim ad minim
          veniam, quis nostrud <br/> exercitation ullamco laborisnisi ut aliquip ex ea
          commodo <br/> consequat. Duis aute irure dolorin reprehenderit in <br/>voluptates
          velit
        </AboutText>
        <Button>Read More</Button>
      </AboutContainer>
      <AboutContainer>
        <Image1 src={image1} />
        <Image2 src={image2} alt="" />
      </AboutContainer>
    </RootContainer>
  );
};

export default About;
