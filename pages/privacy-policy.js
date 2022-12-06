import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import SearchContextProvider from "context/search-context";
import MenuContextProvider from "context/menu-context";
import HeaderOne from "@/components/header-one";
import Privacy from "@/components/privacy";


const PrivacyPolicy = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Privacy | At the Tech">
          <HeaderOne />
          <PageBanner title="Privacy-Policy" name="Privacy" />
          <Privacy />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default PrivacyPolicy;
