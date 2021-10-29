import React from 'react'
import {
  Section,
  Container,
  Containerh2,
  Containerul,
  Containerli,
  ContainerImg,
  ContainerH3,
  ContainerP
} from './SectionElements';
const SectionPart = () => {
  return (
    
    <Section>
      <Container>
        <Containerh2>用專業的心，做專業的事</Containerh2>
        <Containerul>
          <Containerli>
            <ContainerImg src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/icon-dollar.svg"/>
            <ContainerH3>單一價格</ContainerH3>
            <ContainerP>無論任何度數皆不需追加費用 即可擁有適合自己的薄型球面 鏡片。</ContainerP>
          </Containerli>
          <Containerli>
            <ContainerImg src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/icon-clock.svg"/>
            <ContainerH3>20 分鐘即可取件</ContainerH3>
            <ContainerP>為了您的寶貴時間著想，以豐 富專業知識與技術將結帳到交 件的時間縮減至最快 20 分鐘 即可完成。</ContainerP>
          </Containerli>
          <Containerli>
            <ContainerImg src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/icon-heart.svg"/>
            <ContainerH3>安心售後服務</ContainerH3>
            <ContainerP>我們提供長達 120 天的保固售後服務，不限會員資格皆享有免費深層保養及專業維修服務。</ContainerP>
          </Containerli>
          <Containerli>
            <ContainerImg src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/week3/icon-glasses.svg"/>
            <ContainerH3>關於鏡片</ContainerH3>
            <ContainerP>使用世界知名頂級品牌，抗 UV、防汙鍍膜薄型非球面鏡片。</ContainerP>
          </Containerli>
        </Containerul>
      </Container>
    </Section>
    
  )
}
export default SectionPart;
