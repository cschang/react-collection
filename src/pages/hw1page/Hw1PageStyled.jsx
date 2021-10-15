import styled, { css } from "styled-components";

const fontRoboto = css`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
`;
const fontNoto = css`
  font-family: 'Noto Sans TC', sans-serif;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
`;

const leftBorderLine = css`
  border-left: 1px solid white;
  padding-left: 24px;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 63%;
  margin-left: 18.75%;

  hr {
    color: gray;
    background: gray;
    height: 0px;
    width: 100%;
  }
  .profile-photo {
    width: 27%;
    margin-top: 51px;
  }
  .logo {
    width: 90px;
    height: 90px;
    margin: 8px;
  }
`;
export const Name = styled.div`
  ${fontRoboto}
  margin-top: 37px;
  width: 264px;
  font-size: 80px;
  line-height: 106px;
`;

export const Photo = styled.img`
  width: 27%;
  margin-top: ${({ mt }) => (mt ? mt + "px" : "0px")};
`;
export const TitleNoto = styled.div`
  ${fontNoto}
  font-size: 32px;
  line-height: 43px;
  display: flex;
  align-items: center;
  margin-top: ${ ({ mt }) => (mt? mt +"px" : "0px")  };
`;      
export const Titlefont = styled.span`
  ${fontRoboto}
  color: ${({ color }) => (color ? color : "#A00404")};
  margin-left: 16px;
  font-size: 24px;
`;

export const Introduce = styled.div`
  ${fontNoto}
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0px;
  margin-top: ${({ mt }) => (mt ? mt + "px" : "0px")};
`;      

export const IntroduceSmall = styled(Introduce)`
    font-size: 20px;
    line-height: 30px;
`;
export const BlueCover = styled.div`
  margin-top: ${({ mt }) => (mt ? mt + "px" : "0px")};
  width: 100%;
  color: white;
  background: #415165 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: center;
  padding-top: 24px;
`;
export const BlueContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  hr {
    width: 100%;
    height: 0px;
    color: white;
  }
`;
const Bluelist = styled.div`
  ${fontRoboto}
  margin-top: ${({ mt }) => (mt ? mt + "px" : "0px")};
  margin-bottom: ${({ mb }) => (mb ? mb + "px" : "0px")};
  font-size: 24px;
  line-height: 36px;
`;
export const BluelistWithLB = styled(Bluelist)`
  ${leftBorderLine}
`;
export const BluelistWithflex = styled(Bluelist)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Logolist = styled.ul`
  margin-top: ${({ mt }) => (mt ? mt + "px" : "0px")};
  list-style-type: none;
  display: flex;
  li {
    margin-right: 24px;
  }
`;
