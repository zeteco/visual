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

    var rows = this.props.data.map(function(row) {
      return <Row data={row}/>;
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
};

export default CellAutomata;
