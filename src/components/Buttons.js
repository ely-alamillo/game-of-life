import React from "react";
import ReactDOM from "react-dom";

import { ButtonToolbar, MenuItem, DropdownButton } from "react-bootstrap";

class Buttons extends React.Component {
  handleSelect = event => {
    this.props.gridSize(event);
  };
  render() {
    return (
      <div className="center">
        <ButtonToolbar>
          <button
            className="btn btn-primary btn-lg"
            onClick={this.props.playButton}
          >
            Play
          </button>
          <button
            className="btn btn-primary btn-lg"
            onClick={this.props.pauseButton}
          >
            Pause
          </button>
          <button className="btn btn-primary btn-lg" onClick={this.props.seed}>
            Seed
          </button>
          <button className="btn btn-primary btn-lg" onClick={this.props.clear}>
            Clear
          </button>
          <button className="btn btn-primary btn-lg" onClick={this.props.slow}>
            Slow
          </button>
          <button className="btn btn-primary btn-lg" onClick={this.props.fast}>
            Fast
          </button>
          {/* <DropdownButton title='Grid Size' id='size-menu' onSelect={this.handleSelect}>
            <MenuItem eventKey='1'>20X10</MenuItem>
            <MenuItem eventKey='2'>50X30</MenuItem>
            <MenuItem eventKey='3'>70X50</MenuItem>
          </DropdownButton> */}
        </ButtonToolbar>
      </div>
    );
  }
}

export default Buttons;
