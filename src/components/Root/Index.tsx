import { Routes, Route } from "react-router-dom";
import { Container, Wrapper } from "./components";
import GlobalStyle from "../../style/GlobalStyle";
import FavouritesSection from "../sections/FavouritesSection";
import DislikesSection from "../sections/DislikesSection";
import PreviewSection from "../sections/PreviewSection";
import VotingSection from "../sections/VotingSection";
import LikesSection from "../sections/LikesSection";
import NavSection from "../sections/NavSection";

const Root = () => {
  return (
    <>
      <GlobalStyle />

      <Container>
        <Wrapper>
          <NavSection />
          <Routes>
            <Route path="/" element={<PreviewSection />} />
            <Route path="vote" element={<VotingSection />} />
            <Route path="breeds" />
            <Route path="gallery" />
            <Route path="likes" element={<LikesSection />} />
            <Route path="favourites" element={<FavouritesSection />} />
            <Route path="dislikes" element={<DislikesSection />} />
          </Routes>
        </Wrapper>
      </Container>
    </>
  );
};

export default Root;
