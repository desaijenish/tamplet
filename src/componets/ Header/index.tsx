import React, { useEffect, useState } from "react";
import logo from "../../asset/logo.png";
import { BsList } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import styled from "@emotion/styled";

const RootContainer = styled.div(() => ({
  display: "flex",
  justifyContent: "space-between",
  "@media (max-width: 980px)": {
    flexDirection: "column",
  },
}));
const Heading = styled.h1(() => ({
  fontWeight: "bold",
  color: "#4b208c",
  fontSize: "22px",
  margin: "13px 0px",
}));

const Flex = styled.div( () => ({
  display:'flex'
}))

const NavbarFlex = styled.ul( () =>({
  display:'flex',
  "@media (max-width: 980px)": {
    flexDirection:'column-reverse',
  },
}))

const Navbar = styled.li( () => ({
  color:'black',
  display:'block',
  padding: '10px 18px',
  margin:'10px 15px',
  borderRadius:'35px',
  cursor:'pointer',
  '&:hover':{
   backgroundColor:'#4B208C',
   color:'white'
  },
  '&:nth-child(1)':{
    backgroundColor:'#4B208C',
   color:'white'
  },
  "@media (max-width: 980px)": {  
    justifyContent:'center',
  },
}) )

const NavbarIcon = styled.div( () =>({
  width:'40px',
  height:'50px',
  display:'none',
  margin:'10px',
  "@media (max-width: 980px)": {
    display:'block',
  },
}) )

const Header = () => {
  const [toggale, setToggale] = useState<boolean>(true);
  useEffect(() => {
    if (window.innerWidth <= 980) {
      setToggale(false);
    } else if (window.innerWidth <= 1400) {
      setToggale(true);
    }
  }, []);

  return (
    <>
      <RootContainer>
        <Flex  style={{justifyContent:"space-between"}}>
          <Flex >
            <img
              src={logo}
              alt=""
              width={35}
              height={35}
              style={{ margin: "10px" }}
            />
            <Heading>Electrochip</Heading>
          </Flex>
          <NavbarIcon onClick={() => setToggale(!toggale)}>
            {toggale ? (
              <AiOutlineClose style={{ width: "30px", height: "40px" }} />
            ) : (
              <BsList style={{ width: "30px", height: "40px" }} />
            )}
          </NavbarIcon>
        </Flex>
        <Flex  style={{justifyContent:'center'}}>
          {toggale ? (
            <nav >
              <NavbarFlex >
                <Navbar>HOME</Navbar>
                <Navbar>ABOUT</Navbar>
                <Navbar>SERVICE</Navbar>
                <Navbar>BLOG</Navbar>
                <Navbar>CONTACT</Navbar>
              </NavbarFlex>
            </nav>
          ) : (
            <></>
          )}
        </Flex>
      </RootContainer>
    </>
  );
};

export default Header;
