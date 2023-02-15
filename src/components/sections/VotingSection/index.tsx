import React, { useEffect, useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import _uniqueId from "lodash.uniqueid";
import { Img, ImgContainer, LogList, MainPart } from "./components";
import ContentSection from "../ContentSection";
import VotingWidget from "./VotingVidget";
import ActionLog from "./ActionLog";
import Loader from "./Loader";

const VotingSection = () => {
  const [userActions, setUserActions] = useState<any[]>([]);

  const addAction = (action: string) => {
    setUserActions(
      userActions.concat(
        <React.Fragment key={_uniqueId()}>
          <ActionLog action={action} />
        </React.Fragment>
      )
    );
  };

  const { request, img, spinner } = useFetch();

  useEffect(() => {
    request("https://api.thecatapi.com/v1/images/search");
  }, []);

  let imgId = img.map((e) => e.id).toString();

  return (
    <ContentSection sectionName="voting">
      <MainPart>
        {spinner ? (
          <Loader />
        ) : (
          <ImgContainer>
            {img.map((currImg) => (
              <React.Fragment key={currImg.id}>
                <Img src={currImg.url} alt="Kitten" />
              </React.Fragment>
            ))}
          </ImgContainer>
        )}
        <div
          onClick={() => request("https://api.thecatapi.com/v1/images/search")}
        >
          <VotingWidget userActions={addAction} currImgId={imgId} />
        </div>

        <LogList>{userActions}</LogList>
      </MainPart>
    </ContentSection>
  );
};

export default VotingSection;
