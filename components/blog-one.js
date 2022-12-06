import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Paginations from "@/components/blog-pagination";
import BlogCard from "@/components/blog-card";
import { useDispatch, useSelector } from "react-redux";


const BlogOne = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(6)

  const blogs = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch({ type: "GET_BLOG" });
  }, []);

  const indexofLastPost = currentPage * postPerPage;
  const indexofFirstPost = indexofLastPost - postPerPage;
  const currentPosts = blogs.slice(indexofFirstPost, indexofLastPost);
  // console.log(blogs,'blogs')
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <section className="commonSection blogPage">
      <Container>
        <Row>
          {currentPosts.map((post, index) => (
            // console.log(post)
            <Col lg={4} sm={12} md={6} key={index}>
              <BlogCard data={post} />
            </Col>
          ))}
        </Row>
        <Paginations postPerPage={postPerPage} totalPosts={blogs?.length} paginate={paginate} currentPage={currentPage} />
      </Container>
    </section>
  );
};

export default BlogOne;
