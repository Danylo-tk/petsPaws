import { LoaderContainer } from "./components";
import loaderImg from "../../../../assets/blocks-shuffle-loader.svg";

const Loader = () => {
  return (
    <LoaderContainer>
      <img src={loaderImg} alt="" />
      <h1>Loading...</h1>
    </LoaderContainer>
  );
};

export default Loader;
