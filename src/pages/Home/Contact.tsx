import React from "react";
import centactLogo from "../../asset/plug.png";
import styled from "@emotion/styled";
import theme from "../../theme/theme";

const ContactContainer = styled.div(() => ({
  width: "50%",
  "@media (max-width: 900px)": {
    width: "100%",
  },
}));
const Heading = styled.div(() => ({
  display: "flex",
  margin: "70px 0px",
}));
const InputFrome = styled.input( ()=>({
  fontSize:'15px',
  width:"calc(100% - 25px)",
  border:'none',
  height:'59px',
  marginBottom:'25px',
  paddingLeft:'25px',
  outline:"0px",
  color:' rgb(16, 16, 16)',
  boxShadow:' rgba(0, 0, 0, 0.29) 1px 5px 4px 1px',
}) )
const SendButton = styled.input( ()=>({
  width:'30%',
  color:'white',
  borderRadius:'0px',
  height:'50px',
  backgroundColor:theme.palette.primary.main,
  border:'0px'
}))

const Contact = () => {
  return (
    <div>
      <div>
        <Heading>
          <h1>Contact Us</h1>
          <img src={centactLogo} alt="" />
        </Heading>
        <ContactContainer>
          <form>
            <InputFrome className="inputText" type="text" placeholder="Name" />
            <InputFrome className="inputText" type="email" placeholder="Email" />
            <InputFrome
              className="inputText"
              type="number"
              placeholder="PhoneNsumber"
            />
            <InputFrome
              className="inputText"
              type="text"
              placeholder="Massege"
              style={{ height: "130px" }}
            />
            <SendButton
              type="submit"
              value="send"
            />
          </form>
        </ContactContainer>
      </div>
    </div>
  );
};

export default Contact;
