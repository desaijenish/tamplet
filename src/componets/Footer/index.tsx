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

// const Contact = styled.div( () => ({
//   display:'flex',
//   justifyContent:'center',
// }) );

const Footer = () => {
  return (
    <RootContainer>
      <div className="footer-container">
        <FooterContact/>
      </div>
      <div className="footer-container">
        <div className="footer-email">
          <span>
            <input
              type="text"
              className="inputFooter"
              placeholder="Enter your email"
            />
          </span>
          <span className="center-footer">
            <button
              className="button-footer button"
              style={{ borderRadius: "0px" }}
            >
              SUBSCRIBE
            </button>
          </span>
        </div>
        <div className="w-20 flex" style={{ margin: "43px 0px" }}>
          <SocialMedia />
        </div>
      </div>
    </RootContainer>
  );
};

export default Footer;
