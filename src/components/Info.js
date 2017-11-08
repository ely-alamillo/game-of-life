import React from "react";
import { Jumbotron } from "react-bootstrap";

const Info = () => {
  return (
    <Jumbotron>
      <h1 className="main-heading">The Game of Life</h1>
      <p>
        A simple visualization of Conway's Game of Life.<br /> <br />
        The game is set to reset after 750 generations. While the game is paused
        you can click on the grid to initialize your own cells. You can also use
        the seed button to randomly fill the grid with cells, after that you can
        press the play button to see the game come to life!
      </p>
    </Jumbotron>
  );
};

export default Info;
