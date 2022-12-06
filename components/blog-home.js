import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@/components/section-title";
import BlogCard from "@/components/blog-card";
import { BlogHomeSection } from "@/data";
import { useDispatch, useSelector } from "react-redux";


const BlogHome = () => {
  const dispatch = useDispatch();

  const blogs = useSelector(state => state.blogs)

  useEffect(() => {
    dispatch({ type: "GET_BLOG" });
  }, []);

  return (
    <section className="commonSection blog">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <SectionTitle data={BlogHomeSection} />
          </Col>
        </Row>
        <Row>
          {blogs?.slice(-3).map((post, index) => (
            <Col lg={4} sm={12} md={6} key={index}>
              <BlogCard data={post} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogHome;
