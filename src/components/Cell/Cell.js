import React, {Component} from 'react';
require('./Cell.scss');

class Cell extends Component {
  render() {
    var cell;
    if (this.props.active) {
      cell = <div className="Cell__item Cell__item--active"></div>;
    } else {
      cell = <div className="Cell__item Cell__item--passive"></div>;
    }

    return (
      <div className="Cell">{cell}</div>
    );
  }
}

Cell.propTypes = {
  active: React.PropTypes.bool.isRequired,
};

export default Cell;
