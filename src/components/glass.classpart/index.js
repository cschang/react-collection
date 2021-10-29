import React from 'react'
import {
  ClassSection,
  ClassContainer,
  ClassH2,
  ClassH3,
  ClassImg,
  ClassUl,
  ClassLi,
  ClassIcon
} from './ClassElements.js'
const ClassPart = () => {
  return (
    <ClassSection>
      <ClassContainer>
        <ClassH2>經典系列鏡框</ClassH2>
        <ClassUl>
          <ClassLi>
            <ClassImg src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/product-1.png"/>
            <ClassH3>
              <ClassIcon src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/icon-diamond.svg"/>optical
            </ClassH3>
          </ClassLi>
          <ClassLi>
            <ClassH3>
              <ClassIcon src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/icon-sun.svg"/>
              sunglass
            </ClassH3>
            <ClassImg src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/product-2.png"/>
          </ClassLi>
          <ClassLi>
            <ClassImg src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/product-3.png"/>
            <ClassH3>              
              <ClassIcon src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/icon-diamond.svg"/>
              function
            </ClassH3>
          </ClassLi>
        </ClassUl>
      </ClassContainer>
    </ClassSection>
  )
}

export default ClassPart
