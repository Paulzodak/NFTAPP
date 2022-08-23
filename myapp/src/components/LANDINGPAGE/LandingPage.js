import React from "react";
import NavBar from "./NavBar/NavBar";
import SectionOne from "./SECTIONONE/SectionOne";
import SectionTwo from "./SECTIONTWO/SectionTwo";
import SectionSix from "./SECTIONSIX/SectionSix";
import Footer from "./FOOTER/Footer";
const LandingPage = ({ content, styles, UI }) => {
  return (
    <>
      <NavBar styles={styles} content={content} />
      <SectionOne styles={styles} content={content} />
      <SectionTwo UI={UI} styles={styles} content={content} />
      <SectionSix UI={UI} styles={styles} content={content} />
      <Footer UI={UI} styles={styles} content={content} />
    </>
  );
};

export default LandingPage;
