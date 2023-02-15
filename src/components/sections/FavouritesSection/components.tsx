import styled from "styled-components";

const Gallery = styled.div`
  gap: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const GalleryWrapper = styled.div`
  position: relative;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 20rem;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2rem;
`;

const Overlay = styled.div`
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  border-radius: 2rem;
  background-color: rgba(255, 134, 146, 0.6);

  :hover {
    opacity: 1;
  }
`;

const IconBox = styled.div`
  padding: 1rem;
  cursor: pointer;
  border-radius: 1rem;
  background-color: #fff;
`;

export { Gallery, GalleryWrapper, ImgContainer, Img, Overlay, IconBox };
