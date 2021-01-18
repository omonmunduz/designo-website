import { useState } from "react";
import HeroTitleContainer from "../components/shared/HeroTitleContainer";
import HeroTextWrapper from "../components/shared/HeroTextWrapper";
import HeroTitle from "../components/shared/HeroTitle";
import ShowcaseContainer from "../components/shared/ShowcaseContainer";
import Main from "../components/shared/Main";
import ShowcaseImg from "../components/shared/ShowcaseImg";
import ShowcaseText from "../components/shared/ShowcaseText";
import ShowcaseTitle from "../components/shared/ShowcaseTitle";
import ExploreServices from "../components/Home/ExploreServices";

import airImg from "../images/app-design/desktop/image-airfilter.jpg";
import eyeCamImg from "../images/app-design/desktop/image-eyecam.jpg";
import faceImg from "../images/app-design/desktop/image-faceit.jpg";
import todoImg from "../images/app-design/desktop/image-todo.jpg";
import loopImg from "../images/app-design/desktop/image-loopstudios.jpg";

const AppDesign = () => {
  const [showcases] = useState([
    {
      id: 1,
      title: "Airfilter",
      text:
        "Solving the problem of poor indoor air quality by filtering the air",
      bg: airImg,
    },
    {
      id: 2,
      title: "Eyecam",
      text:
        " Product that lets you edit your favorite photos and videos at any time",
      bg: eyeCamImg,
    },
    {
      id: 3,
      title: "Faceit",
      text: "Get to meet your favorite internet superstar with the faceit app",
      bg: faceImg,
    },
    {
      id: 4,
      title: "Todo",
      text: "A todo app that features cloud sync with light and dark mode",
      bg: todoImg,
    },
    {
      id: 5,
      title: "Loopstudios",
      text: "A VR experience app made for Loopstudios",
      bg: loopImg,
    },
  ]);
  return (
    <>
      <HeroTitleContainer>
        <HeroTextWrapper>
          <HeroTitle> App Design </HeroTitle>
          <p>
            Our mobile designs bring intuitive digital solutions to your
            customers right at their fingertips.
          </p>
        </HeroTextWrapper>
      </HeroTitleContainer>
      <Main>
        {showcases.map((item) => {
          return (
            <ShowcaseContainer>
              <ShowcaseImg src={item.bg} alt={item.title} />
              <ShowcaseText>
                <ShowcaseTitle>{item.title}</ShowcaseTitle>
                <p>{item.text}</p>
              </ShowcaseText>
            </ShowcaseContainer>
          );
        })}
      </Main>
      <ExploreServices />
    </>
  );
};
export default AppDesign;
