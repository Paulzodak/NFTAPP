import React from "react";
import { Card } from "../../UI/Card.styled";
import Grid1 from "./Grid1";
import Grid2 from "./Grid2";
const SectionTwo = ({ UI, styles, content }) => {
  return (
    <>
      <Card
        mg={"2rem 2rem"}
        dp={"grid"}
        gridR={"25% 75%"}
        bd={"0px solid red"}
        height={"24rem"}
      >
        <Grid1 UI={UI} styles={styles} />
        <Grid2 styles={styles} content={content} UI={UI} />
      </Card>
    </>
  );
};

export default SectionTwo;
