import React, { useRef } from "react";
import { useState } from "react";
import { Card } from "../../Card.styled";
import { CardInline } from "../../Card.styled2";
import { ImageCard } from "../../ImageCard.styled";
import { CardLink } from "../../Link.styled";
import { Button } from "../../Button.styled";
const NavBar = ({ content, styles }) => {
  return (
    <>
      <Card
        dp={"grid"}
        gridC={"40% 35% 25%"}
        // bd={"1px solid black"}
        height={"1.5rem"}
        mg={"2rem"}
      >
        <Card dp={"grid"} gridC={"auto auto auto auto"} bd={"0px solid red"}>
          {/* ---------- A ----------------- */}
          <Card bd={"0px solid black"}>
            <b>{content.NavBarContents[0]}</b>
          </Card>
          {/* ----------------DISCOVER------------- */}
          <CardLink
            hvcl={"white"}
            hvbg={"black"}
            br={"0.2rem"}
            cl={styles.colors.textAlt}
            tr={"0.3s"}
            pd={"0.2rem 0rem"}
            mg={"0.2rem 0rem"}
            hvfs={"0.52rem"}
            ta={"center"}
            fs={"0.5rem"}
            td={"none"}
            href={"#"}

            // bd={"1px solid black"}
          >
            {content.NavBarContents[1]}
          </CardLink>
          {/* ----------------MARKETPLACE PRO------------- */}
          <CardLink
            hvcl={"white"}
            cl={styles.colors.textAlt}
            hvbg={"black"}
            br={"0.2rem"}
            tr={"0.3s"}
            pd={"0.2rem 0rem"}
            mg={"0.2rem 0rem"}
            hvfs={"0.52rem"}
            ta={"center"}
            fs={"0.5rem"}
            td={"none"}
            href={"#"}
            // bd={"1px solid black"}
          >
            {content.NavBarContents[2]}

            <Card
              hvcl={"black"}
              hvbg={"white"}
              pd={"0rem 0.2rem"}
              fs={"0.5rem"}
              mg={"0rem 0.1rem"}
              bg={"black"}
              br={"0.2rem"}
              cl={"white"}
              dp={"inline"}
            >
              {content.NavBarContents[3]}
            </Card>
          </CardLink>
          {/* ----------------HOW IT WORKS------------- */}
          <CardLink
            hvcl={"white"}
            hvbg={"black"}
            cl={styles.colors.textAlt}
            br={"0.2rem"}
            tr={"0.3s"}
            pd={"0.2rem 0rem"}
            mg={"0.2rem 0rem"}
            hvfs={"0.52rem"}
            ta={"center"}
            fs={"0.5rem"}
            td={"none"}
            href={"#"}
            // bd={"1px solid black"}
          >
            {content.NavBarContents[4]}
          </CardLink>
        </Card>
        {/* ----------------- SECTION 2--------------------- */}
        <Card bd={"0px solid red"}></Card>
        {/* ----------------SEARCHICON------------- */}
        <Card
          //   ovfy={"hidden"}

          tr={"0.3s"}
          mg={"0.2rem 0rem"}
          height={"1.1rem"}
          dp={"grid"}
          gridC={"15% 70% 15%"}
          //   bd={"1px solid red"}
        >
          <CardLink
            td={"none"}
            href={"#"}
            br={"0.2rem"}
            height={"inherit"}
            bd={"0px solid red"}
          >
            <ImageCard
              dp={"block"}
              //   bd={"1px solid red"}
              mg={"0.2rem auto"}
              height={"60%"}
              width={"60%"}
              src={content.NavBarContents[5]}
            />
          </CardLink>
          {/* ----------------CONNECT WALLET------------- */}
          <Card height={"inherit"} bd={"0px solid red"}>
            <CardLink td={"none"} href={"#"}>
              <Button
                hvcl={"white"}
                hvbg={"black"}
                tr={"0.4s"}
                mg={"auto"}
                bg={"white"}
                dp={"block"}
                bd={"0.07rem solid black"}
                br={"100px"}
                fs={"0.4rem"}
                height={"100%"}
                width={"70%"}
              >
                {content.NavBarContents[6]}
              </Button>
            </CardLink>
          </Card>
          {/* ----------------ENTER ICON------------- */}
          <Card height={"inherit"} bd={"0px solid red"}>
            <CardLink td={"none"} href={"#"}>
              <ImageCard
                dp={"block"}
                mg={"auto"}
                height={"100%"}
                width={"100%"}
                src={content.NavBarContents[7]}
              />
            </CardLink>
          </Card>
        </Card>
      </Card>
    </>
  );
};

export default NavBar;
