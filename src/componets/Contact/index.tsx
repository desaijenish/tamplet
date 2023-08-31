import React from "react";
import centactLogo from "../../asset/plug.png";
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
const Input = styled.input( ()=>({
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
            <Input className="inputText" type="text" placeholder="Name" />
            <Input className="inputText" type="email" placeholder="Email" />
            <Input
              className="inputText"
              type="number"
              placeholder="PhoneNsumber"
            />
            <Input
              className="inputText"
              type="text"
              placeholder="Massege"
              style={{ height: "130px" }}
            />
            <Input
              type="submit"
              value="send"
              className="button "
              style={{ borderRadius: "0px",width:'30%',color:'white' }}
            />
          </form>
        </Width50>
      </div>
    </div>
  );
};

export default Contact;
