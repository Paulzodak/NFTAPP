import LandingPage from "./components/LANDINGPAGE/LandingPage";
import "./App.css";
import { useState } from "react";
import { Card } from "./components/Card.styled";
import searchIcon from "./images/Navbar/Combined-Shape.svg";
import exportIcon from "./images/Navbar/Group 7.svg";
import lightning from "./images/sectionone/lightning.svg";
import Arrow from "./images/sectionone/Arrow.svg";
import Diamond from "./images/sectionone/diamond.svg";
import Rhombus from "./images/sectionone/Rhombus.svg";
import NFT1 from "./images/NFTCARD/Card1.svg";
import NextArrow from "./images/Nextarrow.svg";
import PreviousArrow from "./images/Previousarrow.svg";
import Discord from "./images/discord.svg";
import CircledNft1 from "./images/circledNft.svg";
import CircledNft2 from "./images/circledNft2.svg";
import CircledNft3 from "./images/circledNft3.svg";
import CircledNft4 from "./images/circledNft4.svg";
import CircledNft5 from "./images/circledNft5.svg";

import facebookIcon from "./images/facebookicon.svg";
import twitterIcon from "./images/twittericon.svg";
import LinkedInIcon from "./images/LinkedinIcon.svg";
import InstagramIcon from "./images/Instagramicon.svg";

const App = () => {
  const UI = {
    NextArrow: NextArrow,
    PreviousArrow: PreviousArrow,
    Discord: Discord,
    CircledNft1: CircledNft1,
    CircledNft2: CircledNft2,
    CircledNft3: CircledNft3,
    CircledNft4: CircledNft4,
    CircledNft5: CircledNft5,
    facebookIcon: facebookIcon,
    twitterIcon: twitterIcon,
    LinkedInIcon: LinkedInIcon,
    InstagramIcon: InstagramIcon,
  };
  const styles = {
    fonts: {
      main: "'Rubik', sans-serif'",
    },
    colors: {
      textAlt: "#5A5A5A",
      purple: "#744DE6",
    },
  };
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
      "Digital market place for crypto collectibles and non-fungible tokens ",
      "NFTS",
      "Discover Artwork",
      Arrow,
      "Supported By",
      Diamond,
      Rhombus,
      "coinbase",
    ],
    NftAuctions: [
      {
        tag: "A",
        day: 74,
        user: "@Mark Rise",
        RemainingTime: "",
        value: 15.97,
        bid: "HighestBid",
        image: NFT1,
      },
    ],
  };

  return (
    <>
      <div className="main-area">
        <div className="circles">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <LandingPage UI={UI} styles={styles} content={Contents} />
      {/* <LandingPage content={Contents} /> */}
    </>
  );
};

export default App;
