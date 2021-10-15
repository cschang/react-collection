
import styled, { css } from "styled-components";


export const BannerPage = styled.div`
  min-height: 100vh;
  max-width: 100%;
  background: transparent url(${({ img }) => (img ? img : "")}) center 0%
    no-repeat padding-box;
  border: 1px solid #707070;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BannerAD = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
`;
export const TextBig = styled.div`
  font-style: italic;
  font-variant: normal;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 80px;
  line-height: 106px;
  margin-top: ${({ mt }) => (mt ? mt + "px" : "0px")};
  margin-bottom: ${({ mb }) => (mb ? mb + "px" : "0px")};
`;
export const TextMid = styled(TextBig)`
  font-size: 64px;
  line-height: 84px;
  font-weight: 500;
`;
export const TextSmall = styled(TextMid)`
  font-weight: bold;
  font-size: 24px;
  line-height: 42px;
`;
export const TextSmall36 = styled(TextSmall)`
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
`;
export const TextXSmall = styled(TextSmall)`
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
`;
export const Logos = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  margin-top: ${({ mt }) => (mt ? mt + "px" : "0px")};
  .logo {
    width: 60px;
    height: 60px;
  }
`;

export const WhitePage = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
`;
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
`;
export const Photo = styled.img`
  margin-top: ${({ mt }) => (mt ? mt + "px" : "0px")};
  margin-right: ${({ mr }) => (mr ? mr + "px" : "0px")};
  width: ${({ w }) => (w ? w : "auto")};
`;

export const Education = styled(TextSmall36)`
  text-align: center;
  border-bottom: gray solid 1px;
  padding-bottom: 24px;
`;

export const Experience = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 56px;
`;
export const Experienceli = styled.li`
  position: relative;
  margin-top: 28px;
  font-size: 24px;
  line-height: 42px;
  font-weight: bold;
  &::before {
    position: absolute;
    content: "";
    width: 22px;
    height: 22px;
    border-radius: 11px;
    background: #891818;
    left: -30px;
    top: 11px;
  }
`;
export const BlackPage = styled.div`
  display: flex;
  justify-content: center;
  background: #000;
  color: white;
`;
export const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: ${({ mt }) => (mt ? mt + "px" : "0px")};
  margin-bottom: ${({ mb }) => (mb ? mb + "px" : "0px")};
`;

export const FlexColumn = styled(FlexDiv)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
