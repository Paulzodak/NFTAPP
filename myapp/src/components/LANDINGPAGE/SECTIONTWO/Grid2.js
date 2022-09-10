import React from "react";
import { Card } from "../../UI/Card.styled";
import { ImageCard } from "../../UI/ImageCard.styled";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { CardSpan } from "../../UI/CardSpan.styled";
import "./Transition.css";
import NftCardPrototypeA from "../../UI/NftCardPrototypeA";
import NftCardPrototypeB from "../../UI/NftCardPrototypeB";
const Grid2 = ({ trendingAuctions, setTrendingAuctions, content, styles }) => {
  const itemBooleanSwapper = () => {};
  const renderedContents = trendingAuctions.map((element, index) => {
    const mouseEnterHandler = () => {
      setTimeout(() => {
        setTrendingAuctions((prev) => {
          const a = [...prev];
          for (let i = 0; i < a.length; i++) {
            a[i].state = false;
          }
          a[index].state = true;
          // console.log(a);
          return a;
        });
      }, 100);
    };
    const mouseLeaveHandler = () => {};
    return (
      <>
        <SwitchTransition>
          <CSSTransition
            key={element.state}
            addEndListener={(node, done) =>
              node.addEventListener("transitionend", done, false)
            }
            classNames="fadea"
          >
            {element.state ? (
              <Card
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
              >
                <NftCardPrototypeB
                  element={element}
                  content={content}
                  styles={styles}
                />
              </Card>
            ) : (
              <Card
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
              >
                <NftCardPrototypeA
                  element={element}
                  content={content}
                  styles={styles}
                />
              </Card>
            )}
          </CSSTransition>
        </SwitchTransition>

        {/* <NftCardPrototypeA
          element={element}
          content={content}
          styles={styles}
        /> 
        <NftCardPrototypeB
          element={element}
          content={content}
          styles={styles}
        /> */}
      </>
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
