import React from "react";
import Header from "./componets/ Header";
import Body from "./componets/Body";
import Services from "./componets/Services";
import About from "./componets/About";
import Blog from "./componets/Blog";
import Contact from "./componets/Contact";
import Footer from "./componets/Footer";
import "./App.css";
import Color from "./componets/BackgroundColor";
import styled from "@emotion/styled";

const ContainerFruid = styled.div(() => ({
  width: "100%",
}));

const Container = styled.div(() => ({
  width: "1140px",
  margin: "auto",
  "@media (max-width: 1200px)": {
    width: "800px",
  },
  "@media (max-width: 900px)": {
    width: "700px",
  },
  "@media (max-width: 768px)": {
    width: "500px",
  },
  "@media (max-width: 550px)": {
    width: "350px",
  },
  "@media (max-width: 350px)": {
    width: "300px",
  },
}));

const BackgroundColor = styled.div(() => ({
  backgroundColor: Color[0].pink,
}));
const BackgroundColorBlue = styled.div(() => ({
  backgroundColor: Color[1].blue,
}));

function App() {
  return (
    <ContainerFruid>
      <BackgroundColor>
        <Container>
          <Header />
          <Body />
        </Container>
      </BackgroundColor>
      <Container>
        <Services />
      </Container>
      <BackgroundColor>
        <Container>
          <About />
        </Container>
      </BackgroundColor>
      <Container>
        <Blog />
        <Contact />
      </Container>
      <BackgroundColorBlue>
        <Container>
          <Footer />
        </Container>
      </BackgroundColorBlue>
    </ContainerFruid>
  );
}

export default App;
