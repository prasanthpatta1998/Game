import styled from 'styled-components'

export const DivContainer = styled.div`
  background: #223a5f;
  height: 100vh;
  background-size: cover;
  padding: 10px;
`
export const ScoreContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border: 2px solid #ffffff;
  border-radius: 6px;
  padding: 4% 10%;
`
export const Cards = styled.div``

export const ScoreCard = styled.div`
  background: #ffffff;
  width: 40%;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CardName = styled.p`
  font-weight: 500;
  color: #ffffff;
  font-family: 'Bree Serif';
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 24px;
`
export const Score = styled(CardName)`
  color: #223a5f;
  font-size: 20px;
`
export const ScoreNumber = styled(CardName)`
  color: #223a5f;
  font-size: 36px;
  margin-top: 0px;
`
