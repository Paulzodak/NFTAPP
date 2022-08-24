import React from "react";
import { Card } from "../../UI/Card.styled";
import { ImageCard } from "../../UI/ImageCard.styled";
import { CardSpan } from "../../UI/CardSpan.styled";
import NftCardPrototypeA from "../../UI/NftCardPrototypeA";
const Grid2 = ({ content, styles }) => {
  const renderedContents = content.trendingAuctions.map((element) => {
    return (
      <NftCardPrototypeA element={element} content={content} styles={styles} />
    );
  });
  return (
    <>
      <Card>
        <Card dp={"grid"} gridC={"27% 27% 27%"} gridjc={"space-between"}>
          {renderedContents}
        </Card>
      </Card>
    </>
  );
};

export default Grid2;
