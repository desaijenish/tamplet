import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import styled from "@emotion/styled";

const Contact = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
}));
const Container = styled.div(() => ({
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
const Width30 = styled.div(() => ({
  width: "33.33%",
  "@media (max-width:900px)": {
    width: "100%",
  },
}));
function FooterContact() {
  return (
    <Container>
      <Width30>
        <Contact>
          <MdOutlineLocationOn className="icon color-white" />
          <p style={{ marginTop: "8px" }} className="color-white ">
            Passages of Lorem Ipsum available
          </p>
        </Contact>
      </Width30>
      <Width30>
        <Contact>
          <BsFillTelephoneFill className="icon color-white" />
          <p style={{ marginTop: "8px" }} className="color-white">
            Call : +012334567890
          </p>
        </Contact>
      </Width30>
      <Width30>
        <Contact>
          <MdEmail className="icon color-white" />
          <p style={{ marginTop: "8px" }} className="color-white">
            mail@domain.com
          </p>
        </Contact>
      </Width30>
    </Container>
  );
}

export default FooterContact;
