import palette from "../../../../style/palette";
import { Container, VotingIcon } from "./components";
import { apiKey } from "../../../../keys";

interface WidgetProps {
  userActions: Function;
  currImgId: string;
}

const VotingWidget = ({ userActions, currImgId }: WidgetProps) => {
  const likeCat = () => {
    const url = "https://api.thecatapi.com/v1/votes";
    const options = {
      method: "POST",
      headers: { "content-type": "application/json", "x-api-key": apiKey },
      body: JSON.stringify({
        image_id: currImgId,
        sub_id: "user-123",
        value: 1,
      }),
    };

    fetch(url, options);
    userActions("Likes");
  };

  const favouriteCat = () => {
    const url = "https://api.thecatapi.com/v1/favourites";
    const options = {
      method: "POST",
      headers: { "content-type": "application/json", "x-api-key": apiKey },
      body: JSON.stringify({
        image_id: currImgId,
        sub_id: "user-123",
      }),
    };

    fetch(url, options);
    userActions("Favourites");
  };

  const dislikeCat = () => {
    const url = "https://api.thecatapi.com/v1/votes";
    const options = {
      method: "POST",
      headers: { "content-type": "application/json", "x-api-key": apiKey },
      body: JSON.stringify({
        image_id: currImgId,
        sub_id: "user-123",
        value: -1,
      }),
    };

    fetch(url, options);
    userActions("Dislikes");
  };

  return (
    <Container>
      <VotingIcon
        style={{
          backgroundColor: palette.cannabisGreen,
          borderRadius: "2rem 0 0 2rem",
        }}
        onClick={likeCat}
      >
        <span
          className="material-symbols-outlined"
          style={{ color: "white", fontSize: "4rem" }}
        >
          sentiment_satisfied
        </span>
      </VotingIcon>

      <VotingIcon
        style={{
          backgroundColor: palette.pinkPanter,
          borderLeft: "0.5rem solid white",
          borderRight: "0.5rem solid white",
        }}
        onClick={favouriteCat}
      >
        <span
          className="material-symbols-outlined"
          style={{ color: "white", fontSize: "4rem" }}
        >
          favorite
        </span>
      </VotingIcon>

      <VotingIcon
        style={{
          backgroundColor: palette.peachYellow,
          borderRadius: "0 2rem 2rem 0",
        }}
        onClick={dislikeCat}
      >
        <span
          className="material-symbols-outlined"
          style={{ color: "white", fontSize: "4rem" }}
        >
          sentiment_dissatisfied
        </span>
      </VotingIcon>
    </Container>
  );
};

export default VotingWidget;
