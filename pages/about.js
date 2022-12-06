import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import AboutOne from "@/components/about-one";
import CallToActionOne from "@/components/call-to-action-one";
import TeamCarousel from "@/components/team-carousel";
import VideoOne from "@/components/video-one";
import SubscribeForm from "@/components/subscribe-form";
import TestimonialsOneCarousel from "@/components/testimonials-carousel";
import FeatureTabOne from "@/components/feature-tab-1";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";

const AboutPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="About Us | At Atthetech, we measure our success with the success of our clients. Our objective is to be the 1st option for our clients. ">
          <HeaderOne />
          <PageBanner title="What We Are" name="About" />
          <AboutOne />
          <TestimonialsOneCarousel />
          <SubscribeForm />
          <TeamCarousel />
          <VideoOne />
          <FeatureTabOne />
          <CallToActionOne extraClassName="ready" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default AboutPage;
