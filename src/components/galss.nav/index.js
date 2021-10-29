import React,{useState,useEffect} from 'react'
import { IconContext} from 'react-icons/lib'

import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavLinks,
  Img,
  ImgLink,
} from './NavbarElements'

const Navbar = ({toggle}) => {
  const [scrollNav,setScrollNav  ] = useState(false);
  const changeNav = ()=>{
    setScrollNav(window.scrollY >= 80 ? true: false)
  }

  useEffect( ()=>{
    window.addEventListener('scroll',changeNav);
  },[])

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <ImgLink to="/">
              <Img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/logo.png" />
            </ImgLink>
            <NavMenu>
              <NavItem>
                <NavLinks to="/classic">系列鏡框</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/location">門市據點</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/blog">部落格</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/question">常見問題</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar
