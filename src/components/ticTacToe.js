import React from 'react';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardState: [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
      ]
    };
  }

  render() {
    return (
      <div id="tTCBoard">
        <div id='ticTacToe' className='ticTacToe'>
          <div className='tile'>0</div>
          <div className='tile'>0</div>
          <div className='tile'>0</div>
          <div className='tile'>0</div>
          <div className='tile'>0</div>
          <div className='tile'>0</div>
          <div className='tile'>0</div>
          <div className='tile'>0</div>
          <div className='tile'>0</div>
        </div>
      </div>
    )
  }
}

export default TicTacToe;