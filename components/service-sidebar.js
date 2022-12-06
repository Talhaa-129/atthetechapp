import React, { Fragment } from "react";
import { useRouter } from "next/router";

const ServiceSidebar = ({ data }) => {
  const router = useRouter();

  return (
    <Fragment>
      <aside className="widget categories">
        <h3 className="widget_title">Services</h3>
        <div className="meipaly_categorie_widget">
          <ul>
            {data.map((values) => {
              return (
                <li
                  onClick={() => {
                    router.push({
                      pathname: "/service-details",
                      query: { title: values.title },
                    });
                  }}
                >
                  <a>{values.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
      <aside className="widget categories">
        <div className="meipaly_services_help">
          <h4>need AttheTech help?</h4>
          <p>
            Prefer speaking with a human to filling out a form? call corporate
            office and we will connect you with a team member who can help.
          </p>
          <h2>+44 (121) 318-5609</h2>
          <br />
          <h2>+1(510)470-6555</h2>
        </div>
      </aside>
    </Fragment>
  );
};

export default ServiceSidebar;
