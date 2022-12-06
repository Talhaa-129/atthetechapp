import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PortfolioDetailsData } from "@/data";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import * as action from '../store/myreducer';

const ProtfolioDetails = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const portfolio = useSelector(state => state.portfolio);

  useEffect(() => {
    for (let i = 0; i < PortfolioDetailsData.length; i++) {
      if (PortfolioDetailsData[i].title == router.query.title) {
        dispatch(action.Portfolio(PortfolioDetailsData[i]))
      }
    }
  }, [router])

  const {
    gallery,
    title,
    text,
    client,
    categories,
    date,
    socials
  } = portfolio;
  return (
    <section className="commonSection porfolioDetail">
      <Container>
        <Row>
          <Col lg={8} md={7} sm={12}>
            {gallery?.map(({ image }, index) => (
              <div className="portDetailThumb" key={index}>
                <img alt="portDetailThumb" src={image} />
              </div>
            ))}
          </Col>
          <Col lg={4} md={5} sm={12}>
            <div className="singlePortfoio_content">
              <h3 style={{ lineHeight: 1.2 }}>{title}</h3>
              <p>{text}</p>
            </div>
            <div className="singlePortfoio_content">
              <h4>Clients:</h4>
              <p>{client}</p>
            </div>
            <div className="singlePortfoio_content">
              <h4>Category:</h4>
              <p>
                {categories?.map(({ name, url }, index) => (
                  <a key={index} href={url}>
                    {name},
                  </a>
                ))}
              </p>
            </div>
            <div className="singlePortfoio_content">
              <h4>Date:</h4>
              <p>{date}</p>
            </div>
            <div className="singlePortfoio_content">
              <h4>Follow:</h4>
              <ul>
                {socials?.map(({ name, url }, index) => (
                  <li key={index}>
                    <a href={url}>{name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProtfolioDetails;
