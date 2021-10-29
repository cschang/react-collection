import React from 'react'
import {
  Footer,FooterContainer,FooterIconUl,
  FooterIconLi,FooterIconLink,FooterIcon,
  FooterNav,FooterWordUl,FooterWordLi,FooterWordLink,
  FooterImg,  
  FooterInfoUl,FooterInfoLi,FooterInfoLink,FooterCopyRight,
  FooterCopyRightImg,FooterCopyRightLink,FooterCopyRightP,
  Footerbuttom,
  FooterPolicy,FooterPolicyLi,FooterPolicyLink,
  FooterPolicyUl,
  FooterPolicyLinkRight,
  FooterServiceLi,
  FooterbuttonImg
} from './FooterElements'
const FootComp = () => {
  return (
    <Footer>
      <FooterContainer>
        <FooterNav>
          <FooterWordUl>
            <FooterWordLi><FooterWordLink>首頁</FooterWordLink></FooterWordLi>
            <FooterWordLi><FooterWordLink>系列鏡框</FooterWordLink></FooterWordLi>
            <FooterWordLi><FooterWordLink>門市據點</FooterWordLink></FooterWordLi>
            <FooterWordLi><FooterWordLink>部落格</FooterWordLink></FooterWordLi>
            <FooterWordLi><FooterWordLink>常見問題</FooterWordLink></FooterWordLi>
          </FooterWordUl>
          <FooterIconUl>
            <FooterIconLi>
              <FooterIconLink>
                <FooterIcon src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/icon-fb.svg"/>
              </FooterIconLink>
            </FooterIconLi>
            <FooterIconLi>
              <FooterIconLink>
                <FooterIcon src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/icon-ig.svg"/>
              </FooterIconLink>
            </FooterIconLi>
            <FooterIconLi>
              <FooterIconLink>
                <FooterIcon src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/icon-line.svg"/>
              </FooterIconLink>
            </FooterIconLi>
          </FooterIconUl>
        </FooterNav>
        <FooterInfoUl>
          <FooterInfoLi>
            <FooterInfoLink to={"tel:0800-000-000"}>
              <FooterImg src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/icon-phone.svg"/>
              0800-000-000
            </FooterInfoLink>
          </FooterInfoLi>
          <FooterInfoLi>
            <FooterInfoLink to={"mailto:glasses@business.com"} >
              <FooterImg src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/icon-mail.svg"/>
              glasses@business.com
            </FooterInfoLink>
          </FooterInfoLi>
        </FooterInfoUl>
        <Footerbuttom>
          <FooterCopyRight>
            <FooterCopyRightLink>
              <FooterCopyRightImg src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/logo.png"/>
            </FooterCopyRightLink>
            <FooterCopyRightP>Copyright © 2020 Glasses.All rights reserved.</FooterCopyRightP>
          </FooterCopyRight>
          <FooterPolicy>
            <FooterPolicyUl>
              <FooterPolicyLi>
                <FooterPolicyLink>隱私權政策</FooterPolicyLink>
              </FooterPolicyLi>
              <FooterServiceLi>
                <FooterPolicyLink>服務條款</FooterPolicyLink>
              </FooterServiceLi>
            </FooterPolicyUl>
            <FooterPolicyLinkRight>
              <FooterbuttonImg src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/logo.png"/>
            </FooterPolicyLinkRight>
          </FooterPolicy>
        </Footerbuttom>
      </FooterContainer>
    </Footer>
  )
}

export default FootComp
