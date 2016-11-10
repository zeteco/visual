import React, { Component } from 'react';
require('./Ui.scss');

class Ui extends Component {

  range8Bit(value) {
    let newVal = parseInt(value, 10) || 0;
    newVal = Math.max(0, newVal);
    newVal = Math.min(255, newVal);
    return newVal;
  }
  changeRule = (event) => {
    this.props.changeRule(
      this.range8Bit(event.target.value)
    );
  }
  changeSeed = (event) => {
    this.props.changeSeed(
      event.target.value,
    );
  }
  changeFill = (event) => {
    this.props.changeFill(
      event.target.value || '',
    );
  }
  changeEmpty = (event) => {
    this.props.changeEmpty(
      event.target.value || '',
    );
  }
  changeColumns = (event) => {
    this.props.changeColumns(
      parseInt(event.target.value,10)
    );
  }
  changeRows = (event) => {
    this.props.changeRows(
      parseInt(event.target.value,10)
    );
  }

  rndSeed = () => {
    this.props.changeSeed(
      Math.random().toString(36).substr(2, 6)
    );
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  rndRule = () => {
    this.props.changeRule(
      this.getRandomInt(0, 255),
    );
  }

  render() {

    return (
      <div className="ui">
        <div className="value">
          <div className="value--caption">Random Seeds </div>
          <span className="value--button" onClick={this.rndSeed}>generate</span>
        </div>
        <div className="value">
          <div className="value--caption">Random Rules </div>
          <span className="value--button" onClick={this.rndRule}>generate</span>
        </div>
        <br/>
        <div className="value">
          <div className="value--caption">Columns <span className="value--valuerange">0–~</span> </div>
          <input
            className="value--input"
            type="text"
            value={this.props.columns}
            onChange={this.changeColumns}
          />
        </div>
        <div className="value">
          <div className="value--caption">Rows <span className="value--valuerange">0–~</span> </div>
          <input
            className="value--input"
            type="text"
            value={this.props.rows}
            onChange={this.changeRows}
          />
        </div>

        <div className="value">
          <div className="value--caption">Rule <span className="value--valuerange">0–255</span> </div>
          <input
            className="value--input"
            type="text"
            value={this.props.rule}
            onChange={this.changeRule}
          />
        </div>

        <div className="value">
          <div className="value--caption">Seed <span className="value--valuerange">any</span> </div>
          <input
            className="value--input"
            type="text"
            value={this.props.seed}
            onChange={this.changeSeed}
          />
        </div>

        <div className="value">
          <div className="value--caption">Fill <span className="value--valuerange">one char</span> </div>
          <input
            className="value--input"
            type="text"
            value={this.props.fill}
            onChange={this.changeFill}
          />
        </div>
        <div className="value">
          <div className="value--caption">Empty <span className="value--valuerange">one char</span> </div>
          <input
            className="value--input"
            type="text"
            value={this.props.empty}
            onChange={this.changeEmpty}
          />
        </div>
      </div>
    );
  }
}

export default Ui;
