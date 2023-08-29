import React, { FC } from "react";
interface BlogCardsProps{
    image:string
}

const BlogCards:FC<BlogCardsProps> = ({image}) => {
  return (
    <div>

        <div className="blogcard">
          <img src={image} alt="" width={"100%"} height={380} />
          <div>
            <h1>Blog Title Goes Here</h1>
            <p className="blog-text">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised
            </p>
          </div>
        </div>

    </div>
  );
};

export default BlogCards;
