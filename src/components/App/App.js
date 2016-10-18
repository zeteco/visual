import React, {Component} from 'react';
require('./App.scss');
import CellAutomata from '../CellAutomata/CellAutomata';
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
      ruleA: 111,
      ruleB: 3,
      seedA: 51,
      seedB: 52,
      fillA: '/',
      emptyA: '​‌$',
      fillB: '/',
      emptyB: '​‌[',
    };
  }

  range8Bit(value) {
    let newVal = parseInt(value, 10) || 0;
    newVal = Math.max(0, newVal);
    newVal = Math.min(255, newVal);
    return newVal;
  }

  changeRuleA = (event) => {
    this.setState({
      ruleA: this.range8Bit(event.target.value),
    });
  }
  changeSeedA = (event) => {
    this.setState({
      seedA: event.target.value,
    });
  }
  changeFillA = (event) => {
    this.setState({
      fillA: event.target.value || '',
    });
  }
  changeEmptyA = (event) => {
    this.setState({
      emptyA: event.target.value || '',
    });
  }


  changeRuleB = (event) => {
    this.setState({
      ruleB: this.range8Bit(event.target.value),
    });
  }
  changeSeedB = (event) => {
    this.setState({
      seedB: event.target.value,
    });
  }
  changeFillB = (event) => {
    this.setState({
      fillB: event.target.value || '',
    });
  }
  changeEmptyB = (event) => {
    this.setState({
      emptyB: event.target.value || '',
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

    var dataA = this.automata.generate({
      columns: 15,
      rows: 15,
      rule: this.state.ruleA,
      seed: this.state.seedA,
    });

    var dataB = this.automata.generate({
      columns: 15,
      rows: 15,
      rule: this.state.ruleB,
      seed: this.state.seedB,
    });

    return (
      <div className="App">
        <div className="visual">
          <CellAutomata
            data={dataA}
            fill={this.state.fillA}
            empty={this.state.emptyA}
          />
          <br/>
          <br/>
          <br/>
          <CellAutomata
            data={dataB}
            fill={this.state.fillB}
            empty={this.state.emptyB}
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
          <br/>
          <br/>

          <div className="value">
            <div className="value--caption">Rule A <span className="value--valuerange">0–255</span> </div>
            <input
              className="value--input"
              type="text"
              value={this.state.ruleA}
              onChange={this.changeRuleA}
            />
          </div>

          <div className="value">
            <div className="value--caption">Seed A <span className="value--valuerange">any</span> </div>
            <input
              className="value--input"
              type="text"
              value={this.state.seedA}
              onChange={this.changeSeedA}
            />
          </div>

          <div className="value">
            <div className="value--caption">Fill A <span className="value--valuerange">one char</span> </div>
            <input
              className="value--input"
              type="text"
              value={this.state.fillA}
              onChange={this.changeFillA}
            />
          </div>
          <div className="value">
            <div className="value--caption">Empty A <span className="value--valuerange">one char</span> </div>
            <input
              className="value--input"
              type="text"
              value={this.state.emptyA}
              onChange={this.changeEmptyA}
            />
          </div>

          <br/>
          <br/>
          <br/>

          <div className="value">
            <div className="value--caption">Rule B <span className="value--valuerange">0–255</span> </div>
            <input
              className="value--input"
              type="text"
              value={this.state.ruleB}
              onChange={this.changeRuleB}
            />
          </div>

          <div className="value">
            <div className="value--caption">Seed B <span className="value--valuerange">any</span> </div>
            <input
              className="value--input"
              type="text"
              value={this.state.seedB}
              onChange={this.changeSeedB}
            />
          </div>

          <div className="value">
            <div className="value--caption">Fill B <span className="value--valuerange">one char</span> </div>
            <input
              className="value--input"
              type="text"
              value={this.state.fillB}
              onChange={this.changeFillB}
            />
          </div>
          <div className="value">
            <div className="value--caption">Empty B <span className="value--valuerange">one char</span> </div>
            <input
              className="value--input"
              type="text"
              value={this.state.emptyB}
              onChange={this.changeEmptyB}
            />
          </div>

        </div>






      </div>
    );
  }
}
// App.propTypes = {
//   columns: React.PropTypes.number.isRequired,
//   rows: React.PropTypes.number.isRequired,
//   rule: React.PropTypes.number.isRequired,
//   seed: React.PropTypes.number.isRequired,
// };



export default App;
