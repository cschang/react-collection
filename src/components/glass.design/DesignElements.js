import styled from 'styled-components';
import {Link } from 'react-router-dom'

export const DesignSection = styled.section`
  background-image: url(https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/bg.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  padding: 64px 0 80px 0;
  @media screen and (max-width: 1024px) {
    padding: 40px 0 40px 0;
  }
  @media screen and (max-width: 768px) {
    padding: 32px 0 32px 0; 
  }
`;
export const DesignContainer = styled.div`
    max-width: 1110px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding-right: 15px;
    padding-left: 15px;
    @media screen and (max-width: 1024px) {
      padding-right: 39px;
      padding-left: 39px;
   }
    @media screen and (max-width: 768px) {
      padding-right: 15px;
      padding-left: 15px;
   }
`
export const DesignH2 = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 60px;
    text-align: center;
    color: white;
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
export const DesignUl = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
  margin-right: -15px;
  margin-left: -15px;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    margin-right: 15px;
    margin-left: 15px;
  }
  @media screen and (max-width: 1024px) {
    margin-right: 39px;
    margin-left: 39px;
  }
`;
export const DesignLi = styled.li`
  width: 100%;
  max-width: 50%;
  padding-left: 15px;
  padding-right: 15px;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 16px;
  }
`
export const DesignA = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    text-decoration: none;
    transition: all ease 300ms;
`
export const DesignImg = styled.img`
  opacity: 0.5;
  transition: .5s;
      display: block;
    max-width: 100%;
    height: auto;
`
export const DesignH3 = styled.h3`
  font-size: 72px;
  transition: 0.5s;
  font-weight: 700;
  color: #AA0601;
  position: absolute;
  line-height: 1.2;
  @media screen and (max-width: 1024px) {
      font-size: 2rem;
  }
`
