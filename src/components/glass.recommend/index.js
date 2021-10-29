import React from 'react'
import {
  RecommendSection,
  RecommendA,
  RecommendCard,
  RecommendContainer,
  RecommendH2,
  RecommendH3,
  RecommendImg,
  RecommendLi,
  RecommendP,
  RecommendSpan,
  RecommendUl,
} from './RecommendElements'
const RecommendPart = () => {
  return (
    <RecommendSection>
      <RecommendContainer>
        <RecommendH2>顧客推薦</RecommendH2>
        <RecommendUl>
          <RecommendLi>
            <RecommendA>
              <RecommendImg src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/rec-1.png"/>
              <RecommendCard>
                <RecommendH3>Jessy</RecommendH3>
                <RecommendP>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</RecommendP>
                <RecommendSpan>Last uspandated 3 mins ago</RecommendSpan>
              </RecommendCard>
            </RecommendA>
          </RecommendLi>
          <RecommendLi>
            <RecommendA>
              <RecommendImg src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/rec-2.png"/>
              <RecommendCard>
                <RecommendH3>Carl</RecommendH3>
                <RecommendP>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</RecommendP>
                <RecommendSpan>Last uspandated 3 mins ago</RecommendSpan>
              </RecommendCard>
            </RecommendA>
          </RecommendLi>
          <RecommendLi>
            <RecommendA>
              <RecommendImg src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/rec-3.png"/>
              <RecommendCard>
                <RecommendH3>Kitty</RecommendH3>
                <RecommendP>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</RecommendP>
                <RecommendSpan>Last uspandated 3 mins ago</RecommendSpan>
              </RecommendCard>
            </RecommendA>
          </RecommendLi>
          <RecommendLi>
            <RecommendA>
              <RecommendImg src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/rec-4.png"/>
              <RecommendCard>
                <RecommendH3>Jane</RecommendH3>
                <RecommendP>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</RecommendP>
                <RecommendSpan>Last uspandated 3 mins ago</RecommendSpan>
              </RecommendCard>
            </RecommendA>
          </RecommendLi>
        </RecommendUl>
      </RecommendContainer>
    </RecommendSection>
  )
}

export default RecommendPart
