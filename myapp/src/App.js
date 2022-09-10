import LandingPage from "./components/LANDINGPAGE/LandingPage";
import "./App.css";
import { useState } from "react";
import { Card } from "./components/UI/Card.styled";
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

import AuctioNft1 from "./images/auctions/card1.svg";
import AuctioNft2 from "./images/auctions/card2.svg";
import AuctioNft3 from "./images/auctions/card3.svg";

import RecentlyAddedNft1 from "./images/Recently added/Ra1.svg";
import RecentlyAddedNft2 from "./images/Recently added/Ra2.svg";
import RecentlyAddedNft3 from "./images/Recently added/Ra3.svg";

import JediPicture from "./images/drawjedi.svg";
import picture44 from "./images/44.svg";
import YellowGirlPicture from "./images/Yellowgirl.svg";
import ErrModal from "./components/UI/Modal/ErrModal";

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
    JediPicture: JediPicture,
    picture44: picture44,
    YellowGirlPicture: YellowGirlPicture,
  };
  const styles = {
    fonts: {
      main: "'Rubik', sans-serif'",
    },
    colors: {
      textAlt: "#5A5A5A",
      purple: "#744DE6",
      altPurple: " #7851EC",
      white: "white",
      NFTborder: "#B9B9B9",
    },
  };
  const Contents = {
    NavBarContents: [
      "A",
      "Discover",
      "MarketPlace",
      "Pro",
      "How it Works",
      searchIcon,
      "Connect Wallet",
      exportIcon,
    ],
    trendingAuctions: [
      {
        id: 0,
        state: false,
        tag: "A",
        day: 74,
        user: "@Mark Rise",
        RemainingTime: "15h : 55m : 08s",
        value: 15.97,
        bid: "HighestBid",
        image: AuctioNft1,
        active: {
          likes: "63.1K",
          share: "24.6K",
        },
      },
      {
        id: 1,
        state: true,
        tag: "A",
        day: 74,
        user: "@Mark Rise",
        RemainingTime: "15h : 55m : 08s",
        value: 15.97,
        bid: "HighestBid",
        image: AuctioNft2,
        active: {
          likes: "63.1K",
          share: "24.6K",
        },
      },
      {
        id: 2,
        state: false,
        tag: "A",
        day: 74,
        user: "@Mark Rise",
        RemainingTime: "15h : 55m : 08s",
        value: 15.97,
        bid: "HighestBid",
        image: AuctioNft3,
        active: {
          likes: "63.1K",
          share: "24.6K",
        },
      },
    ],
    RecentlyAdded: [
      {
        id: 0,
        image: RecentlyAddedNft1,
        tag: "A",
        name: "Gorilla Mascot",
        user: "@MarkoHatta",
        value: 15.97,
      },
      {
        id: 1,
        image: RecentlyAddedNft2,
        tag: "A",
        name: "Gorilla Mascot",
        user: "@MarkoHatta",
        value: 15.97,
      },
      {
        id: 2,
        image: RecentlyAddedNft3,
        tag: "A",
        name: "Gorilla Mascot",
        user: "@MarkoHatta",
        value: 15.97,
      },
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
  const [errState, setErrorState] = useState(false);
  const [trendingAuctions, setTrendingAuctions] = useState(
    Contents.trendingAuctions
  );

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
      {errState ? <ErrModal /> : null}
      <LandingPage
        setTrendingAuctions={setTrendingAuctions}
        trendingAuctions={trendingAuctions}
        UI={UI}
        styles={styles}
        content={Contents}
      />
      {/* <LandingPage content={Contents} /> */}
    </>
  );
};

export default App;
