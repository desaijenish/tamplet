import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import styled from "@emotion/styled";
import theme from "../../../theme/theme";

const CircleIcon = styled.div(() => ({
  width: "30px",
  height: "30px",
  backgroundColor: "white",
  borderRadius: "50%",
  margin: "0px 5px",
  "@media (max-width:900px)": {
    padding: 10,
    justifyContent: "center",
  },
}));

const RootContainer = styled.div(() => ({
  display: "flex",
}));

const Icon = styled.div(() => ({
  marginTop: "8px",
  fontSize: "17px",
  color: theme.palette.primary.light,
}));
function SocialMedia() {
  return (
    <RootContainer>
      <CircleIcon>
        <center>
          <Icon>
            <FaFacebookF />
          </Icon>
        </center>
      </CircleIcon>
      <CircleIcon>
        <center>
          <Icon>
            <AiOutlineTwitter />
          </Icon>
        </center>
      </CircleIcon >
      <CircleIcon >
        <center>
          <Icon>
            <BiLogoLinkedin />
          </Icon>
        </center>
      </CircleIcon>
      <CircleIcon>
        <center>
          <Icon>
            <AiFillInstagram />
          </Icon>
        </center>
      </CircleIcon>
    </RootContainer>
  );
}

export default SocialMedia;
