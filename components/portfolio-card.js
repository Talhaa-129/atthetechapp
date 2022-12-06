import React from "react";
import { useRouter } from "next/router";
const PortfolioCard = ({ data }) => {
  const router = useRouter();
  const { image, title, categories, url } = data;

  const onRoute = () => {
    router.push({ pathname: '/portfolio-details', query: { title: title } })
  }
  return (
    <div className={`singlefolio`}>
      <img src={image} alt={title} />
      <div className="folioHover">
        <a className="cate" href="#">
          {categories.map((cat) => cat + ", ")}
        </a>
        <h4>
          {/* <a href={url}>{title}</a> */}
          <a onClick={onRoute} style={{ lineHeight: 1.2 }}>{title}</a>
        </h4>
      </div>
    </div>
  );
};

export default PortfolioCard;
