import React from "react";
import { Card } from "../../Card.styled";
import Grid1 from "./Grid1";
import Grid2 from "./Grid2";
import Grid3 from "./Grid3";
const SectionOne = ({ content }) => {
  return (
    <Card
      dp={"grid"}
      gridC={"40% 40% 20%"}
      mg={"0rem 2rem"}
      height={"20rem"}
      bd={"1px solid red"}
    >
      <Grid1 content={content} />
      <Grid2 content={content} />
      <Grid3 content={content} />
    </Card>
  );
};

export default SectionOne;
