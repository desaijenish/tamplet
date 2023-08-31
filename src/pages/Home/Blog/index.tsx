import React from "react";
import BlogLogo from "../../../asset/plug.png";
import Bimage1 from "../../../asset/blog1.jpg";
import Bimage2 from "../../../asset/blog2.jpg";
import BlogCards from "./BlogCards";
import styled from "@emotion/styled";

const Heading = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
  margin: "70px 0px",
}));
const BlogContainer = styled.div(() => ({
  "@media (max-width: 900px)": {
    width: "100%",
  },
}));
const Container = styled.div( () => ({
  display:'flex',
  justifyContent:'space-between',
  margin:'0 auto',
  gap:'20px',
  "@media (max-width: 900px)": {
    flexDirection:'column',
    alignItems:'center',
  },
}))
const Blog = () => {
  return (
    <div>
      <Heading>
        <h1>blog</h1>
        <img src={BlogLogo} alt="" />
      </Heading>
      <div>
        <Container >
          <BlogContainer>
            <BlogCards image={Bimage1} />
          </BlogContainer>
          <BlogContainer>
            <BlogCards image={Bimage2} />
          </BlogContainer>
        </Container>
      </div>
    </div>
  );
};

export default Blog;
