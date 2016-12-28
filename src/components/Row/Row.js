import React, {Component} from 'react';
import styles from './Row.scss';
import Cell from '../Cell/Cell';

class Row extends Component {

  constructor() {
    super();
  }

  render() {

    let cells = this.props.data.map((cell, i) => {
      let cellKey = `r${this.props.rowNumber}c${i}`;

      if (cell) {
        return (<Cell
          active={true}
          text={this.props.fill}
          key={cellKey}
        />);
      } else {
        return (<Cell
          active={false}
          text={this.props.empty}
          key={cellKey}
        />);
      }
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
