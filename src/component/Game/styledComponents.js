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

export const CardName = styled.h1`
  font-weight: 500;
  color: #ffffff;
  font-family: 'Bree Serif';
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 24px;
`
export const Score = styled.p`
  color: #223a5f;
  font-size: 20px;
  font-family: 'Bree Serif';
  margin-top: 0px;
  margin-bottom: 0px;
  font-weight: 500;
`
export const ScoreNumber = styled(Score)`
  color: #223a5f;
  font-size: 36px;
  margin-top: 0px;
  font-family: 'Roboto';
`
export const UnorderedList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  position: absolute;
  top: 36%;
`

export const ResultDiv = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 36%;
  width: 90%;
`
export const YourResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const You = styled.p`
  font-size: 20px;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 700;
`
export const ResultImage = styled.img`
  height: 135px;
`
export const PlayAgain = styled.button`
  background: #ffffff;
  position: absolute;
  top: 78%;
  left: 31%;
  height: 40px;
  width: 120px;
  border: 0px;
  border-radius: 6px;
  font-weight: 700;
`
export const Result = styled(You)`
  font-size: 24px;
  position: absolute;
  top: 67%;
  left: 33%;
`
