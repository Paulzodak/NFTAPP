import LandingPage from "./components/LANDINGPAGE/LandingPage";
import { useState } from "react";
import { Card } from "./components/Card.styled";
import searchIcon from "./images/Navbar/Combined-Shape.svg";
import exportIcon from "./images/Navbar/Group 7.svg";
import lightning from "./images/sectionone/lightning.svg";
import Arrow from "./images/sectionone/Arrow.svg";
import Diamond from "./images/sectionone/diamond.svg";
import Rhombus from "./images/sectionone/Rhombus.svg";

const App = () => {
  const Contents = {
    NavBarContents: [
      "A.",
      "Discover",
      "MarketPlace",
      "Pro",
      "How it Works",
      searchIcon,
      "Connect Wallet",
      exportIcon,
    ],

    SectionOneContents: [
      lightning,
      "Started",
      "Discover",
      "Rare Collections",
      "Of",
      "Art & NFTs",
      "Digital market place for crypto collectibles and non-fungible tokens NFTS",
      "Discover Artwork",
      Arrow,
      "Supported By",
      Diamond,
      Rhombus,
      "coinbase",
    ],
  };
  return (
    <>
      <LandingPage content={Contents} />
    </>
  );
};

export default App;
