import {Component} from 'react'
import Popup from 'reactjs-popup'
import './index.css'
import {
  DivContainer,
  ScoreContainer,
  Cards,
  ScoreCard,
  CardName,
  Score,
  ScoreNumber,
} from './styledComponents'

class Game extends Component {
  state = {
    score: 0,
  }

  render() {
    const {score} = this.state

    return (
      <DivContainer>
        <ScoreContainer>
          <Cards>
            <CardName>ROCK</CardName>
            <CardName>PAPER</CardName>
            <CardName>SCISSORS </CardName>
          </Cards>
          <ScoreCard>
            <Score>SCORE</Score>
            <ScoreNumber>{score}</ScoreNumber>
          </ScoreCard>
        </ScoreContainer>
        <Popup
          trigger={<button className="button"> Open Modal </button>}
          modal
          nested
        >
          {close => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
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
