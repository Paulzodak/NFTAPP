import React from "react";
import { Card } from "../../Card.styled";
import { Button } from "../../Button.styled";
import { ImageCard } from "../../ImageCard.styled";
const SectionSix = ({ styles, UI }) => {
  return (
    <>
      <Card bd={"0px solid red"} height={"25rem"}>
        {/* ____________________-- */}
        {/* <Card bd={"1px solid red"}> */}
        <ImageCard
          ps={"absolute"}
          pstp={"68rem"}
          pslf={"6rem"}
          src={UI.CircledNft1}
          height={"2rem"}
          width={"2rem"}
          hvwidth={"2.4rem"}
          hvheight={"2.4rem"}
          tr={"0.15s"}
        />
        {/* </Card> */}
        <ImageCard
          ps={"absolute"}
          pstp={"72rem"}
          pslf={"13rem"}
          src={UI.CircledNft2}
          height={"2rem"}
          width={"2rem"}
          hvwidth={"2.4rem"}
          hvheight={"2.4rem"}
          tr={"0.15s"}
        />
        <ImageCard
          ps={"absolute"}
          pstp={"76rem"}
          pslf={"21rem"}
          src={UI.CircledNft3}
          height={"2rem"}
          width={"2rem"}
          hvwidth={"2.4rem"}
          hvheight={"2.4rem"}
          tr={"0.15s"}
        />
        <ImageCard
          ps={"absolute"}
          pstp={"72rem"}
          pslf={"30rem"}
          src={UI.CircledNft4}
          height={"2rem"}
          width={"2rem"}
          hvwidth={"2.4rem"}
          hvheight={"2.4rem"}
          tr={"0.15s"}
        />
        <ImageCard
          ps={"absolute"}
          pstp={"68rem"}
          pslf={"37rem"}
          src={UI.CircledNft5}
          height={"2rem"}
          width={"2rem"}
          hvwidth={"2.4rem"}
          hvheight={"2.4rem"}
          tr={"0.15s"}
        />
        <Card
          ps={"relative"}
          pstp={"27%"}
          pslf={"30%"}
          //   bd={"1px solid blue"}
          width={"40%"}
          height={"40%"}
        >
          <Card cl={styles.colors.textAlt} fs={"1.2rem"} ta={"center"}>
            Join Our
          </Card>
          <Card fs={"1.8rem"} ta={"center"}>
            <b>Community.</b>
          </Card>
          <Card cl={styles.colors.textAlt} fs={"0.7rem"} ta={"center"}>
            <p>
              Meet the A. Community, artists and collectors for platform
              updates, announcements, and more....
            </p>
          </Card>
          <Card ta={"center"}>
            <Button
              bd={"none"}
              bg={styles.colors.purple}
              fs={"0.5rem"}
              pd={"0.5rem 0.7rem"}
              cl={"white"}
              mg={"auto"}
              ta={"center"}
            >
              <ImageCard height={"1rem"} width={"1rem"} src={UI.Discord} />
              <Card
                mg={"0rem 0.5rem"}
                dp={"inline"}
                ps={"relative"}
                pstp={"-0.3rem"}
              >
                Launch Discord
              </Card>
            </Button>
          </Card>
        </Card>
      </Card>
    </>
  );
};

export default SectionSix;
