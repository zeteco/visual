import React, {Component} from 'react';
require('./App.scss');
import CellAutomata from '../CellAutomata/CellAutomata';
import Textlayer from '../Textlayer/Textlayer';
import Text from '../Text/Text';
import Space from '../Space/Space';
import AutomataLib from '../../helper/CellAutomata';

class App extends Component {

  constructor() {
    super();
    this.automata = new AutomataLib();

    var body = document.getElementsByTagName('body')[0];
    // window.innerWidth;
    var remSize = parseFloat(
      window.getComputedStyle(body, null)
      .getPropertyValue('font-size')
    );
    console.log('remSize', remSize);

    this.state = {
      ruleA: 110,
      ruleB: 3,
      seedA: 51,
      seedB: 52,
      columns: 45,
      rows: 25,
      fill: '/',
      empty: '​‌\\',
    };
  }

  range8Bit(value) {
    let newVal = parseInt(value, 10) || 0;
    newVal = Math.max(0, newVal);
    newVal = Math.min(255, newVal);
    return newVal;
  }

  changeRule = (event) => {
    this.setState({
      ruleA: this.range8Bit(event.target.value),
    });
  }
  changeSeed = (event) => {
    this.setState({
      seedA: event.target.value,
    });
  }
  changeFill = (event) => {
    this.setState({
      fill: event.target.value || '',
    });
  }
  changeEmpty = (event) => {
    this.setState({
      empty: event.target.value || '',
    });
  }


  changeColumns = (event) => {
    this.setState({
      columns: parseInt(event.target.value,10)
    });
  }

  changeRows = (event) => {
    this.setState({
      rows: parseInt(event.target.value,10)
    });
  }

  rndSeed = () => {
      this.setState({
        seedA: Math.random().toString(36).substr(2, 6),
        seedB: Math.random().toString(36).substr(2, 6),
      });
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  rndRule = () => {
      this.setState({
        ruleA: this.getRandomInt(0, 255),
        ruleB: this.getRandomInt(0, 255),
      });
  }

  render() {

    var data = this.automata.generate({
      columns: this.state.columns,
      rows: this.state.rows,
      rule: this.state.ruleA,
      seed: this.state.seedA,
    });

    return (
      <div className="App">
        <div className="visual">
          <Textlayer data={data}>
            <Space/>
            <Text text="ZE" />
            <Space/>
            <Space/>
            <Space/>
            <Space/>
            <Space/>
            <Space/>
            <Space/>
            <Space/>
            <Space/>
            <Text text="TE" />
            <Space/>
            <Space/>
            <Space/>
            <Space/>
            <Space/>
            <Space/>
            <Space/>
            <Space/>
            <Space/>
            <Space/>
            <Space/>
            <Space/>
            <Space/>
            <Text text="CO" />
          </Textlayer>
          <CellAutomata
            data={data}
            fill={this.state.fill}
            empty={this.state.empty}
          />
        </div>
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
              value={this.state.columns}
              onChange={this.changeColumns}
            />
          </div>
          <div className="value">
            <div className="value--caption">Rows <span className="value--valuerange">0–~</span> </div>
            <input
              className="value--input"
              type="text"
              value={this.state.rows}
              onChange={this.changeRows}
            />
          </div>

          <div className="value">
            <div className="value--caption">Rule <span className="value--valuerange">0–255</span> </div>
            <input
              className="value--input"
              type="text"
              value={this.state.ruleA}
              onChange={this.changeRule}
            />
          </div>

          <div className="value">
            <div className="value--caption">Seed <span className="value--valuerange">any</span> </div>
            <input
              className="value--input"
              type="text"
              value={this.state.seedA}
              onChange={this.changeSeed}
            />
          </div>

          <div className="value">
            <div className="value--caption">Fill <span className="value--valuerange">one char</span> </div>
            <input
              className="value--input"
              type="text"
              value={this.state.fill}
              onChange={this.changeFill}
            />
          </div>
          <div className="value">
            <div className="value--caption">Empty <span className="value--valuerange">one char</span> </div>
            <input
              className="value--input"
              type="text"
              value={this.state.empty}
              onChange={this.changeEmpty}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
