import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { URL } from "../store/url/baseurl";
// import { BlogSidebarPost } from "@/data";

const BlogSidebar = () => {

  const blog = useSelector((state) => state.blogs);
  const blogSingle = useSelector((state) => state.oneBlog);

  return (
    <Fragment>
      <aside className="widget search-widget">
        <form method="post" action="#" className="searchform">
          <input type="search" placeholder="Search here..." name="s" id="s" />
        </form>
      </aside>
      <aside className="widget recent_posts">
        <h3 className="widget_title">Latest Posts</h3>
        <div className="meipaly_post_widget">
          {blog?.slice(-3).map(({ heading, Key }, index) => (
            <div className="mpw_item" key={index}>
              <img src={`${URL}/api/images/${Key[0]}`} alt="" />
              <a>{heading}</a>
            </div>
          ))}
        </div>
      </aside>
      <aside className="widget categories">
        <h3 className="widget_title">Categories</h3>
        <div className="meipaly_categorie_widget">
          <ul>
            {blogSingle?.category?.map((values) => {
              return (
                <li>
                  <a href="#">{values}</a>
                </li>
              );
            })}

          </ul>
        </div>
      </aside>
      <aside className="widget">
        <h3 className="widget_title">Tags:</h3>
        <div className="meipaly_tagcloude_widget">
          {blogSingle?.tags?.map((value) => {
            return (
              <div style={{ display: "inline-block", marginLeft: "12px" }}>
                <a href="#">{value}</a>
              </div>
            );
          })}
        </div>
      </aside>
    </Fragment>
  );
};

export default BlogSidebar;
