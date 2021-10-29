import styled from 'styled-components';
import {Link } from 'react-router-dom';

export const Footer = styled.footer`
      background: #AA0601;
      
`;
export const FooterContainer = styled.div`
  padding-bottom: 28px;
  padding-top: 36px;
    max-width: 1110px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    padding-right: 15px;
    padding-left: 15px;

  @media screen and (max-width: 1024px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media screen and (max-width: 768px) {
    padding-right: 15px;
    padding-left: 15px;
  }
`
export const FooterNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
  @media screen and (max-width: 1024px) {
    margin-bottom: 24px;
  }
  @media screen and (max-width: 768px) {
    float: right;
  }
`
export const FooterWordUl = styled.ul`
  list-style: none;
  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const FooterWordLi = styled.li`
  position: relative;
  margin-right: 32px;
  @media screen and (max-width: 1024px) {
    margin-right: 24px;
  }
`
export const FooterIconUl = styled.ul`
  display: flex;
  list-style: none;
`
export const FooterIconLi  = styled.li`
  margin-left: 32px;
  @media screen and (max-width: 1024px) {
    margin-left: 24px;
  }

`
export const FooterWordLink = styled(Link)`
  padding-left: 8px;
  padding-right: 8px;
  color: white;
  text-decoration: none;
  transition: all ease 300ms;
`
export const FooterIconLink = styled(Link)`
  display: flex;
  color: white;
  text-decoration: none;
  transition: all ease 300ms;
`

export const FooterImg = styled.img`
  padding: 0 6px;
  margin-right: 14px;
  display: block;
  max-width: 100%;
  height: auto;
  @media screen and (max-width: 1024px) {
    padding: 0 5px;
    width: 28px;
    margin-right: 10px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 2px;
    width: 16px;
  }
`
export const FooterIcon = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  transition: all ease 300ms;
  @media screen and (max-width: 1024px) {
    width: 24px;
  }
`
export const FooterInfoUl = styled.ul`
  padding-bottom: 22px;
  border-bottom: 1px solid white;
  line-height: 48px;
  font-size: 42px;
  margin-bottom: 24px;
  list-style: none;
  @media screen and (max-width: 1024px) {
    padding-bottom: 27px;
    line-height: 26px;
    font-size: 1.25rem;
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 24px;
    line-height: 21px;
    margin-bottom: 18px;
    font-size: 1rem;
  }
`
export const FooterInfoLi = styled.li`
  margin-bottom: 17px;
  @media screen and (max-width: 1024px) {
    margin-bottom: 11px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 7px;
  }
`
export const FooterInfoLink = styled(Link)`
  display: flex;
  color: white;
  text-decoration: none;
  transition: all ease 300ms;
`

export const Footerbuttom = styled.div`
  display: flex;
  box-pack: justify;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    margin-bottom: 8px;
  }
`

export const FooterCopyRight = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1024px) {

  }
  @media screen and (max-width: 768px) {

  }
`
export const FooterCopyRightLink = styled(Link)`
  margin-right: 38px;
  color: white;
  text-decoration: none;
  transition: all ease 300ms;
  @media screen and (max-width: 1024px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    width: 46px;
    margin-right: 0;
  }
`
export const FooterCopyRightImg = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`
export const FooterCopyRightP = styled.p`
  font-size: 0.875rem;
  color: white;
`
export const FooterPolicy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  box-align: end;
  @media screen and (max-width: 1024px) {

  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`


export const FooterPolicyUl = styled.ul`
  display: flex;
  font-size: 0.875rem;
  list-style: none;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const FooterPolicyLi  = styled.li`
  margin-left: 0;
`
export const FooterServiceLi  = styled.li`
  margin-left: 62px;
  @media screen and (max-width: 1024px) {
    margin-left: 24px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`
export const FooterPolicyLink = styled(Link)`
  margin-right: 38px;
  color: white;
  text-decoration: none;
  transition: all ease 300ms;
  @media screen and (max-width: 768px) {
  }
`
export const FooterPolicyLinkRight = styled(Link)`
  margin-right: 38px;
  color: white;
  display: none;
  text-decoration: none;
  transition: all ease 300ms;
  @media screen and (max-width: 768px) {
    width: 46px;
    margin-right: 0;
    display: inline-block;
  }
`
export const FooterbuttonImg = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  @media screen and (max-width: 1024px) {

  }
  @media screen and (max-width: 768px) {

  }
`
// ===
// export const Footer = styled.`
//   @media screen and (max-width: 1024px) {

//   }
//   @media screen and (max-width: 768px) {

//   }
// `
