import React from 'react';
import Header from './header';
import TicTacToe from './ticTacToe/ticTacToe';

const App = (props) => (
  <div className='container'>
    <Header />
    {/* <TicTacToe /> */}
    <div id='Main' />
  </div>
)

export default App;
