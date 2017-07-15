import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Row.scss';
import Cell from '../Cell/Cell';

class Row extends PureComponent {
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
  data: PropTypes.array.isRequired,
  fill: PropTypes.string.isRequired,
  rowNumber: PropTypes.number.isRequired,
  empty: PropTypes.string.isRequired,
};

export default Row;
