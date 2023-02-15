import styled from "styled-components";

const MainPart = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ImgContainer = styled.div`
  height: 30rem;
`;

const Img = styled.img`
  height: 100%;
  max-width: 100%;
  object-fit: contain;
  border-radius: 2rem;
`;

const LogList = styled.div`
  gap: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export { MainPart, ImgContainer, Img, LogList };
