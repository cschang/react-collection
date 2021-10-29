import React from 'react'

import { ReactComponent as BeLogo } from "./media/behance.svg";
import { ReactComponent as FBLogo } from "./media/facebook.svg";
import { ReactComponent as IGLogo } from "./media/instagram.svg";
import { ReactComponent as YtLogo } from "./media/youtube.svg";
import photo from "./media/photo.jpg";
import banner from "./media/banner.jpg";
import banner1 from "./media/brand_img1.jpg";
import banner2 from "./media/brand_img2.jpg";
import banner3 from "./media/brand_img3.jpg";
import work1 from "./media/work_img1.jpg";
import work2 from "./media/work_img2.jpg";
import work3 from "./media/work_img3.jpg";
import work4 from "./media/work_img4.jpg";
import work5 from "./media/work_img5.jpg";
import work6 from "./media/work_img6.jpg";
import work7 from "./media/work_img7.jpg";
import work8 from "./media/work_img8.jpg";


import {
  BannerPage,
  BannerAD,
  TextSmall,
  TextSmall36,
  TextBig,
  TextMid,
  TextXSmall,
  Logos,
  WhitePage,
  PageContainer,
  Photo,
  Education,
  Experience,
  Experienceli,
  BlackPage,
  FlexDiv,
  BrandContainer,
  FlexColumn,
} from "./Hw2Styled";
const Hw2Page = () => {

  return (
    <>
      <BannerPage img={banner}>
        <BannerAD>
          <TextSmall>Here's</TextSmall>
          <TextBig>JOANNE</TextBig>
          <TextSmall36 mt={32}>
            Founder of “XXXD Official’’
            <br />& Graphic Designer
          </TextSmall36>
          <Logos mt={40}>
            <li>
              <a href="/#">
                <BeLogo className="logo" />
              </a>
            </li>
            <li>
              <a href="/#">
                <FBLogo className="logo" />
              </a>
            </li>
            <li>
              <a href="/#">
                <IGLogo className="logo" />
              </a>
            </li>
            <li>
              <a href="/#">
                <YtLogo className="logo" />
              </a>
            </li>
          </Logos>
        </BannerAD>
      </BannerPage>
      <WhitePage>
        <PageContainer>
          <TextMid mt={56}>About</TextMid>
          <Photo mt={40} src={photo} alt="selfie" />
          <TextSmall mt={20}>Joanne Chen</TextSmall>
          <TextSmall mt={4}>1997/10/10</TextSmall>
          <Education mt={8}>
            National Hex School Normal University
            <br />
            <span>Department of Visual Design</span>
          </Education>
          <Experience>
            <Experienceli>Founder of ‘’XXXD Official’’</Experienceli>
            <Experienceli>Graphic Designer</Experienceli>
            <Experienceli>Graphic Intern of Hex School</Experienceli>
          </Experience>
        </PageContainer>
      </WhitePage>

      <BlackPage>
        <BrandContainer>
          <TextMid mt={56}>My Brand ‘’XXXD’’</TextMid>
          <TextSmall mt={12}>Just Keep XXXD Everyday</TextSmall>
          <TextXSmall mt={32} style={{ textAlign: "center" }}>
            2020 年創立的個人服飾品牌
            <br />
            引領叛逆少年開啟與社會對話的窗口
            <br />
            主打概念潮流T-Shirt
          </TextXSmall>
          <Photo mt={68} src={banner1} alt="banner1" />
          <FlexDiv mt={40} mb={160}>
            <Photo src={banner2} mr={24} alt="banner2" />
            <Photo src={banner3} mr={24} alt="banner3" />
          </FlexDiv>
        </BrandContainer>
      </BlackPage>
      <WhitePage>
        <PageContainer>
          <TextMid mt={56}>Other Works</TextMid>
          <TextXSmall mt={16} style={{ textAlign: "center" }}>
            2016-2020 年累積的作品
            <br />
            海報/廣告/攝影/LOGO/3D
          </TextXSmall>
          <FlexDiv mt={56}>
            <FlexColumn>
              <Photo src={work1} mr={24} alt="work1" />
              <TextXSmall mt={16}>海報設計/2017</TextXSmall>
            </FlexColumn>
            <FlexColumn>
              <Photo src={work2} mr={24} alt="work2" />
              <TextXSmall mt={16}>海報設計/2018</TextXSmall>
            </FlexColumn>
            <FlexColumn>
              <Photo src={work3} mr={24} alt="work3" />
              <TextXSmall mt={16}>海報設計/2018</TextXSmall>
            </FlexColumn>
          </FlexDiv>
          <FlexDiv mt={48}>
            <FlexColumn>
              <Photo src={work4} mr={24} alt="work4" />
              <TextXSmall mt={16}>概念攝影/2018</TextXSmall>
            </FlexColumn>
            <FlexColumn>
              <Photo src={work5} mr={24} alt="work5" />
              <TextXSmall mt={16}>概念攝影/2018</TextXSmall>
            </FlexColumn>
          </FlexDiv>
          <FlexDiv mt={48} mb={144}>
            <FlexColumn>
              <Photo src={work6} mr={24} alt="work6" />
              <TextXSmall mt={16}>sasa 酒標設計/2019</TextXSmall>
            </FlexColumn>
            <FlexColumn>
              <Photo src={work7} mr={24} alt="work7" />
              <TextXSmall mt={16}>攝影創作/2018</TextXSmall>
            </FlexColumn>
            <FlexColumn>
              <Photo src={work8} mr={24} alt="work8" />
              <TextXSmall mt={16}>攝影創作/2018</TextXSmall>
            </FlexColumn>
          </FlexDiv>
        </PageContainer>
      </WhitePage>
      <BlackPage>
        <BrandContainer>
          <TextMid mt={64}>Contact</TextMid>
          <TextSmall mt={16}>Mail：xxxd@hexschool.com</TextSmall>
          <TextSmall mt={16} mb={64}>Phone Number：0910123456</TextSmall>
        </BrandContainer>
      </BlackPage>
    </>
  );
}

export default Hw2Page
