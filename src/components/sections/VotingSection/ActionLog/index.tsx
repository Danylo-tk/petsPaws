import palette from "../../../../style/palette";
import { Container, ContentContainer, LogMsg, TimeBox } from "./components";

interface LogProps {
  action: string;
}

const ActionLog = ({ action }: LogProps) => {
  const time = new Date();
  const currTime = time.getHours() + ":" + time.getMinutes();

  return (
    <Container>
      <ContentContainer>
        <TimeBox>{currTime}</TimeBox>
        <LogMsg>Image was added to {action}</LogMsg>
      </ContentContainer>
      {(action === "Likes" && (
        <span
          className="material-symbols-outlined"
          style={{ color: palette.cannabisGreen, fontSize: "3rem" }}
        >
          sentiment_satisfied
        </span>
      )) ||
        (action === "Favourites" && (
          <span
            className="material-symbols-outlined"
            style={{ color: palette.pinkPanter, fontSize: "3rem" }}
          >
            favorite
          </span>
        )) ||
        (action === "Dislikes" && (
          <span
            className="material-symbols-outlined"
            style={{ color: palette.peachYellow, fontSize: "3rem" }}
          >
            sentiment_dissatisfied
          </span>
        ))}
    </Container>
  );
};

export default ActionLog;
