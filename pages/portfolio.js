import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import PortfolioOne from "@/components/portfolio-one";
import MenuContextProvider from "context/menu-context";
import SearchContextProvider from "context/search-context";
import HeaderOne from "@/components/header-one";

const PortfolioPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Portfolio | Have look in our Some of recent Projects in Developments and Marketing">
          <HeaderOne />
          <PageBanner title="Portfolio" name="Portfolio" />
          <PortfolioOne />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default PortfolioPage;
