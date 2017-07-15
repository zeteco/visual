import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CellAutomata.scss';
import Row from '../Row/Row';
import AutomataLib from '../../helper/CellAutomata';

class CellAutomata extends Component {
  constructor() {
    super();
    this.automata = new AutomataLib();
  }

  render() {
    const rows = this.props.data.map((row, i) => (<Row
      data={row}
      fill={this.props.fill}
      empty={this.props.empty}
      rowNumber={i}
      key={`r${i}`}
    />));

    return (
      <div className={styles.cellAutomata}>
        {rows}
      </div>
    );
  }
}

CellAutomata.propTypes = {
  data: PropTypes.array.isRequired,
  fill: PropTypes.string.isRequired,
  empty: PropTypes.string.isRequired,
};

export default CellAutomata;
