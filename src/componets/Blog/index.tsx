import React from "react";
import BlogLogo from "../../asset/plug.png";
import Bimage1 from "../../asset/blog1.jpg";
import Bimage2 from "../../asset/blog2.jpg";
import "./index.css";
import BlogCards from "./BlogCards";
import styled from "@emotion/styled";

const Heading = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
  margin: "70px 0px",
}));
const Width50 = styled.div(() => ({
  width: "50%",
  "@media (max-width: 900px)": {
    width: "100%",
  },
}));
const Blog = () => {
  return (
    <div>
      <Heading>
        <h1>blog</h1>
        <img src={BlogLogo} alt="" />
      </Heading>
      <div>
        <div className="blog-container">
          <Width50>
            <BlogCards image={Bimage1} />
          </Width50>
          <Width50>
            <BlogCards image={Bimage2} />
          </Width50>
        </div>
      </div>
    </div>
  );
};

export default Blog;
