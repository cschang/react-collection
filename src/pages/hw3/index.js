import React from 'react'
import Navbar from '../../components/galss.nav';
import Banner from "../../components/glass.banner";
import Classpart from "../../components/glass.classpart";
import Contact from "../../components/glass.contact";
import Design from "../../components/glass.design";
import Footer from "../../components/glass.footer";
import Recommend from "../../components/glass.recommend";
import Section from "../../components/glass.section";

const index = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Section />
      <Classpart />
      <Design />
      <Recommend />
      <Contact />
      <Footer />
    </div>
  );
}

export default index
