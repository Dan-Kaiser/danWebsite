import React from 'react';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  clickHandler(event) {
    const { id, textContent } = event.target;
    this.updateTile(textContent, id);
  }

  updateTile(val, index) {
    console.log(val, index);
    if (!val) {
      let { boardState, currentTurn } = this.state;
      boardState[index] = currentTurn;
      this.setState({ boardState });
      this.changeTurn();
    }
  }

  changeTurn() {
    if (this.state.currentTurn === 'X') {
      this.setState({ currentTurn: 'O' })
    } else {
      this.setState({ currentTurn: 'X' })
    }
  }

  render() {
    return (
      <div>
        <div>
          currentTurn : {this.state.currentTurn}
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
            {/* <div className='tile'>0</div>
          <div className='tile'>0</div>
          <div className='tile'>0</div>
          <div className='tile'>0</div>
          <div className='tile'>0</div>
          <div className='tile'>0</div>
          <div className='tile'>0</div>
          <div className='tile'>0</div>
          <div className='tile'>0</div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default TicTacToe;