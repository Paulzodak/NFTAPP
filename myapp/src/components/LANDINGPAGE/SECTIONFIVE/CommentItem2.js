import React from "react";
import { Card } from "../../UI/Card.styled";
import { ImageCard } from "../../UI/ImageCard.styled";
const CommentItem2 = ({ element, color }) => (
  <>
    <Card
      bg={"white"}
      pd={"1rem"}
      // bd={"1px solid red"}
      mg={"10% 0%"}
      br={"inherit"}
      height={"80%"}
      bs={"-10px 10px 50px  #bebebe"}
    >
      <ImageCard
        dp={"inline"}
        height={"1.5rem"}
        width={"1.5rem"}
        src={element.picture}
      />
      <Card
        ps={"relative"}
        pstp={"-0.5rem"}
        fs={"0.6rem"}
        mg={"0rem 1rem"}
        dp={"inline"}
      >
        {element.user}
      </Card>
      <Card cl={color} fs={"0.5rem"}>
        {element.comment}
      </Card>
    </Card>
  </>
);

export default CommentItem2;
