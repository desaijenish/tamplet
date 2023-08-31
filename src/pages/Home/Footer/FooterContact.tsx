import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import styled from "@emotion/styled";

const Contact = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
}));
const RootContainer = styled.div(() => ({
  display: "flex",
  gap: "50px",
  justifyContent: "space-between",
  width: "100%",
  "@media (max-width:900px)": {
    flexDirection: "column",
    justifyContent: "center",
    gap: "0px",
    rowGap: "10px",
  },
}));
const FooterContainer = styled.div(() => ({
  width: "33.33%",
  "@media (max-width:900px)": {
    width: "100%",
  },
}));

const Icon = styled.div(() => ({
  color: "white",
  fontSize: "40px",
  margin: " 0px 0px",
  "@media (max-width:900px)": {
    fontSize: "35px",
  },
}));
function FooterContact() {
  return (
    <RootContainer>
      <FooterContainer>
        <Contact>
          <Icon>
            <MdOutlineLocationOn />
          </Icon>
          <p style={{ marginTop: "8px",color:'white' }} >
            Passages of Lorem Ipsum available
          </p>
        </Contact>
      </FooterContainer>
      <FooterContainer>
        <Contact>
          <Icon>
            <BsFillTelephoneFill  />
          </Icon>
          <p style={{ marginTop: "8px",color:'white' }} >
            Call : +012334567890
          </p>
        </Contact>
      </FooterContainer>
      <FooterContainer>
        <Contact>
          <Icon>
          <MdEmail />
          </Icon>
          <p style={{ marginTop: "8px",color:'white' }} >
            mail@domain.com
          </p>
        </Contact>
      </FooterContainer>
    </RootContainer>
  );
}

export default FooterContact;
