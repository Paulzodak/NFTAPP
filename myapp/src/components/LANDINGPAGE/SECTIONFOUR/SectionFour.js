import React from "react";
import { Card } from "../../UI/Card.styled";
import Grid from "./Grid";
import Headlines from "../../UI/Headlines";
const SectionFour = ({ UI, content, styles }) => {
  const HeadlineProps = {
    height: "4rem",
    h1: {
      fontsize: "1.5rem",
      text: "Recently",
      color: "#5A5A5A",
    },
    h2: {
      fontsize: "2rem",
      text: "Listed.",
      color: "black",
    },
    icons: [UI.NextArrow, UI.PreviousArrow],
  };
  return (
    <>
      <Card
        mg={"2rem 2rem"}
        dp={"grid"}
        gridR={"25% 75%"}
        // bd={"1px solid red"}
        height={"24rem"}
      >
        <Headlines HeadlineProps={HeadlineProps} />
        <Grid styles={styles} content={content} UI={UI}></Grid>
      </Card>
    </>
  );
};

export default SectionFour;
