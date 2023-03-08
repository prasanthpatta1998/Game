import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import GameItem from '../GameItem'
import './index.css'
import {
  DivContainer,
  ScoreContainer,
  Cards,
  ScoreCard,
  CardName,
  Score,
  ScoreNumber,
  UnorderedList,
  ResultDiv,
  YourResult,
  You,
  ResultImage,
  PlayAgain,
  Result,
} from './styledComponents'

class Game extends Component {
  state = {
    score: 0,
    resultPage: true,
    gameResult: '',
    yourResult: '',
    oppositeResult: '',
  }

  shuffleCards = () => {
    const {choicesList} = this.props
    const newList = [...choicesList]
    return newList.sort(() => Math.random() - 0.7)
  }

  onChangeTheValues = id => {
    const {choicesList} = this.props
    const oppositeCard = this.shuffleCards()
    const oppositeId = oppositeCard[0].id
    const CardItem = choicesList.find(each => each.id === id)
    console.log(CardItem)
    if (oppositeId === id) {
      this.setState(prevState => ({
        score: prevState.score,
        resultPage: false,
        gameResult: 'IT IS DRAW',
        yourResult: CardItem.imageUrl,
        oppositeResult: oppositeCard[0].imageUrl,
      }))
    } else if (
      (id === 'ROCK' && oppositeId === 'SCISSORS') ||
      (id === 'SCISSORS' && oppositeId === 'PAPER') ||
      (id === 'PAPER' && oppositeId === 'ROCK')
    ) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        resultPage: false,
        gameResult: 'YOU WON',
        yourResult: CardItem.imageUrl,
        oppositeResult: oppositeCard[0].imageUrl,
      }))
    } else {
      this.setState(prevState => ({
        score: prevState.score - 1,
        resultPage: false,
        gameResult: 'YOU LOSE',
        yourResult: CardItem.imageUrl,
        oppositeResult: oppositeCard[0].imageUrl,
      }))
    }
  }

  playGameAgain = () => {
    this.setState({
      resultPage: true,
      gameResult: '',
      yourResult: '',
      oppositeResult: '',
    })
  }

  render() {
    const {
      score,
      resultPage,
      gameResult,
      yourResult,
      oppositeResult,
    } = this.state
    const {choicesList} = this.props

    return (
      <DivContainer>
        <ScoreContainer>
          <Cards>
            <CardName>
              Rock <br />
              Paper <br />
              Scissors
            </CardName>
          </Cards>
          <ScoreCard>
            <Score>SCORE</Score>
            <ScoreNumber>{score}</ScoreNumber>
          </ScoreCard>
        </ScoreContainer>
        {resultPage ? (
          <UnorderedList>
            {choicesList.map(each => (
              <GameItem
                key={each.id}
                CardDetails={each}
                onChangeTheValues={this.onChangeTheValues}
              />
            ))}
          </UnorderedList>
        ) : (
          <>
            <ResultDiv>
              <YourResult>
                <You>YOU</You>
                <ResultImage src={yourResult} alt="your choice" />
              </YourResult>
              <YourResult>
                <You>OPPOSITE</You>
                <ResultImage src={oppositeResult} alt="opponent choice" />
              </YourResult>
            </ResultDiv>
            <Result>{gameResult}</Result>
            <PlayAgain type="button" onClick={this.playGameAgain}>
              PlAY AGAIN
            </PlayAgain>
          </>
        )}
        <Popup
          trigger={
            <button type="button" className="button">
              {' '}
              Rules{' '}
            </button>
          }
          modal
          nested
        >
          {close => (
            <div className="modal">
              <button type="button" className="close" onClick={close}>
                <RiCloseLine className="cross-mark" />
              </button>
              <img
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
                className="rules-image"
              />
            </div>
          )}
        </Popup>
      </DivContainer>
    )
  }
}

export default Game
