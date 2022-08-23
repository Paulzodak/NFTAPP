import React from "react";
import { Card } from "../../Card.styled";
import { CardList } from "../../CardList.styled";
import { CardLink } from "../../Link.styled";
import { ImageCard } from "../../ImageCard.styled";

const Footer = ({ styles, UI }) => {
  return (
    <footer
      style={{
        backgroundColor: "white",
        width: "100%",
        margin: "1rem 0rem 0rem 0rem",
      }}
    >
      <Card
        bg={"white"}
        pd={"1rem"}
        dp={"grid"}
        gridC={"40% 20% 20% 20%"}
        height={"10rem"}
        bd={"0px solid red"}
        mg={"0rem 2rem"}
      >
        <Card bd={"0px solid blue"}>
          <Card>
            <b>A.</b>
          </Card>
          <Card
            cl={styles.colors.textAlt}
            lh={"0.8rem"}
            fs={"0.5rem"}
            mg={"1rem 6rem 0rem 0rem"}
          >
            The best NFTs marketplace website in the world and feel your
            experience in selling or buying our work
          </Card>
        </Card>
        <Card dp={"grid"} gridR={"20% 20% 20% 20% 20%"} bd={"0px solid blue"}>
          <CardList fs={"0.8rem"} ltype={"none"}>
            About
          </CardList>
          <CardList fs={"0.5rem"} ltype={"none"}>
            <CardLink
              tr={"0.15s"}
              hvfs={"0.52rem"}
              cl={styles.colors.textAlt}
              td={"none"}
              href="#"
            >
              Product
            </CardLink>
          </CardList>
          <CardList fs={"0.5rem"} ltype={"none"}>
            <CardLink
              tr={"0.15s"}
              hvfs={"0.52rem"}
              cl={styles.colors.textAlt}
              td={"none"}
              href="#"
            >
              Resources
            </CardLink>
          </CardList>
          <CardList fs={"0.5rem"} ltype={"none"}>
            <CardLink
              tr={"0.15s"}
              hvfs={"0.52rem"}
              cl={styles.colors.textAlt}
              td={"none"}
              href="#"
            >
              Terms & Conditions
            </CardLink>
          </CardList>
          <CardList fs={"0.5rem"} ltype={"none"}>
            <CardLink
              tr={"0.15s"}
              hvfs={"0.52rem"}
              cl={styles.colors.textAlt}
              td={"none"}
              href="#"
            >
              FAQ
            </CardLink>
          </CardList>
        </Card>
        {/* ---------------------------COMPANY------------------------- */}
        <Card dp={"grid"} gridR={"20% 20% 20% 20% 20%"} bd={"0px solid blue"}>
          <CardList fs={"0.8rem"} ltype={"none"}>
            Company
          </CardList>
          <CardList fs={"0.5rem"} ltype={"none"}>
            <CardLink
              tr={"0.15s"}
              hvfs={"0.52rem"}
              cl={styles.colors.textAlt}
              td={"none"}
              href="#"
            >
              Our team
            </CardLink>
          </CardList>
          <CardList fs={"0.5rem"} ltype={"none"}>
            <CardLink
              tr={"0.15s"}
              hvfs={"0.52rem"}
              cl={styles.colors.textAlt}
              td={"none"}
              href="#"
            >
              Partner with us
            </CardLink>
          </CardList>
          <CardList fs={"0.5rem"} ltype={"none"}>
            <CardLink
              tr={"0.15s"}
              hvfs={"0.52rem"}
              cl={styles.colors.textAlt}
              td={"none"}
              href="#"
            >
              Privacy & Policies
            </CardLink>
          </CardList>
          <CardList fs={"0.5rem"} ltype={"none"}>
            <CardLink
              tr={"0.15s"}
              hvfs={"0.52rem"}
              cl={styles.colors.textAlt}
              td={"none"}
              href="#"
            >
              Features
            </CardLink>
          </CardList>
        </Card>

        {/* -------------------------CONTACT-------------------------- */}
        <Card dp={"grid"} gridR={"20% 20% 20% 20% 20%"} bd={"0px solid blue"}>
          <CardList fs={"0.8rem"} ltype={"none"}>
            Contact
          </CardList>
          <CardList fs={"0.5rem"} ltype={"none"}>
            <CardLink
              tr={"0.15s"}
              hvfs={"0.52rem"}
              cl={styles.colors.textAlt}
              td={"none"}
              href="#"
            >
              +1 397 538 102
            </CardLink>
          </CardList>
          <CardList fs={"0.5rem"} ltype={"none"}>
            <CardLink
              tr={"0.15s"}
              hvfs={"0.52rem"}
              cl={styles.colors.textAlt}
              td={"none"}
              href="#"
            >
              Kartter@gmail.com
            </CardLink>
          </CardList>
          <CardList
            dp={"grid"}
            gridjc={"space-evenly"}
            width={"60%"}
            gridC={"20% 20% 20% 20%"}
            fs={"0.5rem"}
            ltype={"none"}
          >
            <ImageCard
              height={"0.5rem"}
              width={"0.5rem"}
              tr={"0.15s"}
              hvheight={"0.52rem"}
              hvwidth={"0.52rem"}
              src={UI.facebookIcon}
            ></ImageCard>
            <ImageCard
              height={"0.5rem"}
              width={"0.5rem"}
              tr={"0.15s"}
              hvheight={"0.52rem"}
              hvwidth={"0.52rem"}
              src={UI.twitterIcon}
            ></ImageCard>
            <ImageCard
              height={"0.5rem"}
              width={"0.5rem"}
              tr={"0.15s"}
              hvheight={"0.52rem"}
              hvwidth={"0.52rem"}
              src={UI.LinkedInIcon}
            ></ImageCard>
            <ImageCard
              height={"0.5rem"}
              width={"0.5rem"}
              tr={"0.15s"}
              hvheight={"0.52rem"}
              hvwidth={"0.52rem"}
              src={UI.InstagramIcon}
            ></ImageCard>
            <ImageCard></ImageCard>
          </CardList>
        </Card>
      </Card>
    </footer>
  );
};

export default Footer;
