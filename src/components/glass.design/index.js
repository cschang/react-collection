import React from 'react'
import { 
  DesignSection,
  DesignContainer,
  DesignH2,
  DesignUl,
  DesignLi,
  DesignA,
  DesignImg,
  DesignH3
 } from './DesignElements'
const DesignPart = () => {
  return (
    <DesignSection>
      <DesignContainer>
        <DesignH2>聯名設計鏡框</DesignH2>
        <DesignUl>
          <DesignLi>
            <DesignA>
              <DesignImg src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/product-8.png"/>
              <DesignH3>Double A+</DesignH3>
            </DesignA>
          </DesignLi>
          <DesignLi>
            <DesignA>
              <DesignImg src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/product-9.png"/>
              <DesignH3>Double A+</DesignH3>
            </DesignA>
          </DesignLi>
        </DesignUl>
      </DesignContainer>
    </DesignSection>
  )
}

export default DesignPart
