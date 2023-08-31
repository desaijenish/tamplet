import styled from "@emotion/styled";
import React, { FC } from "react";
interface BlogCardsProps{
    image:string
}

const BlogCard = styled.div( () => ({
  width:'100%',
  boxShadow:"0 0 10px 0 rgba(0,0,0,.29)",
}) )
const Heading = styled.h1( ()=>({
  fontSize:'1.25rem',
  margin:'10px 0px'
}) )
const Text = styled.p(()=>({
  wordSpacing:'2px',
  fontSize:'17px',
  lineHeight:'24px'
}) )
const BlogCards:FC<BlogCardsProps> = ({image}) => {
  return (
    <div>
        <BlogCard >
          <img src={image} alt="" width={"100%"} height={380} />
          <div style={{padding:'10px 30px 10px'}}>
            <Heading>Blog Title Goes Here</Heading>
            <Text >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised
            </Text>
          </div>
        </BlogCard>
    </div>
  );
};

export default BlogCards;
