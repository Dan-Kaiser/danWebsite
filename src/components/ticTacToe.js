import React from 'react';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameOver: false,
      winner: null,
      currentTurn: 'X',
      boardState: [
        '', '', '',
        '', '', '',
        '', '', ''
      ]
    };
    this.setState = this.setState.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.changeTurn = this.changeTurn.bind(this);
    this.winCheck = this.winCheck.bind(this);
  }

  clickHandler(event) {
    const { id, textContent } = event.target;
    this.updateTile(textContent, id);
  }

  updateTile(val, index) {
    // console.log(val, index);
    if (!val && this.state.gameOver === false) {
      let { boardState, currentTurn } = this.state;
      boardState[index] = currentTurn;
      this.setState({ boardState });
      this.changeTurn();
      if (this.winCheck()) {
        this.setState({
          winner: this.winCheck(),
          gameOver: true
        });
      }
    }
  }

  changeTurn() {
    if (this.state.currentTurn === 'X') {
      this.setState({ currentTurn: 'O' })
    } else {
      this.setState({ currentTurn: 'X' })
    }
  }

  winCheck() {

    const { boardState } = this.state;
    for (let i = 0; i < 3; i++) {
      //check horizontal win
      let index = i * 3;
      if (boardState[index] + boardState[index + 1] + boardState[index + 2] === "XXX") {
        return 'X';
      }
      if (boardState[index] + boardState[index + 1] + boardState[index + 2] === "OOO") {
        return 'O';
      }
      //check vertical win
      if (boardState[i] + boardState[i + 3] + boardState[i + 6] === "XXX") {
        return 'X';
      }
      if (boardState[i] + boardState[i + 3] + boardState[i + 6] === "OOO") {
        return 'O';
      }
    }

    //check diagonal win
    if (boardState[0] + boardState[4] + boardState[8] === "XXX"
      || boardState[2] + boardState[4] + boardState[6] === "XXX") {
      return 'X';
    }
    if (boardState[0] + boardState[4] + boardState[8] === "OOO"
      || boardState[2] + boardState[4] + boardState[6] === "OOO") {
      return 'O';
    }
    //check for tie game
    return null;
  }

  render() {
    return (
      <div>
        <div>
          current Turn : {this.state.currentTurn}
          <div>
            winner: {this.state.winner}
          </div>
        </div>

        <div id="tTCBoard">
          <div id='ticTacToe' className='ticTacToe'>
            {this.state.boardState.map((value, index) => {
              return (
                <div
                  className='tile'
                  id={index}
                  key={index}
                  onClick={this.clickHandler}>
                  {value}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default TicTacToe;