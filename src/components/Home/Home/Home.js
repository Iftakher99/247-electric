import React from "react";
import FeaturedService from "../FeaturedService/FeaturedService";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Testimonials from "../Testimonials/Testimonials";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Blogs from "../Blogs/Blogs";
import Electricians from "../Electricians/Electricians";
import Contact from "../Contact/Contact";
import Footer from "../../Shared/Footer/Footer";
import OurProjects from "../OurProjects/OurProjects";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <FeaturedService></FeaturedService>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <Blogs></Blogs>
      <OurProjects></OurProjects>
      <Electricians></Electricians>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
