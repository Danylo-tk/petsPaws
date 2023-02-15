import palette from "../../../style/palette";
import { Text, Wrapper } from "./components";
import logoImg from "../../../assets/logo.png";
import Navigation from "../../Navigation";

const NavSection = () => {
  return (
    <div>
      <Wrapper>
        <div>
          <img src={logoImg} alt="" />
        </div>
        <div>
          <Text size={4.4} weight={500}>
            Hi there!
          </Text>
          <Text color={palette.outcastGray} size={2} weight={400}>
            Welcome to Front-end test
          </Text>
        </div>
        <div>
          <Text size={2} weight={500}>
            Lets start using The Cat API
          </Text>
          <Navigation />
        </div>
      </Wrapper>
    </div>
  );
};

export default NavSection;
