import styled from "styled-components";

const Gallery = styled.div`
  gap: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ImgContainer = styled.div`
  position: relative;
`;

const ImgWrapper = styled.div`
  height: 20rem;
  width: 100%;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
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

export { Gallery, ImgWrapper, ImgContainer, Img, Overlay, IconBox };
