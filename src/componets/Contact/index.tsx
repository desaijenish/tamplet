import React from "react";
import centactLogo from "../../asset/plug.png";
import "./index.css";
import styled from "@emotion/styled";

const Width50 = styled.div(() => ({
  width: "50%",
  "@media (max-width: 900px)": {
    width: "100%",
  },
}));
const Heading = styled.div(() => ({
  display: "flex",
  margin: "70px 0px",
}));

const Contact = () => {
  return (
    <div>
      <div>
        <Heading>
          <h1>Contact Us</h1>
          <img src={centactLogo} alt="" />
        </Heading>
        <Width50>
          <form>
            <input className="inputText" type="text" placeholder="Name" />
            <input className="inputText" type="email" placeholder="Email" />
            <input
              className="inputText"
              type="number"
              placeholder="PhoneNsumber"
            />
            <input
              className="inputText"
              type="text"
              placeholder="Massege"
              style={{ height: "130px" }}
            />
            <input
              type="submit"
              value="send"
              className="button"
              style={{ borderRadius: "0px" }}
            />
          </form>
        </Width50>
      </div>
    </div>
  );
};

export default Contact;
