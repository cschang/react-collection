import styled from 'styled-components';
import {Link } from 'react-router-dom'
export const RecommendSection = styled.section`
  padding-bottom: 64px;
  padding: 64px 0 80px 0;
  display: block;
  @media screen and (max-width: 1024px) {
    padding: 40px 0 40px 0;
  }
  @media screen and (max-width: 768px) {
    padding: 32px 0 32px 0;
  }
`

export const RecommendContainer = styled.div`
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px) {
    padding-right: 39px;
    padding-left: 39px;
  }
  @media screen and (max-width: 768px) {
    padding-right: 15px;
    padding-left: 15px;
  }
`
export const RecommendH2 = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 60px;
  text-align: center;
  color: #6d0401;
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
export const RecommendUl = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  margin-right: -15px;
  margin-left: -15px;
  list-style: none;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
export const RecommendLi = styled.li`
  max-width: 25%;
  padding-left: 15px;
  padding-right: 15px;
  @media screen and (max-width: 1024px) {
    max-width: 50%;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`
export const RecommendA = styled(Link)`
  color: #212529;
  margin-bottom: 32px;
  display: block;
  text-decoration: none;
  transition: all ease 300ms;
  @media screen and (max-width: 1024px) {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 16px;
  }
`
export const RecommendImg = styled.img`
  width: 100%;
  display: block;
  max-width: 100%;
  height: auto;
  box-sizing: border-box;
`
export const RecommendCard = styled.div`
  padding: 14px 16px;
  border: 1px solid #00000020;
  @media screen and (max-width: 1024px) {
    padding: 16px;
  }
`
export const RecommendH3 = styled.h3`
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.2;
  @media screen and (max-width: 1024px) {
    padding: 16px;
  }
`
export const RecommendP = styled.p`
  margin-bottom: 4px;
  @media screen and (max-width: 1024px) {
    margin-bottom: 16px;
  }
`
export const RecommendSpan = styled.span`
  color: #707070;
  font-size: 0.875rem;
`
