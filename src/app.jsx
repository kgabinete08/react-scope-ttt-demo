import React, { Component } from 'react';
import { render } from 'react-dom';
import Board from './board.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [[null, null, null],
             [null, null, null],
             [null, null, null]],
      winner: '',
      turn: true,
    };

    this.updateBox = this.updateBox.bind(this);
  }

  componentDidUpdate() {
    const data = this.state.rows;
    if (data[0][0] !== null && data[0][0] === data[1][0] && data[1][0] === data[2][0]) this.showWinner(data[0][0]);
    if (data[0][1] !== null && data[0][1] === data[1][1] && data[1][1] === data[2][1]) this.showWinner(data[0][1]);
    if (data[0][2] !== null && data[0][2] === data[1][2] && data[1][2] === data[2][2]) this.showWinner(data[0][2]);

    if (data[0][0] !== null && data[0][0] === data[0][1] && data[0][1] === data[0][2]) this.showWinner(data[0][0]);
    if (data[1][0] !== null && data[1][0] === data[1][1] && data[1][1] === data[1][2]) this.showWinner(data[1][0]);
    if (data[2][0] !== null && data[2][0] === data[2][1] && data[2][1] === data[2][2]) this.showWinner(data[2][0]);
      

    if (data[0][0] !== null && data[0][0] === data[1][1] && data[1][1] === data[2][2]) this.showWinner(data[0][0]);
    if (data[0][1] !== null && data[0][1] === data[1][1] && data[1][1] === data[2][1]) this.showWinner(data[0][1]);
    if (data[0][2] !== null && data[0][2] === data[1][1] && data[1][1] === data[2][0]) this.showWinner(data[0][2]);
  }

  updateBox(row, i) {
    if (this.state.rows[row][i] !== null) return;

    this.setState((prevState) => {
      const newRows = [...prevState.rows];
      newRows[row][i] = this.state.turn;
      return { rows: newRows, turn: !prevState.turn };
    });
  }

  showWinner(winner) {
    const winnerName = winner ? 'X' : 'O';
    const winnerText = `The winner is ${winnerName}!`;
    const resetRows =  [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    // requestAnimationFrame(() => setTimeout(() => alert('winner'), 50));
    this.setState({ winner: winnerText, rows: resetRows, turn: true });
  }

  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <Board data={this.state.rows} onClick={this.updateBox} />
        <div id="result">{ this.state.winner }</div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
