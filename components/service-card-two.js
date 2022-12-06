import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const ServiceCardTwo = ({ data }) => {
  const router = useRouter()
  const { url, iconName, title } = data;
  return (
    <div onClick={() => {
      router.push({
        pathname: "/service-details",
        query: { title: title },
      });
    }}>
      <a className="icon_box_1 text-center">
        <div className="flipper">
          <div className="front">
            <i className={iconName}></i>
            <h3>{title}</h3>
          </div>
          <div className="back">
            <i className={iconName}></i>
            <h3>{title}</h3>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ServiceCardTwo;
