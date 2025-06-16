import React from "react";
import Layout from "../components/layouts/Layout";
import HeroCarousel from "./LandingPage/HeroCarousel";
import AboutUs from "./LandingPage/AboutUs";
import ProductShowcase from "./LandingPage/ProductShowcase";

const LandingPage = () => {
  return (
    <Layout activeMenu="Home">
      <HeroCarousel />
      <AboutUs />
      <ProductShowcase />
    </Layout>
  );
};

export default LandingPage;
