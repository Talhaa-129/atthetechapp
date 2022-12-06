import React from "react";
// import Link from "next/link";
import { useRouter } from "next/router"
import * as action from "../store/myreducer";
import { useDispatch } from "react-redux";
import { URL } from "store/url/baseurl";

const BlogCard = ({ data }) => {
  const router = useRouter()
  const dispatch = useDispatch();
  const { heading, tags, category, Key, created_date } = data;

  const onHandle = (data) => {
    dispatch(action.Blog(data));
  };

  let head = heading?.replace(/ /g, "-")

  return (
    <div className="latestBlogItem">
      <div className="lbi_thumb">
        {Key && <img src={`${URL}/api/images/${Key[0]}`} alt={"image"} />}
      </div>
      {/* <Link href="/blog-single" > */}
      <div
        className="lbi_details"
        onClick={() => {
          onHandle(data);
        }}
      >
        <a className="lbid_date">{created_date}</a>
        <h2>
          {/* <Link> */}
          <a onClick={() => {
            router.push({
              pathname: "/blog-single",
              query: head
            })
          }}>{heading}</a>
          {/* </Link> */}
        </h2>
        {/* <Link> */}
        <a className="learnM">Learn More</a>
        {/* </Link>  */}
      </div>
      {/* </Link> */}
    </div>
  );
};

export default BlogCard;
