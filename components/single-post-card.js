import React, { Fragment } from "react";
import AuthorCard from "@/components/author-card";
import Comments from "@/components/comments";
import { useSelector } from "react-redux";
import { URL } from "../store/url/baseurl";
import { useRouter } from 'next/router'
// import blogDetailsImage from "@/images/blog/7.jpg";

const SinglePostCard = () => {
  const router = useRouter()
  const blog = useSelector((state) => state.oneBlog);

  // document.write(router.asPath.replace("/%20/g", '-'))
  return (
    <Fragment>
      <div className="single_blog">
        <div className="blog_thumb">
          {blog?.Key?.length > 1 && (
            <img src={`${URL}/api/images/${blog?.Key[1]}`} alt="" />
          )}
        </div>
        <div className="blog_headings">
          <span className="blog_date">20 nov</span>
          <h2>{blog?.heading}</h2>
          <p className="blog_metas">
            <a href="#">By layerdrops</a>-<a href="#">30 Likes</a>
            <a href="#">2 Comments</a>
          </p>
        </div>
        <div className="blog_details">
          <div dangerouslySetInnerHTML={{ __html: blog?.content }} />
        </div>
        <AuthorCard />
        <Comments />
      </div>
    </Fragment>
  );
};

export default SinglePostCard;
