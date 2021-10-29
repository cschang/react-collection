import styled from "styled-components";
import { Link  } from "react-router-dom";


export const Nav = styled.nav`
  background: gray;
  position: fixed;
  left: 10px;
  top: 50px;
  border-radius: 17px;
  font-size: 2rem;
  color: white;
  .links{
    display: flex;
    flex-direction: column;
  }
  .more {
    margin: 10px 10px;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 2rem;
  color: white;
  text-decoration: none;
  margin: 1rem;
  :hover {
    background: white;
    color: black;
  }
`;

