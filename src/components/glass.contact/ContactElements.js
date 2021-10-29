import styled from 'styled-components';


export const ContactSection = styled.section`
  padding: 64px 0 80px 0;
  background: #FBF2F2;
  display: block;
  @media screen and (max-width: 1024px) {
    padding: 40px 0 40px 0;
  }
  @media screen and (max-width: 768px) {
    padding: 32px 0 32px 0;
  }
`
export const ContactContainer = styled.div`
  width: 100%;
    margin: 0 auto;
    max-width: 730px;
  @media screen and (max-width: 1024px) {
    max-width: 450px;
  }
  @media screen and (max-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`

export const ContactH2 = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 60px;
    text-align: center;
    line-height: 1.2;
  @media screen and (max-width: 1024px) {
    font-size: 2rem;
    margin-bottom: 32px;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`
export const Contactp = styled.p`
  margin-bottom: 20px;
  font-size: 1.25rem;
  @media screen and (max-width: 1024px) {
    margin-bottom: 12px;
    font-size: 1rem;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 8px;
  }
`

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  box-orient: vertical;
  box-direction: normal;
  @media screen and (max-width: 1024px) {
    font-size: 0.875rem;
  }
`

export const ContactLabel = styled.label`
  margin-bottom: 4px;
  @media screen and (max-width: 1024px) {
    margin-bottom: 0;
  }
`

export const ContactInput = styled.input`
  border: 1px solid black;
  padding: 14px 16px;
  background-color: transparent;
  margin-bottom: 16px;
  box-sizing: border-box;
  @media screen and (max-width: 1024px) {
    padding: 8px 12px;
    margin-bottom: 8px;
  }
  @media screen and (max-width: 768px) {

  }
`

export const ContactCheckbox = styled.input`
  position: relative;
  cursor: pointer;
  border: 1px solid black;
  padding: 14px 16px;
  background-color: transparent;
  margin-right: 4px;
  display:inline-block;
  @media screen and (max-width: 1024px) {
        padding: 8px 12px;
  }
  @media screen and (max-width: 768px) {

  }
`
export const ContactCheckboxLable = styled.label`
  height: 14px;
  @media screen and (max-width: 1024px) {
    font-size: 0.875rem;
  }
  @media screen and (max-width: 768px) {

  }  
`
export const ContactSubmit = styled.input`
  background: #AA0601;
  border: 0;
  padding: 14px 16px;
  cursor: pointer;
  transition: all ease 300ms;
  font-size: 1rem;
  width: 50%;
  margin-left: 25%;
  margin-top: 40px;
  color: white;
  @media screen and (max-width: 1024px) {
    padding: 8px 12px;
    margin-top: 35px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 40px;
  }
`

export const ContactTextarea = styled.textarea`
  border: 1px solid black;
  padding: 14px 16px;
  background-color: transparent;
  margin-bottom: 16px;
  box-sizing: border-box;
  box-direction: normal;
  @media screen and (max-width: 1024px) {
    padding: 8px 12px;
    margin-bottom: 8px;
  }
  @media screen and (max-width: 768px) {

  }
`


