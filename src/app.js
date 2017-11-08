import React from "react";
import ReactDOM from "react-dom";

import Box from "./components/Box";
import Grid from "./components/Grid";
import Buttons from "./components/Buttons";
import Info from "./components/Info";

import "./index.css";

class Main extends React.Component {
  constructor() {
    super();
    this.speed = 100;
    this.rows = 40;
    this.cols = 80;
    this.state = {
      generation: 0,
      gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    };
  }

  selectBox = (row, col) => {
    let gridCopy = arrayClone(this.state.gridFull);
    gridCopy[row][col] = !gridCopy[row][col];
    this.setState({
      gridFull: gridCopy
    });
  };

  seed = () => {
    let gridCopy = arrayClone(this.state.gridFull);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (Math.floor(Math.random() * 4) === 1) {
          gridCopy[i][j] = true;
        }
      }
    }
    this.setState({
      gridFull: gridCopy
    });
  };

  playButton = () => {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.play, this.speed);
  };

  pauseButton = () => {
    clearInterval(this.intervalId);
  };

  slow = () => {
    this.speed = 1000;
    this.playButton();
  };

  fast = () => {
    this.speed = 100;
    this.playButton();
  };

  clear = () => {
    const grid = Array(this.rows)
      .fill()
      .map(() => Array(this.cols).fill(false));
    this.setState({
      gridFull: grid,
      generation: 0
    });
  };

  gridSize = size => {
    switch (size) {
      case "1":
        this.cols = 20;
        this.rows = 10;
        break;
      case "2":
        this.cols = 50;
        this.rows = 30;
        break;
      default:
        this.cols = 70;
        this.rows = 50;
    }
    this.clear();
    this.pauseButton();
  };
  play = () => {
    let g = this.state.gridFull;
    let g2 = arrayClone(this.state.gridFull);

    // these are the rules for the game of Life
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let count = 0; // keeps track of neighbors for each cell
        if (i > 0) if (g[i - 1][j]) count++;
        if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
        if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
        if (j < this.cols - 1) if (g[i][j + 1]) count++;
        if (j > 0) if (g[i][j - 1]) count++;
        if (i < this.rows - 1) if (g[i + 1][j]) count++;
        if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
        if (i < this.rows - 1 && this.cols - 1) if (g[i + 1][j + 1]) count++;

        // takes care of killing of letting cell live
        if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
        if (!g[i][j] && count === 3) g2[i][j] = true;
      }
    }
    this.setState({
      gridFull: g2,
      generation: this.state.generation + 1
    });
  };

  componentDidMount() {
    this.seed();
    this.playButton();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.generation < 750) {
      return true;
    }
    this.clear();
    this.pauseButton();
    return false;
  }
  render() {
    return (
      <div className="container">
        <Info />
        <Grid
          gridFull={this.state.gridFull}
          rows={this.rows}
          cols={this.cols}
          selectBox={this.selectBox}
        />
        <div className="row">
          <div className="col-md-6">
            <Buttons
              playButton={this.playButton}
              pauseButton={this.pauseButton}
              slow={this.slow}
              fast={this.fast}
              clear={this.clear}
              seed={this.seed}
              gridSize={this.gridSize}
            />
          </div>
          <div className="col-md-6">
            <h2 className="generation">
              {" "}Generations: {this.state.generation}
            </h2>
          </div>
        </div>
        {/* <Buttons
          playButton={this.playButton}
          pauseButton={this.pauseButton}
          slow={this.slow}
          fast={this.fast}
          clear={this.clear}
          seed={this.seed}
          gridSize={this.gridSize}
        />
        <h2>Generations: {this.state.generation}</h2> */}
      </div>
    );
  }
}

const arrayClone = array => {
  return JSON.parse(JSON.stringify(array));
};

export default Main;
