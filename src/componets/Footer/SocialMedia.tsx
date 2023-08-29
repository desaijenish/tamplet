import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";

function SocialMedia() {
  return (
    <div className="flex">
      <div className="iconBox">
        <center>
          <FaFacebookF className="icon-social" />
        </center>
      </div>
      <div className="iconBox">
        <center>
          <AiOutlineTwitter className="icon-social" />
        </center>
      </div>
      <div className="iconBox">
        <center>
          <BiLogoLinkedin className="icon-social" />
        </center>
      </div>
      <div className="iconBox">
        <center>
          <AiFillInstagram className="icon-social" />
        </center>
      </div>
    </div>
  );
}

export default SocialMedia;
