import React from 'react'
import {
  ContactCheckbox,
  ContactForm,
  ContactH2,
  ContactInput,
  ContactLabel,
  ContactSection,
  ContactSubmit,
  Contactp,
  ContactContainer,
  ContactTextarea,
  ContactCheckboxLable
} from './ContactElements'
const ContactComp = () => {
  return (
    <ContactSection>
      <ContactContainer>
        <ContactH2>聯絡我們</ContactH2>
        <Contactp>我們相當重視您的意見，若您有任何疑問，可先參考「常見問題」，若仍有任何問題，請填妥以下資料，我們會在近期與您聯繫。</Contactp>
        <ContactForm>
          <ContactLabel>姓名</ContactLabel>
          <ContactInput type="type" placeholder="john" />
          <ContactLabel>聯絡電話</ContactLabel>
          <ContactInput type="type" placeholder="0987654321" />
          <ContactLabel>電子郵件</ContactLabel>
          <ContactInput type="type" placeholder="abc@gmail.com" />
          <ContactLabel>意見反應</ContactLabel>
          <ContactTextarea 
            cols="30"
            rows="10"
            type="type" placeholder="請輸入您的意見" />
          <div>
            <ContactCheckbox type="checkbox"/>
            <ContactCheckboxLable>
              我同意隱私權政策，並同意依隱私權政策中所述的方式處理自己的資料
            </ContactCheckboxLable>
          </div>
        </ContactForm>
        <ContactSubmit type="button" value="確認送出"/>
      </ContactContainer>
      
    </ContactSection>
  )
}

export default ContactComp
