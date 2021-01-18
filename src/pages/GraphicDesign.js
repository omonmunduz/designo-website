import { useState } from 'react';
import HeroTitleContainer from '../components/shared/HeroTitleContainer';
import HeroTextWrapper from '../components/shared/HeroTextWrapper';
import HeroTitle from '../components/shared/HeroTitle';
import ShowcaseContainer from '../components/shared/ShowcaseContainer';
import Main from '../components/shared/Main';
import ShowcaseImg from '../components/shared/ShowcaseImg';
import ShowcaseText from '../components/shared/ShowcaseText';
import ShowcaseTitle from '../components/shared/ShowcaseTitle';
import ExploreServices from '../components/Home/ExploreServices';

import timImg from '../images/graphic-design/desktop/image-change.jpg';
import boxImg from '../images/graphic-design/desktop/image-boxed-water.jpg';
import scienceImg from '../images/graphic-design/desktop/image-science.jpg';


const GraphicDesign = () => {
  const [showcases] = useState([
    {id:1, title:'Tim Brown', text:'A book cover designed for Tim Brown’s new release, ‘Change’', bg: timImg},
    {id:2, title:'Boxed water', text:'A simple packaging concept made for Boxed Water', bg: boxImg},
    {id:3, title:'Science!', text: 'A poster made in collaboration with the Federal Art Project', bg: scienceImg},
  ]);

  return <>
    <HeroTitleContainer>
      <HeroTextWrapper>
        <HeroTitle>Graphic Design</HeroTitle>
        <p>We deliver eye-catching branding materials that are tailored to meet your business objectives.</p>
      </HeroTextWrapper>
    </HeroTitleContainer>
    <Main>
        {showcases.map(item => {
        return (
          <ShowcaseContainer>
            <ShowcaseImg src={item.bg} alt={item.title}/>
            <ShowcaseText>
              <ShowcaseTitle>{item.title}</ShowcaseTitle>
              <p>{item.text}</p>
            </ShowcaseText>
          </ShowcaseContainer>
        )
      })}
        </Main>
        <ExploreServices />
  </>
};
export default GraphicDesign;
