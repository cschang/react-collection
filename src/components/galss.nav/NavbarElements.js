import styled from 'styled-components'
import {Link } from 'react-router-dom'

export const Nav = styled.nav`
  background: #AA0601;
  padding: 30px 88px;
  @media screen and (max-width: 1024px) {
      padding: 30px 39px;
  }
  @media screen and (max-width: 768px) {
    padding: 10px 0 0 0;
  }
` 

export const NavbarContainer = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    width:100%;
    flex-direction:column;
  }
`
export const Img = styled.img`
  display: block;
  max-width: 100%;
  line-height: 9px;
  height: auto;
  @media screen and (max-width: 768px) {
    width:100%;
    margin-bottom: 10px;
    line-height: 17px;
  }
`

export const ImgLink = styled(Link)`
  text-decoration: none;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  font-size: 1.25rem;
  flex-wrap: nowrap;
  @media screen and (max-width: 768px) {
    width:100%;
    margin-right: 0px;
    flex-wrap: wrap;
  }
`
export const NavItem = styled.li`
  @media screen and (max-width: 768px) {
    border:1px solid white;
    width:49%;
  }
`
export const NavLinks = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    padding: 25px 0px;
    display: block;
  }
`;




