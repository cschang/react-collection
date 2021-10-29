import React,{useState} from 'react'


import { Nav, StyledLink } from './nav.styled'
//滑進顯示all，預設是hw1，點擊是XX
//延伸的動畫要做
const HeaderComp = () => {
  const [show,setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };

  return (
    <Nav onMouseEnter={toggle} onMouseLeave={toggle}>
      {show ? (
        <ul className="links">
          <StyledLink to="/hw1">Project1</StyledLink>
          <StyledLink to="/hw2">Project2</StyledLink>
          <StyledLink to="/">Project3</StyledLink>
        </ul>
      ) : (
        <div className="more">
          更<br />多
        </div>
      )}
    </Nav>
  );
}

export default HeaderComp;
