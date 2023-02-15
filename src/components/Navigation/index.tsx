import { Link } from "react-router-dom";
import palette from "../../style/palette";
import { Btn, CardContainer, Container, ImgContainer } from "./components";
import phoneImg from "../../assets/images-search.png";
import paperImg from "../../assets/vote-table.png";
import catImg from "../../assets/pet-breeds.png";

const Navigation = () => {
  return (
    <Container>
      <Link to="/vote">
        <CardContainer>
          <ImgContainer cardColor={palette.violetsAreBlue}>
            <div>
              <img src={paperImg} alt="" />
            </div>
          </ImgContainer>

          <Btn>voting</Btn>
        </CardContainer>
      </Link>

      <CardContainer opacity={0.5}>
        <ImgContainer cardColor={palette.cannabisGreen}>
          <div>
            <img src={catImg} alt="" />
          </div>
        </ImgContainer>

        <Btn>breeds</Btn>
      </CardContainer>

      <CardContainer opacity={0.5}>
        <ImgContainer cardColor={palette.peachYellow}>
          <div>
            <img src={phoneImg} alt="" />
          </div>
        </ImgContainer>

        <Btn>gallery</Btn>
      </CardContainer>
    </Container>
  );
};

export default Navigation;
