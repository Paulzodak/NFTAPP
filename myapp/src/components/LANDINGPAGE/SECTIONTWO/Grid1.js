import React from "react";
import { Card } from "../../Card.styled";
import { ImageCard } from "../../ImageCard.styled";

const Grid1 = ({ styles, UI }) => {
  return (
    <Card bd={"0px solid red"} dp={"grid"} gridC={"80% 20%"}>
      <Card dp={"grid"} gridC={"70% 30%"} bd={"0px solid blue"}>
        <Card bd={"0px solid black"}>
          <Card cl={styles.colors.textAlt} fs={"1.5rem"}>
            Trending
          </Card>
          <Card fs={"2rem"}>
            <b>Auctions.</b>
          </Card>
          <Card cl={styles.colors.textAlt} fs={"0.8rem"}>
            Enjoy! the latest hot auctions.
          </Card>
        </Card>
      </Card>
      <Card bd={"0px solid green"}>
        <Card width={"7rem"} mg={"1rem auto"} bd={"0px solid red"}>
          <ImageCard width={"3rem"} height={"3rem"} src={UI.NextArrow} />
          <ImageCard width={"3rem"} height={"3rem"} src={UI.PreviousArrow} />
        </Card>
      </Card>
    </Card>
  );
};

export default Grid1;
