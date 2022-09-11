import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Navbar/Header";
import Hero from "../Components/Hero/Hero";
import CardSection from "../Components/Card Section/CardSection";
import OurDoctors from "../Components/OurDoctors/OurDoctors";
import Testimonials from "../Components/Testimonials/Testimonials";
import MuiAccordion from "../Components/Accordion/MuiAccordion.tsx";
import SearchBar from "../Components/SearchBar/SearchBar";
import ContactUs from "../Components/ContactUs/ContactUs";

const Homepage = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    sessionStorage.setItem('latitude',position.coords.latitude);
    sessionStorage.setItem('longitude',position.coords.longitude);
  });
  return (
    <div>
      <Header />
      <Hero />
      <SearchBar />
      <CardSection />
      <OurDoctors />
      <Testimonials />
      <MuiAccordion />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Homepage;
