import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@/components/section-title";
import { TeamOneData } from "@/data";
import TeamCard from "@/components/team-card";

const TeamCarousel = () => {
  const { sectionContent, posts } = TeamOneData;

  return (
    <section className="commonSection team">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <SectionTitle data={sectionContent} />
          </Col>
        </Row>
      </Container>
      <div className="team_maindiv">
        {posts.map((post, index) => (
          <div style={{ padding: 10, display: 'inline-block' }}>
            <TeamCard data={post} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamCarousel;
