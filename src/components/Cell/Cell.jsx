import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Cell.scss';

class Cell extends PureComponent {
  render() {
    let cell;
    if (this.props.active) {
      cell = <div className={`${styles.cell__item} ${styles['cell__item--active']}`}>{this.props.text}</div>;
    } else {
      cell = <div className={`${styles.cell__item} ${styles['cell__item--passive']}`}>{this.props.text}</div>;
    }

    return <div className={styles.cell}>{cell}</div>;
  }
}

Cell.propTypes = {
  active: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Cell;
