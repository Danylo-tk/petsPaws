import styled from "styled-components";
import palette from "../../style/palette";

const Container = styled.div`
  width: 100%;
  height: 6rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  background-color: ${palette.ghostGray};
`;

const Text = styled.h1`
  font-weight: 300;
  font-size: 1.6rem;
  color: ${palette.outcastGray};
`;

export { Container, Text };
