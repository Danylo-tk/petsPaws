import { useFetch } from "../../../hooks/useFetch";
import React, { useEffect } from "react";
import palette from "../../../style/palette";
import {
  Gallery,
  IconBox,
  Img,
  ImgContainer,
  ImgWrapper,
  Overlay,
} from "./components";
import { apiKey } from "../../../keys";
import EmptyPageBox from "../../EmptyPageBox";
import ContentSection from "../ContentSection";

const LikesSection = () => {
  const { request, deleteImg, img } = useFetch();

  useEffect(() => {
    request("https://api.thecatapi.com/v1/votes?sub_id=user-123", {
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
      },
    });
  }, [img]);

  const renderLikeImg = (val: any, currImg: any) => {
    if (val === 1) {
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
                sentiment_satisfied
              </span>
            </IconBox>
          </Overlay>
        </ImgContainer>
      );
    } else {
    }
  };

  let dislikes = 0;
  img.map((currImg) => (currImg.value < 0 ? dislikes++ : dislikes--));
  if (img.length == dislikes) {
    return (
      <ContentSection sectionName="likes">
        <EmptyPageBox />
      </ContentSection>
    );
  } else {
    return (
      <ContentSection sectionName="likes">
        <Gallery>
          {img.map((currImg) => (
            <React.Fragment key={currImg.id}>
              {renderLikeImg(currImg.value, currImg)}
            </React.Fragment>
          ))}
        </Gallery>
      </ContentSection>
    );
  }
};

export default LikesSection;
