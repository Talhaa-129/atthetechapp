import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServiceSidebar from "@/components/service-sidebar";
import ServiceDetailsContent from "@/components/service-details-content";
import { ServicePostData } from "@/data";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import * as action from '../store/myreducer'

const ServiceDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch()

  for (let i = 0; i < ServicePostData.length; i++) {
    if (ServicePostData[i].title == router.query.title) {
      dispatch(action.Service(ServicePostData[i]))

    }
  }

  return (
    <section className="commonSection service_detail">
      <Container>
        <Row>
          <Col lg={8} md={12}>
            <ServiceDetailsContent />
          </Col>
          <Col lg={4} md={12} className="sidebar">
            <ServiceSidebar data={ServicePostData} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceDetails;
