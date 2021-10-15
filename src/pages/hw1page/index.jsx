import React from "react";
// import "./hw1page.scss";
import photo from "./media/photo.png";
import TreeLogo from "./media/simtree.png";
import { ReactComponent as HexLogo } from "./media/Group 1.svg";
import { ReactComponent as FBLogo } from "./media/facebook.svg";
import { ReactComponent as IGLogo } from "./media/instagram-alt.svg";
import { ReactComponent as LineLogo } from "./media/line.svg";
import {
  info,
  target,
  experience,
  skills,
  education,
  contact,
  expDetail,
} from "./data";
import {
  PageContainer,
  Name,
  Photo,
  TitleNoto,
  Titlefont,
  Introduce,
  BlueCover,
  BlueContainer,
  IntroduceSmall,
  BluelistWithLB,
  BluelistWithflex,
  Logolist,
} from "./Hw1PageStyled";
const hw1 = () => {
  return (
    <>
      <PageContainer>
        <Name>
          Joanne
          <br />
          Chen
        </Name>
        <hr />
        <Photo mt={48} src={photo} alt="profile" />
        <TitleNoto mt={48}>
          個人資料<Titlefont>PROFILE</Titlefont>
        </TitleNoto>
        <hr />
        <Introduce mt={16}>
          {info.map((x) => (
            <div>{x}</div>
          ))}
        </Introduce>
        <Introduce mt={24}>
          {target.map((x) => (
            <div>{x}</div>
          ))}
        </Introduce>
        <TitleNoto mt={48}>
          學歷<Titlefont>EDUCATION</Titlefont>
        </TitleNoto>
        <hr />
        {education.map((x) => (
          <Introduce mt={x.top}>{x.name}</Introduce>
        ))}
      </PageContainer>
      <BlueCover mt={72}>
        <BlueContainer>
          <TitleNoto>
            技能<Titlefont color={"white"}>SKILLS</Titlefont>
          </TitleNoto>
          <hr />
          <BluelistWithLB mt={36} mb={36}>
            {skills.map((x) => (
              <div>{x}</div>
            ))}
            <span className="font-Noto">語言：中文、英文</span>
          </BluelistWithLB>
        </BlueContainer>
      </BlueCover>
      <PageContainer>
        <TitleNoto mt={72}>
          工作經驗<Titlefont>EDUCATION</Titlefont>
        </TitleNoto>
        <hr />
        <Introduce mt={16}>
          六角學院 視覺設計實習生 | 2019/07－2020/06
        </Introduce>
        <HexLogo className="logo" />
        <IntroduceSmall>
          {expDetail.map((x) => (
            <div>{x}</div>
          ))}
        </IntroduceSmall>
        {experience.map((x) => (
          <Introduce mt={24}>{x}</Introduce>
        ))}
        <img
          src={
            TreeLogo
          }
          alt="tree"
          className="logo"
        />
        <IntroduceSmall mt={16}>
          擔任外場及吧台服務生，學習咖啡相關知識。
        </IntroduceSmall>
      </PageContainer>

      <BlueCover mt={72}>
        <BlueContainer>
          <TitleNoto>
            聯絡方式<Titlefont color={"white"}>CONTACT METHOD</Titlefont>
          </TitleNoto>
          <hr />
          <BluelistWithflex>
            {contact.map((x) => (
              <span className="mt16">{x}</span>
            ))}
            <Logolist mt={16}>
              <li>
                <a href="/">
                  <FBLogo />
                </a>
              </li>
              <li>
                <a href="/">
                  <IGLogo />
                </a>
              </li>
              <li>
                <a href="/">
                  <LineLogo />
                </a>
              </li>
            </Logolist>
          </BluelistWithflex>
        </BlueContainer>
      </BlueCover>
    </>
  );
};

export default hw1;
