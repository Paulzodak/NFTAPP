import React from "react";
import { Card } from "../../Card.styled";
import { CardInline } from "../../Card.styled2";
import { ImageCard } from "../../ImageCard.styled";
import { Button } from "../../Button.styled";
const NavBar = ({ content }) => {
  return (
    <>
      <Card
        dp={"grid"}
        gridC={"40% 35% 25%"}
        bd={"1px solid black"}
        height={"1.5rem"}
        mg={"2rem"}
      >
        <Card dp={"grid"} gridC={"auto auto auto auto"} bd={"0px solid red"}>
          {/* ---------- A ----------------- */}
          <Card bd={"0px solid black"}>{content.NavBarContents[0]}</Card>
          {/* ----------------DISCOVER------------- */}
          <Card
            pd={"0.4rem 0rem"}
            ta={"center"}
            fs={"0.5rem"}
            // bd={"1px solid black"}
          >
            {content.NavBarContents[1]}
          </Card>
          {/* ----------------MARKETPLACE PRO------------- */}
          <Card
            pd={"0.4rem 0rem"}
            ta={"center"}
            fs={"0.5rem"}
            // bd={"1px solid black"}
          >
            {content.NavBarContents[2]}

            <Card
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
          </Card>
          {/* ----------------HOW IT WORKS------------- */}
          <Card
            pd={"0.4rem 0rem"}
            ta={"center"}
            fs={"0.5rem"}
            // bd={"1px solid black"}
          >
            {content.NavBarContents[4]}
          </Card>
        </Card>
        {/* ----------------- SECTION 2--------------------- */}
        <Card bd={"0px solid red"}></Card>
        {/* ----------------SEARCHICON------------- */}
        <Card
          //   ovfy={"hidden"}
          mg={"0.2rem 0rem"}
          height={"1.1rem"}
          dp={"grid"}
          gridC={"15% 70% 15%"}
          //   bd={"1px solid red"}
        >
          <Card height={"inherit"} bd={"0px solid red"}>
            <ImageCard
              dp={"block"}
              //   bd={"1px solid red"}
              mg={"0.2rem auto"}
              height={"60%"}
              width={"60%"}
              src={content.NavBarContents[5]}
            />
          </Card>
          {/* ----------------CONNECT WALLET------------- */}
          <Card height={"inherit"} bd={"0px solid red"}>
            <Button
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
          </Card>
          {/* ----------------ENTER ICON------------- */}
          <Card height={"inherit"} bd={"0px solid red"}>
            <ImageCard
              dp={"block"}
              mg={"auto"}
              height={"100%"}
              width={"100%"}
              src={content.NavBarContents[7]}
            />
          </Card>
        </Card>
      </Card>
    </>
  );
};

export default NavBar;
