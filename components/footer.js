import React from "react";
import { LogoImage } from "@/data";

const Footer = () => {
  const { light } = LogoImage;
  return (
    <footer className="footer_1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6 col-md-5">
            <aside className="widget aboutwidget">
              <a href="/">
                <img src={light} alt="" />
              </a>
              <p>
                We are committed to providing our customers exceptional service
                while offering our employees the best training. At the tech
                experienced in Web development, App development, SEO, SMM,
                Graphic Designing, and Paid Marketing.
              </p>
            </aside>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <aside className="widget contact_widgets">
              <h3 className="widget_title">contact</h3>
              <p>
                Flat 3, Sycamore Court,
                <br />
                12 Bowlas Avenue , Sutton Coldfield,
                <br /> B74 2TT, United Kingdom
              </p>
              <p>P: +44 (121) 318-5609</p>
              <br />
              <p>P: +1 (510) 470-6555</p>
              <br />

              <p>
                E: <a href="#">info@atthetech.com</a>
              </p>
            </aside>
          </div>
          <div className="col-lg-3 col-sm-2 col-md-3">
            <aside className="widget social_widget">
              <h3 className="widget_title">social</h3>
              <ul>
                <li>
                  <a href="https://twitter.com/TechAtthe">
                    <i className="fa fa-twitter"></i>Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/atthetec">
                    <i className="fa fa-facebook-square"></i>Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/atthetechs/">
                    <i className="fa fa-instagram"></i>Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/atthetech/">
                    <i className="fa fa-linkedin"></i>LinkedIn
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="copyright">
              © copyright {new Date().getFullYear()} by{" "}
              <a href="#">Atthetech.com</a>
              <a href="/privacy-policy" style={{ marginLeft: 15, color: '#e62b4a' }}>Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
