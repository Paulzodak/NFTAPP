import React from "react";
import { Card } from "../../UI/Card.styled";
const Grid3 = ({ content, styles }) => {
  return (
    <Card bd={"0px solid red"}>
      <Card
        dp={"grid"}
        gridR={"33% 33% 33%"}
        height={"10rem"}
        mg={"10rem 0% 0% 0%"}
        bd={"0px solid blue"}
      >
        <Card bd={"0px solid blue"}>
          <Card fs={"1rem"}>
            <b>12.1K+</b>
          </Card>
          <Card cl={styles.colors.textAlt} fs={"0.5rem"}>
            Artwork
          </Card>
        </Card>
        <Card bd={"0px solid blue"}>
          <Card fs={"1rem"}>
            <b>1.7M+</b>
          </Card>
          <Card cl={styles.colors.textAlt} fs={"0.5rem"}>
            Artists
          </Card>
        </Card>
        <Card bd={"0px solid blue"}>
          <Card fs={"1rem"}>
            <b>45K+</b>
          </Card>
          <Card cl={styles.colors.textAlt} fs={"0.5rem"}>
            Auctions
          </Card>
        </Card>
      </Card>
    </Card>
  );
};

export default Grid3;
