import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  justify-content: center;
  padding: 64px 0 80px 0;
  background: #FBF2F2;
`
export const Container = styled.div`
  color: #6d0401;
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;
`
export const Containerh2 = styled.h2`
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
export const Containerul = styled.ul`
  list-style: none;
  align-items: baseline;
  box-align: baseline;
  display: flex;
  flex-wrap: nowrap;
  margin-right: -15px;
  margin-left: -15px;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
export const Containerli = styled.li`
  width: 100%;
  display: flex;
  box-orient: vertical;
  box-direction: normal;
  flex-direction: column;
  box-align: center;
  align-items: center;
  max-width: 25%;
  padding-left: 15px;
  padding-right: 15px;
  @media screen and (max-width: 1024px) {
    max-width: 50%;
    padding-left: 60px;
    padding-right: 60px;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`
export const ContainerImg = styled.img`
  margin-bottom: 40px;
  max-width: 100%;
  height: auto;
`
export const ContainerH3 = styled.h3`
  margin-bottom: 4px;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.2;
`
export const ContainerP = styled.p`
  text-align: left;
  color: black;
`
