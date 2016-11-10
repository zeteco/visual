import React, {Component} from 'react';
require('./CellAutomata.scss');
import Row from '../Row/Row';
import AutomataLib from '../../helper/CellAutomata';

class CellAutomata extends Component {

  constructor() {
    super();
    this.automata = new AutomataLib();
  }

  render() {

    var rows = this.props.data.map((row) => {
      return (<Row
        data={row}
        fill={this.props.fill}
        empty={this.props.empty}
      />);
    });

    return (
      <div className="CellAutomata">
        {rows}
      </div>
    );
  }
}

CellAutomata.propTypes = {
  data: React.PropTypes.array.isRequired,
  fill: React.PropTypes.string,
  empty: React.PropTypes.string,
};

export default CellAutomata;
