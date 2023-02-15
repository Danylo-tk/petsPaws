import { useFetch } from "../../../hooks/useFetch";
import { useEffect } from "react";
import palette from "../../../style/palette";
import {
  Img,
  Gallery,
  ImgContainer,
  Overlay,
  GalleryWrapper,
  IconBox,
} from "./components";
import { apiKey } from "../../../keys";
import EmptyPageBox from "../../EmptyPageBox";
import ContentSection from "../ContentSection";

const FavouritesSection = () => {
  const { request, deleteImg, img } = useFetch();

  useEffect(() => {
    request(
      "https://api.thecatapi.com/v1/favourites?limit=20&sub_id=user-123&order=DESC",
      {
        headers: {
          "content-type": "application/json",
          "x-api-key": apiKey,
        },
      }
    );
  }, [img]);

  return (
    <ContentSection sectionName="favourites">
      <Gallery>
        {img.map((currImg) => (
          <GalleryWrapper key={currImg.id}>
            <ImgContainer>
              <Img src={currImg.image.url} alt="" />
            </ImgContainer>
            <Overlay>
              <IconBox
                onClick={() =>
                  deleteImg(
                    "https://api.thecatapi.com/v1/favourites/" + currImg.id
                  )
                }
              >
                <span
                  className="material-symbols-outlined"
                  style={{ color: palette.pinkPanter, fontSize: "4rem" }}
                >
                  favorite
                </span>
              </IconBox>
            </Overlay>
          </GalleryWrapper>
        ))}
      </Gallery>
      {img.length == 0 && <EmptyPageBox />}
    </ContentSection>
  );
};

export default FavouritesSection;
