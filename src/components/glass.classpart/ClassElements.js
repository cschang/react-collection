import styled from 'styled-components';

export const ClassSection = styled.section`

    @media screen and (max-width: 1024px) {
        padding: 40px 0 40px 0;
    }
    @media screen and (max-width: 768px) {
        padding: 32px 0 32px 0;
    }
`
export const ClassContainer = styled.div`
  color: #6d0401;
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;
  padding: 64px 0 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ClassH2 = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 60px;
    text-align: center;
    line-height: 1.2;
    @media screen and (max-width: 1024px) {
        font-size: 2rem;
        margin-bottom: 32px;
    }
    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
        margin-bottom: 20px;
    }
`
export const ClassUl = styled.ul`
  width: 80vw;
  & :first-child, & :last-child {
    margin-left: 60px;
    @media screen and (max-width: 1024px) {
      margin-left: 10px;
    }
    @media screen and (max-width: 768px) {
      margin-left: 0px;
    }
  }
`;
export const ClassLi = styled.li`
    font-size: 48px;
    margin-bottom: 32px;
    display: flex;
    box-align: center;
    align-items: center;
    position: relative;

    @media screen and (max-width: 1024px) {
        font-size: 28px;
        margin-bottom: 8px;
    }
    @media screen and (max-width: 768px) {
        margin-bottom: 8px;
    }
`
export const ClassImg = styled.img`
    max-width: 58.33333%;
    padding-left: 15px;
    padding-right: 15px;
    height: auto;
    @media screen and (max-width: 768px) {
        max-width: 100%;
    }
`
export const ClassH3 = styled.h3`
    font-style: italic;
    text-transform: uppercase;
    font-weight: 900;
    display: flex;
    box-align: center;
    align-items: center;
    color: #AA0601;
    max-width: 41.66667%;
    padding-left: 15px;
    padding-right: 15px;
    @media screen and (max-width: 768px) {
        position: absolute;
        color: white;
    }
`

export const ClassIcon = styled.img`
      position: relative;
      height: 48px;
      width: 48px;
      margin-right: 8px;
      background-size: contain;
      background-repeat: no-repeat;
        @media screen and (max-width: 768px) {
            color: white;
        }
`
