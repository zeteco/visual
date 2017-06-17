import React, {Component} from 'react';
import styles from './CellAutomata.scss';
import Row from '../Row/Row';
import AutomataLib from '../../helper/CellAutomata';

class CellAutomata extends Component {

  constructor() {
    super();
    this.automata = new AutomataLib();
  }

  render() {

    var rows = this.props.data.map((row, i) => {
      return (<Row
        data={row}
        fill={this.props.fill}
        empty={this.props.empty}
        rowNumber={i}
        key={`r${i}`}
      />);
    });

    return (
      <div className={styles.cellAutomata}>
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
