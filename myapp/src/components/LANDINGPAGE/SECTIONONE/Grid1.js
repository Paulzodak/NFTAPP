import React from "react";
import { Card } from "../../Card.styled";
import { ImageCard } from "../../ImageCard.styled";
const Grid1 = ({ content }) => {
  return (
    <Card bd={"1px solid red"}>
      <Card mg={"5% 0"} height={"5%"} bd={"1px solid black"}>
        <ImageCard
          // bg={"red"}
          // va={"sub"}
          height={"100%"}
          mg={"0rem 0.5rem"}
          dp={"inline"}
          src={content.SectionOneContents[0]}
        />

        <Card
          height={"80%"}
          bd={"1px solid red"}
          mg={"10rem 0rem"}
          fs={"0.5rem"}
          dp={"inline"}
        >
          {content.SectionOneContents[1]}
        </Card>
      </Card>

      <Card mg={"5% 0"} height={"30%"} bd={"1px solid black"}></Card>
      <Card mg={"5% 0"} height={"14%"} bd={"1px solid black"}></Card>
      <Card mg={"5% 0"} height={"10%"} bd={"1px solid black"}></Card>
      <Card
        mg={"15% 0rem 0rem 0rem"}
        height={"7%"}
        bd={"1px solid black"}
      ></Card>
    </Card>
  );
};

export default Grid1;
