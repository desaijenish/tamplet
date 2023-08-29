import React from 'react';
import { MdOutlineLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import styled from '@emotion/styled';

const Contact = styled.div( () => ({
    display:'flex',
    justifyContent:'center',
  }) );
function FooterContact() {
  return (
    <div  className="footer-container">
      <div className="w-33">
          <Contact >
            <MdOutlineLocationOn className="icon color-white" />
            <p style={{ marginTop: "8px" }} className="color-white ">
              Passages of Lorem Ipsum available
            </p>
          </Contact>
        </div>
        <div className="w-33">
          <Contact>
            <BsFillTelephoneFill className="icon color-white" />
            <p style={{ marginTop: "8px" }} className="color-white">
              Call : +012334567890
            </p>
          </Contact>
        </div>
        <div className="w-33">
          <Contact>
            <MdEmail className="icon color-white" />
            <p style={{ marginTop: "8px" }} className="color-white">
              mail@domain.com
            </p>
          </Contact>
        </div>
    </div>
  )
}

export default FooterContact
