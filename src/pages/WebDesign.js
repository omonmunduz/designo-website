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

import expressImg from "../images/web-design/desktop/image-express.jpg";
import transferImg from "../images/web-design/desktop/image-transfer.jpg";
import photonImg from "../images/web-design/desktop/image-photon.jpg";
import builderImg from "../images/web-design/desktop/image-builder.jpg";
import blogrImg from "../images/web-design/desktop/image-blogr.jpg";
import campImg from "../images/web-design/desktop/image-camp.jpg";

const WebDesign = () => {
  const [showcases] = useState([
    {
      id: 1,
      title: "EXPRESS",
      text: "A multi-carrier shipping website for ecommerce businesses",
      bg: expressImg,
    },
    {
      id: 2,
      title: "TRANSFER",
      text:
        "  Site for low-cost money transfers and sending money within seconds",
      bg: transferImg,
    },
    {
      id: 3,
      title: "PHOTON",
      text:
        "A state-of-the-art music player with high-resolution audio and DSP effects",
      bg: photonImg,
    },
    {
      id: 4,
      title: "BUILDER",
      text: "Connects users with local contractors based on their location",
      bg: builderImg,
    },
    {
      id: 5,
      title: "BLOGR",
      text: "Blogr is a platform for creating an online blog or publication",
      bg: blogrImg,
    },
    {
      id: 6,
      title: "CAMP",
      text:
        " Get expert training in coding, data, design, and digital marketing",
      bg: campImg,
    },
  ]);
  return (
    <>
      <HeroTitleContainer>
        <HeroTextWrapper>
          <HeroTitle>Web Design</HeroTitle>
          <p>
            {" "}
            We build websites that serve as powerful marketing tools and bring
            memorable brand experiences.
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
export default WebDesign;
