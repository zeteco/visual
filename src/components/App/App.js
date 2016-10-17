import React, {Component} from 'react';
require('./App.scss');
import CellAutomata from '../CellAutomata/CellAutomata';
import AutomataLib from '../../helper/CellAutomata';

class App extends Component {

  constructor() {
    super();
    this.automata = new AutomataLib();
  }

  render() {

    var dataA = this.automata.generate({
      columns: 15,
      rows: 15,
      rule: 3,
      seed: 51
    });

    var dataB = this.automata.generate({
      columns: 15,
      rows: 15,
      rule: 3,
      seed: 52
    });

    return (
      <div className="App">
        <CellAutomata
          data={dataA}
        />
        <br/>
        <br/>
        <br/>
        <CellAutomata
          data={dataB}
        />
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
