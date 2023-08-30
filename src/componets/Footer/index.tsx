import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import SocialMedia from "./SocialMedia";
import styled from "@emotion/styled";
import "./index.css";
import FooterContact from "./FooterContact";

const RootContainer = styled.div( () =>({
  margin: "100px 0px 0px",
   padding: "100px 0px",
}) )

const Container = styled.div( ()=>({
  display:'flex',
  gap:'50px',
  justifyContent:'space-between',
  width:"100%",
  "@media (max-width:900px)":{
    flexDirection:"column",
    justifyContent:'center',
    gap:'0px',
    rowGap:'10px'
  }
}))
const Email = styled.div( ()=>({
  width:'80%',
  "@media (max-width:900px)":{
    width:'100%'
  }
}))
const Input = styled.input(()=>({
  margin:'20x 20px',
  backgroundColor:'rgb(255, 255, 255)',
  border:'none',
  width:'60%',
  height:'30px',
  outline:'0px',
  padding:'10px',
  "@media (max-width:900px)":{
    width:'calc(100% - 20px)',
    margin:'0px',
    marginTop:'20px'
  }
}) )
const Center = styled.span(()=>({
  display:'flex',
  justifyContent:'center'
}) )
const Button = styled.button(() => ({
  color: "white",
  textDecoration: "none",
  backgroundColor: "#4b208c",
  border: "0px",
  padding: "15px 50px",
  borderRadius: "0px",
  fontSize: "17px",
  cursor: "pointer",
  width:'25%',
  marginLeft:'-20px',
  "@media (max-width: 550px)": {
    padding: "12px 40px",
    borderRadius: "35px",
    fontSize: "12px",
    width:'70%',
    margin:'10px 6px'
  },
}));
const Footer = () => {
  return (
    <RootContainer>
      <Container>
        <FooterContact/>
      </Container>
      <Container >
        <Email>
          <span>
            <Input
              type="text"
              placeholder="Enter your email"
            />
          </span>
          <Center >
            <Button
              className="button-footer button"
              style={{ borderRadius: "0px" }}
            >
              SUBSCRIBE
            </Button>
          </Center>
        </Email>
        <div className="w-20 flex" style={{ margin: "43px 0px" }}>
          <SocialMedia />
        </div>
      </Container>
    </RootContainer>
  );
};

export default Footer;
