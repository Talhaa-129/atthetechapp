import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import ServiceDetails from "@/components/service-details";
import CallToActionOne from "@/components/call-to-action-one";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";
import { useSelector } from "react-redux";

const ServiceDetailsPage = () => {
  const service = useSelector((state) => state.service)
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle={service?.title}>
          <HeaderOne />
          <PageBanner title={service?.title} name="Service" />
          <ServiceDetails />
          <CallToActionOne extraClassName="ready" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default ServiceDetailsPage;
