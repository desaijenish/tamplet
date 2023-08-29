import React from "react";
import image from "../../asset/plug.png";
import s1 from "../../asset/s1.png";
import s2 from "../../asset/s2.png";
import s3 from "../../asset/s3.png";
import s4 from "../../asset/s4.png";
import s5 from "../../asset/s5.png";
import Card from "./Card";
import "./index.css";
import Button from "../Button";
import styled from "@emotion/styled";

const Heading = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
  margin: "50px 0px",
}));

const Services = () => {
  return (
    <div>
      <Heading>
        <h1>Our Services</h1>
        <img src={image} alt="" />
      </Heading>
      <div>
        <div className="flex cardcontainer">
          <Card title="Equipment installation" image={s1} />
          <Card title="Windmill Energy" image={s2} />
          <Card title="Equipment Maintenance" image={s3} />
          <Card title="Offshore Engineering  " image={s4} />
          <Card title="Electrical Wiring" image={s5} />
        </div>
        <center style={{ margin: "40px 0px" }}>
          <Button name="Read More" />
        </center>
      </div>
    </div>
  );
};

export default Services;
