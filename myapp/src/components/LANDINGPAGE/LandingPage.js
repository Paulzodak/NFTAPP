import React from "react";
import NavBar from "./NavBar/NavBar";
import SectionOne from "./SECTIONONE/SectionOne";
const LandingPage = ({ content }) => {
  return (
    <>
      <NavBar content={content} />
      <SectionOne content={content} />
    </>
  );
};

export default LandingPage;
