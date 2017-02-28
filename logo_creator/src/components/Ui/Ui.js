import React, { Component } from 'react';
import styles from './Ui.scss';

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
  changeWords = (event) => {
    this.props.changeWords(
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
  changeAutosize = (event) => {
    this.props.changeAutosize(
      event.target.checked
    );
  }
  changeAutorule = (event) => {
    this.props.changeAutorule(
      event.target.checked
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
    let isVisible = '';
    if(!this.props.visible) isVisible = styles.hidden;

    return (
      <div className={`${styles.ui} ${isVisible}`}>
        <div className={styles.inner}>
          <div className={styles.value}>
            <div className={styles.value__caption}>Random Seeds </div>
            <span className={styles.value__button} onClick={this.rndSeed}>generate</span>
          </div>
          <div className={styles.value}>
            <div className={styles.value__caption}>Random Rules </div>
            <span className={styles.value__button} onClick={this.rndRule}>generate</span>
          </div>
          <br/>
          <div className={styles.value}>
            <div className={styles.value__caption}>Words <span className={styles.value__valuerange}>separated by ","</span> </div>
            <input
              className={styles.value__input}
              type="text"
              value={this.props.words}
              onChange={this.changeWords}
            />
          </div>
          <div className={styles.value}>
            <div className={styles.value__caption}>Update Rules all 2 sec. <span className={styles.value__valuerange}>true/false</span> </div>
            <input
              className={styles.value__input}
              type="checkbox"
              defaultChecked={this.props.autorule}
              onChange={this.changeAutorule}
            />
          </div>
          <div className={styles.value}>
            <div className={styles.value__caption}>Autosize <span className={styles.value__valuerange}>true/false</span> </div>
            <input
              className={styles.value__input}
              type="checkbox"
              defaultChecked={this.props.autosize}
              onChange={this.changeAutosize}
            />
          </div>
          <div className={styles.value}>
            <div className={styles.value__caption}>Columns <span className={styles.value__valuerange}>0–~</span> </div>
            <input
              className={styles.value__input}
              type="text"
              value={this.props.columns}
              onChange={this.changeColumns}
            />
          </div>
          <div className={styles.value}>
            <div className={styles.value__caption}>Rows <span className={styles.value__valuerange}>0–~</span> </div>
            <input
              className={styles.value__input}
              type="text"
              value={this.props.rows}
              onChange={this.changeRows}
            />
          </div>

          <div className={styles.value}>
            <div className={styles.value__caption}>Rule <span className={styles.value__valuerange}>0–255</span> </div>
            <input
              className={styles.value__input}
              type="text"
              value={this.props.rule}
              onChange={this.changeRule}
            />
          </div>

          <div className={styles.value}>
            <div className={styles.value__caption}>Seed <span className={styles.value__valuerange}>any</span> </div>
            <input
              className={styles.value__input}
              type="text"
              value={this.props.seed}
              onChange={this.changeSeed}
            />
          </div>

          <div className={styles.value}>
            <div className={styles.value__caption}>Fill <span className={styles.value__valuerange}>one char</span> </div>
            <input
              className={styles.value__input}
              type="text"
              value={this.props.fill}
              onChange={this.changeFill}
            />
          </div>
          <div className={styles.value}>
            <div className={styles.value__caption}>Empty <span className={styles.value__valuerange}>one char</span> </div>
            <input
              className={styles.value__input}
              type="text"
              value={this.props.empty}
              onChange={this.changeEmpty}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Ui;
