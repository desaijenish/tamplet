import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import styled from "@emotion/styled";


const Box = styled.div(()=>({
  width:'30px',
  height:'30px',
  backgroundColor:'white',
  borderRadius:'50%',
  margin:'0px 5px',
  '@media (max-width:900px)':{
    padding:10,
    justifyContent:'center'
  }
}))
function SocialMedia() {

  return (
    <div className="flex">
      <Box className="iconBox">
        <center>
          <FaFacebookF className="icon-social" />
        </center>
      </Box>
      <Box className="iconBox">
        <center>
          <AiOutlineTwitter className="icon-social" />
        </center>
      </Box>
      <Box className="iconBox">
        <center>
          <BiLogoLinkedin className="icon-social" />
        </center>
      </Box>
      <Box className="iconBox">
        <center>
          <AiFillInstagram className="icon-social" />
        </center>
      </Box>
    </div>
  );
}

export default SocialMedia;
