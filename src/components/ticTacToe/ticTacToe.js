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
    this.preview = this.preview.bind(this);
  }

  preview(event) {
    if (!event.target.textContent) {
      event.target.className += ' hover'
      event.target.textContent = this.state.currentTurn;
    } else if (event.target.className.includes('hover')) {
      event.target.className = 'tile';
      event.target.textContent = '';
    }
  }

  clickHandler(event) {
    this.updateTile(event);
  }

  updateTile(event) {
    const { id, textContent, className } = event.target;
    if (className.includes('hover') && this.state.gameOver === false) {
      event.target.className = 'tile';
      let { boardState, currentTurn } = this.state;
      boardState[id] = currentTurn;
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
    const tieGame = this.state.boardState.filter(item => {
      if (item) {
        return item;
      }
    }).length === 9;
    if (tieGame) return 'tie';
    //keep playing
    return null;
  }

  win() {
    if (this.state.winner) {
      return (
        <div>
          winner: {this.state.winner}
        </div>
      )
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <div>
          current Turn : {this.state.currentTurn}
          {this.win()}
        </div>

        <div id="tTCBoard">
          <div id='ticTacToe' className='ticTacToe'>
            {this.state.boardState.map((value, index) => {
              return (
                <div
                  className='tile'
                  id={index}
                  key={index}
                  onMouseEnter={this.preview}
                  onMouseLeave={this.preview}
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