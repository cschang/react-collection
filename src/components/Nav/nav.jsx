import React,{useState,useEffect} from 'react'
import './nav.scss'
import { Link } from "react-router-dom";
//滑進顯示all，預設是hw1，點擊是XX
//延伸的動畫要做
const HeaderComp = () => {
  const [show,setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };
  useEffect(()=>{
    console.log("show: ", show);
  },[show]);

  return (
    <nav onMouseEnter={toggle} onMouseLeave={toggle}>
      <ul>
        <li>
          <Link to="/hw1">hw1</Link>
        </li>
        <li>
          <Link to="/">hw2</Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderComp;
