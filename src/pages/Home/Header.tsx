import React, { useEffect, useState } from "react";
import logo from "../../asset/logo.png";
import { BsList } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import styled from "@emotion/styled";
import theme from "../../theme/theme";

const RootContainer = styled.div(() => ({
  display: "flex",
  justifyContent: "space-between",
  "@media (max-width: 980px)": {
    flexDirection: "column",
  },
}));
const HeaderText = styled.h1(() => ({
  fontWeight: "bold",
  color: theme.palette.primary.main,
  fontSize: "22px",
  margin: "13px 0px",
}));

const LogoContainer = styled.div(() => ({
  display: "flex",
  alignItems: "center",
}));

const LogoHeader = styled.div(() => ({
  display: "flex",
  justifyContent:'space-between'
}));
const NavbarHeader = styled.div(()=>({
    display:'flex',
    justifyContent:'center',
    listStyle:'none'
}))

const NavbarContact = styled.ul(() => ({
  display: "flex",
  "@media (max-width: 980px)": {
    flexDirection: "column-reverse",
  },
}));

const Navbar = styled.li(() => ({
  color: "black",
  display: "block",
  padding: "10px 18px",
  margin: "10px 15px",
  borderRadius: "35px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#4B208C",
    color: "white",
  },
  "&:nth-child(1)": {
    backgroundColor: "#4B208C",
    color: "white",
  },
  "@media (max-width: 980px)": {
    justifyContent: "center",
  },
}));

const NavbarIcon = styled.div(() => ({
  width: "40px",
  height: "50px",
  display: "none",
  margin: "10px",
  "@media (max-width: 980px)": {
    display: "block",
  },
}));

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
    <RootContainer>
      <LogoHeader>
        <LogoContainer>
          <img
            src={logo}
            alt=""
            width={35}
            height={35}
            style={{ margin: "10px" }}
          />
          <HeaderText>Electrochip</HeaderText>
        </LogoContainer>
        <NavbarIcon onClick={() => setToggale(!toggale)}>
          {toggale ? (
            <AiOutlineClose style={{ width: "30px", height: "40px" }} />
          ) : (
            <BsList style={{ width: "30px", height: "40px" }} />
          )}
        </NavbarIcon>
      </LogoHeader>
      <NavbarHeader>
        {toggale ? (
          <nav>
            <NavbarContact>
              <Navbar>HOME</Navbar>
              <Navbar>ABOUT</Navbar>
              <Navbar>SERVICE</Navbar>
              <Navbar>BLOG</Navbar>
              <Navbar>CONTACT</Navbar>
            </NavbarContact>
          </nav>
        ) : (
          <></>
        )}
      </NavbarHeader>
    </RootContainer>
  );
};

export default Header;
