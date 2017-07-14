import React, { Component } from 'react';
import styles from './Row.scss';
import Cell from '../Cell/Cell';

class Row extends Component {
  constructor() {
    super();
  }

  render() {
    const cells = this.props.data.map((cell, i) => {
      const cellKey = `r${this.props.rowNumber}c${i}`;

      if (cell) {
        return (<Cell
          active
          text={this.props.fill}
          key={cellKey}
        />);
      }
      return (<Cell
        active={false}
        text={this.props.empty}
        key={cellKey}
      />);
    });

    return (
      <div className={styles.row}>
        {cells}
      </div>
    );
  }
}

Row.propTypes = {
  data: React.PropTypes.array.isRequired,
  fill: React.PropTypes.string,
  rowNumber: React.PropTypes.number,
  empty: React.PropTypes.string,
};

export default Row;
