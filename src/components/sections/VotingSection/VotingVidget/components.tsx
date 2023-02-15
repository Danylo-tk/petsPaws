import styled from "styled-components";

const Container = styled.div`
  top: -5rem;
  width: 24rem;
  height: 8rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  border-radius: 2.6rem;
  border: 0.5rem solid white;
`;

const VotingIcon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export { Container, VotingIcon };
