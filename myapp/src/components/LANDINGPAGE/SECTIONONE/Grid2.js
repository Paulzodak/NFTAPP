import React from "react";
import { ImageCard } from "../../UI/ImageCard.styled";
import { Card } from "../../UI/Card.styled";
const Grid2 = ({ content }) => {
  return (
    <Card bd={"0px solid red"}>
      <ImageCard src={content.NftAuctions[0].image} />
    </Card>
  );
};

export default Grid2;
