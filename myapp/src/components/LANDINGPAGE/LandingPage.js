import React from "react";
import { Card } from "../UI/Card.styled";
import NavBar from "./NavBar/NavBar";
import SectionOne from "./SECTIONONE/SectionOne";
import SectionTwo from "./SECTIONTWO/SectionTwo";
import SectionSix from "./SECTIONSIX/SectionSix";
import Footer from "./FOOTER/Footer";
import SectionFive from "./SECTIONFIVE/SectionFive";
import SectionFour from "./SECTIONFOUR/SectionFour";
const LandingPage = ({
  trendingAuctions,
  setTrendingAuctions,
  content,
  styles,
  UI,
}) => {
  return (
    <>
      {/* <Card zindex={"-10"} > */}
      <NavBar styles={styles} content={content} />
      <SectionOne styles={styles} content={content} />
      <SectionTwo
        setTrendingAuctions={setTrendingAuctions}
        trendingAuctions={trendingAuctions}
        UI={UI}
        styles={styles}
        content={content}
      />
      <SectionFour UI={UI} styles={styles} content={content} />
      <SectionFive UI={UI} styles={styles} content={content} />
      <SectionSix UI={UI} styles={styles} content={content} />
      <Footer UI={UI} styles={styles} content={content} />
      {/* </Card> */}
    </>
  );
};

export default LandingPage;
