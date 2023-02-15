import styled from "styled-components";
import palette from "../../../../style/palette";

const Container = styled.div`
  width: 100%;
  height: 6rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  background-color: ${palette.ghostGray};
`;

const ContentContainer = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;
`;

const TimeBox = styled.div`
  padding: 0.5rem;
  font-size: 1.6rem;
  border-radius: 0.5rem;
  background-color: #fff;
`;

const LogMsg = styled.p`
  font-size: 1.6rem;
`;

export { Container, ContentContainer, TimeBox, LogMsg };
