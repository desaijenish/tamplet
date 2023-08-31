import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";
import Services from "./Services";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import theme from "../../theme/theme";
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
  backgroundColor: theme.palette.secondary.main,
}));
const BackgroundColorBlue = styled.div(() => ({
  backgroundColor: theme.palette.primary.light,
}));
const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
