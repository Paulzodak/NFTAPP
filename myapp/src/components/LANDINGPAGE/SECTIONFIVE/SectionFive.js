import React, { useState } from "react";
import { Card } from "../../UI/Card.styled";
import Headlines from "../../UI/Headlines";
import CommentItem from "./CommentItem";
import CommentItem2 from "./CommentItem2";
import styled from "styled-components";
import "./Transition.css";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const SectionFive = ({ content, styles, UI }) => {
  const HeadlineProps = {
    height: "4rem",
    h1: {
      fontsize: "1.5rem",
      text: "What",
      color: "#5A5A5A",
    },
    h2: {
      fontsize: "2rem",
      text: "Our Users Say",
      color: "black",
    },
    icons: [UI.NextArrow, UI.PreviousArrow],
  };

  const dummyUsersComments = [
    {
      id: 0,
      toggle: false,
      picture: UI.JediPicture,
      user: "@ Drew Jedi",
      comment:
        "Best NFTS Collectibles Ever, and also give out best rates for the rarest collectibles in the marketplaces.",
    },
    {
      id: 1,
      toggle: false,
      picture: UI.picture44,
      user: "@ 44_Two",
      comment:
        "Best NFTS Collectibles Ever, and also give out best rates for the rarest collectibles in the marketplaces.",
    },
    {
      id: 2,
      toggle: false,
      picture: UI.YellowGirlPicture,
      user: "@ Dhat Yellow_Girl",
      comment:
        "Best NFTS Collectibles Ever, and also give out best rates for the rarest collectibles in the marketplaces.",
    },
  ];
  const [usersComments, setUsersComments] = useState(dummyUsersComments);
  const hoverInHandler = (index) => {
    const CopiedComments = usersComments;
    CopiedComments[index].toggle = true;
    setUsersComments([...CopiedComments]);
  };
  const hoverOutHandler = (index) => {
    const CopiedComments = usersComments;
    CopiedComments[index].toggle = false;
    setUsersComments([...CopiedComments]);
  };
  const renderedContents = usersComments.map((element, index) => (
    <Card>
      <SwitchTransition>
        <CSSTransition
          key={element.toggle}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="fade"
        >
          <>
            {!element.toggle ? (
              <Card
                onMouseOut={() => hoverOutHandler(index)}
                onMouseOver={() => hoverInHandler(index)}
              >
                <CommentItem
                  key={element.id}
                  color={HeadlineProps.h1.color}
                  element={element}
                />
              </Card>
            ) : (
              <Card
                onMouseOut={() => hoverOutHandler(index)}
                onMouseOver={() => hoverInHandler(index)}
              >
                <CommentItem2
                  key={element.id}
                  color={HeadlineProps.h1.color}
                  element={element}
                />
              </Card>
            )}
          </>
        </CSSTransition>
      </SwitchTransition>
    </Card>
  ));
  console.log(usersComments);
  return (
    <Card mg={"0rem 2rem"} bd={"0px solid red"} height={"15rem"}>
      <Headlines HeadlineProps={HeadlineProps} />
      <Card
        mg={"1rem 0rem"}
        width={"100%"}
        dp={"grid"}
        gridC={"30% 30% 30%"}
        gridjc={"space-between"}
        height={"9rem"}
        bd={"0px solid red"}
      >
        {renderedContents}
      </Card>
    </Card>
  );
};

export default SectionFive;
