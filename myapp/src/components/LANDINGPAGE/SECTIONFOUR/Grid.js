import React from "react";
import { Card } from "../../UI/Card.styled";
import NftCardPrototypeC from "../../UI/NftCardPrototypeC";

const Grid = ({ UI, styles, content }) => {
  const rendered = content.RecentlyAdded.map((element, index) => {
    return (
      <>
        <NftCardPrototypeC
          element={element}
          content={content}
          styles={styles}
        />
      </>
    );
  });
  return (
    <>
      <Card
        dp={"grid"}
        gridjc={"space-between"}
        gridC={"27% 27% 27%"}
        // bd={"1px solid red"}
      >
        {rendered}
      </Card>
    </>
  );
};

export default Grid;
