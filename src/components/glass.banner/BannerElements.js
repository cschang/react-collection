import styled from 'styled-components';

export const Banner = styled.header`
    background-image: url("https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/banner.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display:flex;
    align-items: center;
    justify-content: center;
    height: 840px;
    @media screen and (max-width: 768px) {
      background-image:  url("https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/banner-sm.png");
       height: 394px;
    }
`
export const Container = styled.div`
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;
  @media screen and (max-width: 1024px) {
    padding-right: 39px;
    padding-left: 39px;
  }
`
export const Containerh1 = styled.h1`
  text-align: right;
  color: #6d0401;
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.2;
  @media screen and (max-width: 1024px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 767px) {
    font-size: 2rem;
  }
`
export const ContainerSpan = styled.span`
  font-weight: 400;
  display: block;
  font-size: 2.25rem;
  @media screen and (max-width: 1024px) {
    font-size: 1.25rem;
    font-weight: 500;
  }
  @media screen and (max-width: 767px) {
    font-size: 1rem;
  }
}
`
