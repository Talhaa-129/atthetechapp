import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PortfolioData, PortfolioButtons } from "@/data";
import PortfolioCard from "@/components/portfolio-card";
import { useState } from "react";

const PortfolioOne = () => {
  const [active, setActive] = useState({ id: 0, name: 'APP DEVELOPMENT' });

  return (
    <section className="commonSection porfolioPage">
      <Container>
        <Row id="Grid">
          <div className="custom">
            <div className="tabs" >
              <Row >
                <Col lg={12} >
                  <ul
                    className="chooseUs_title"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginBottom: "15px",
                    }}
                  >
                    {PortfolioButtons.map((title, index) => (
                      <li
                        key={index}
                        className={`${active.id === index ? "active" : " "}`}
                        style={{marginBottom:10}}
                      >
                        <a
                          className={`${active.id === index ? "portActive" : ""}`}
                          style={{ fontSize: '16px' }}
                          onClick={() => {
                            setActive({
                              ...active,
                              id: index,
                              name: title.name
                            });
                          }}
                        >
                          {title.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </div>
            <Row>
              {PortfolioData.map((post, index) => {
                if (post.name == active.name)
                  return (
                    <Col lg={4} md={6} sm={12} key={index}>
                      <PortfolioCard data={post} />
                    </Col>
                  )

              })}
            </Row>
          </div>

        </Row>
        <Row>
          <Col lg={12} className="text-center">
            <a className="common_btn red_bg" href="#">
              <span>Load More</span>
            </a>
          </Col>
        </Row>
      </Container>
    </section >
  );
};

export default PortfolioOne;
