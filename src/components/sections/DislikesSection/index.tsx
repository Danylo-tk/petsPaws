import { useFetch } from "../../../hooks/useFetch";
import React, { useEffect } from "react";
import palette from "../../../style/palette";
import {
  Gallery,
  ImgWrapper,
  ImgContainer,
  IconBox,
  Img,
  Overlay,
} from "./components";
import { apiKey } from "../../../keys";
import ContentSection from "../ContentSection";
import EmptyPageBox from "../../EmptyPageBox";

const DislikesSection = () => {
  const { request, deleteImg, img } = useFetch();

  useEffect(() => {
    request("https://api.thecatapi.com/v1/votes?sub_id=user-123", {
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
      },
    });
  }, [img]);

  const renderDislikeImg = (val: any, currImg: any) => {
    if (val === -1)
      return (
        <ImgContainer>
          <ImgWrapper>
            <Img src={currImg.image.url} alt="" />
          </ImgWrapper>
          <Overlay>
            <IconBox
              onClick={() =>
                deleteImg("https://api.thecatapi.com/v1/votes/" + currImg.id)
              }
            >
              <span
                className="material-symbols-outlined"
                style={{
                  color: palette.pinkPanter,
                  fontSize: "4rem",
                }}
              >
                sentiment_dissatisfied
              </span>
            </IconBox>
          </Overlay>
        </ImgContainer>
      );
  };

  let likes = 0;
  img.map((currImg) => (currImg.value > 0 ? likes++ : likes--));
  if (img.length == likes) {
    return (
      <ContentSection sectionName="dislikes">
        <EmptyPageBox />
      </ContentSection>
    );
  } else {
    return (
      <ContentSection sectionName="dislikes">
        <Gallery>
          {img.map((currImg) => (
            <React.Fragment key={currImg.id}>
              {renderDislikeImg(currImg.value, currImg)}
            </React.Fragment>
          ))}
        </Gallery>
      </ContentSection>
    );
  }
};

export default DislikesSection;
