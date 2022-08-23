import React from "react";
import { useState } from "react";
import { Card } from "../../Card.styled";
import { ImageCard } from "../../ImageCard.styled";
const Grid1 = ({ content, styles }) => {
  // ------------------------
  const [arrowHoverMargin, setArrowHoverMargin] = useState("0rem 1rem");
  const [borderLength, setBorderLength] = useState("-89%");
  // ------------------------
  return (
    <Card>
      <Card mg={"5% 0"} height={"5%"}>
        <ImageCard
          // bg={"red"}
          // va={"sub"}
          height={"100%"}
          mg={"0rem 0.5rem"}
          dp={"inline"}
          src={content.SectionOneContents[0]}
        />
        {/* --------------STARTED-------------- */}
        <Card
          // height={"80%"}
          // bd={"1px solid red"}
          // mg={"10rem 0rem"}
          fs={"0.5rem"}
          ps={"relative"}
          pstp={"-0.3rem"}
          dp={"inline"}
          cl={styles.colors.textAlt}
        >
          <b>{content.SectionOneContents[1]}</b>
        </Card>
      </Card>

      <Card fs={"2rem"} mg={"5% 0"} height={"35%"}>
        {/* ------------DISCOVER---------- */}
        <Card cl={styles.colors.textAlt} dp={"inline"}>
          {" "}
          {content.SectionOneContents[2]}
        </Card>
        &nbsp;
        {/* ------------RARE COLLECTIONS---------- */}
        <Card dp={"inline"}>
          <b>{content.SectionOneContents[3]}</b>
        </Card>
        &nbsp;
        {/* ------------OF---------- */}
        <Card cl={styles.colors.textAlt} dp={"inline"}>
          {content.SectionOneContents[4]}
        </Card>{" "}
        <br />
        {/* ------------ARTS AND NFTS---------- */}
        <b>{content.SectionOneContents[5]}</b>
      </Card>

      {/* ------------DIGITAL.....---------- */}
      <Card fs={"0.7rem"} mg={"5% 0"} height={"14%"}>
        <Card cl={styles.colors.textAlt} dp={"inline"}>
          {content.SectionOneContents[6]}
        </Card>
        <b> {content.SectionOneContents[7]}</b>
      </Card>
      {/* ----------------------------------------- */}
      <Card
        onMouseOver={() => {
          setArrowHoverMargin("0rem 1.5rem");
          setBorderLength("-70%");
        }}
        onMouseOut={() => {
          setArrowHoverMargin("0rem 1rem");
          setBorderLength("-89%");
        }}
        ovfx={"hidden"}
        mg={"5% 0"}
        height={"10%"}
        // bd={"1px solid black"}
      >
        <b>{content.SectionOneContents[8]}</b>
        <ImageCard
          tr={"0.4s"}
          mg={arrowHoverMargin}
          src={content.SectionOneContents[9]}
        />
        <Card
          tr={"0.4s"}
          ps={"relative"}
          pslf={borderLength}
          bdbm={"2px solid black"}
        />
      </Card>

      {/* --------------------------------------------- */}
      <Card
        fs={"0.8rem"}
        mg={"15% 0rem 0rem 0rem"}
        height={"7%"}
        // bd={"1px solid black"}
      >
        {/* ---------------SUPPORTED BY---------- */}
        <Card
          cl={styles.colors.textAlt}
          ps={"relative"}
          pstp={"-0.4rem"}
          dp={"inline"}
        >
          {content.SectionOneContents[10]}
        </Card>
        <ImageCard
          // bg={"blue"}
          mg={"0rem 1rem"}
          height={"100%"}
          src={content.SectionOneContents[11]}
        />
        <ImageCard
          // bg={"blue"}
          // width={"100%"}

          height={"100%"}
          mg={"0rem 1rem"}
          src={content.SectionOneContents[12]}
        />
        {/* -----------COINBASE-------------- */}
        <Card
          cl={styles.colors.textAlt}
          ps={"relative"}
          pstp={"-0.4rem"}
          dp={"inline"}
        >
          {content.SectionOneContents[13]}
        </Card>
      </Card>
    </Card>
  );
};

export default Grid1;
