import React from "react";
import { ImageCard } from "../../ImageCard.styled";
import { Card } from "../../Card.styled";
const Grid2 = ({ content }) => {
  return (
    <Card bd={"0px solid red"}>
      <ImageCard src={content.NftAuctions[0].image} />
    </Card>
  );
};

export default Grid2;
