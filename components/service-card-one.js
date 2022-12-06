import React from "react";
import Link from "next/link";
import ServiceDetails from "./service-details";
import { useRouter } from "next/router";

const ServiceCardOne = ({ data }) => {
  const { title, text, iconName, url } = data;
  const router = useRouter();

  return (
    <div className="icon_box_2 text-center">
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="iconWrap">
        <i className={iconName}></i>
      </div>
      <div>
        <a
          onClick={() => {
            router.push({
              pathname: "/service-details",
              query: { title: data.title },
            });
          }}
        >
          discover more
        </a>
      </div>
    </div>
  );
};

export default ServiceCardOne;
