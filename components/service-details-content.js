import React from "react";
import { useSelector } from "react-redux";
// import serviceS1 from "@/images/s1.jpg";
// import serviceS2 from "@/images/s2.jpg";

const ServiceDetailsContent = () => {
  const data = useSelector((state) => state.service)
  const { title, text, content, serviceTypes, image , heading , heading2, paragraph , servicesTypes , paragraph2, heading4, servicesTypes1, heading41, servicesTypes2, heading42, servicesTypes3, } = data;
  return (
    <div className="serviceArea">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>
        {text}
      </p>
      <div className="row gaping">
        <div className="col-lg-6 col-sm-12 col-md-6">
          <img src={image} alt="" />
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6">
          <h3 >{heading}</h3>
          <p style={{ marginTop: -20 }}>
           {paragraph}
          </p>
          {serviceTypes?.map((values) => {
            return (
              <ul>
                <li>
                  <i className="fa fa-check-square"></i>{values}
                </li>

              </ul>
            )
          })}

        </div>
      </div>
      <div style={{ marginTop: '30px' }}>
        <p style={{fontWeight:"bold"}}>
          {content}
        </p>
        <br/>
        <h3 >{heading2}</h3>
        {servicesTypes?.map((values) => {
            return (
              <ul>
                <li>
                  <i className="fa fa-check-square"></i>{values}
                </li>

              </ul>
            )
          })}
          <br/>
          <p>
          {paragraph2}
        </p>
      </div>
      <div class="container">
        <div class="row">

      <div class="col-lg-4 col-md-6 col-sm-12">

        <h4>{heading4}</h4>
        {servicesTypes1?.map((values) => {
            return (
              <ul>
                <li>
                  <i className="fa fa-check-square"></i>{values}
                </li>

              </ul>
            )
          })}
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12">

        <h4>{heading41}</h4>
        {servicesTypes2?.map((values) => {
            return (
              <ul>
                <li>
                  <i className="fa fa-check-square"></i>{values}
                </li>

              </ul>
            )
          })}
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12">

        <h4>{heading42}</h4>
        {servicesTypes3?.map((values) => {
            return (
              <ul>
                <li>
                  <i className="fa fa-check-square"></i>{values}
                </li>

              </ul>
            )
          })}
      </div>

      
      </div>
      </div>

    </div>
  );
};

export default ServiceDetailsContent;
