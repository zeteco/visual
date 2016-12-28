import React, {Component} from 'react';
require('./Cell.scss');

class Cell extends Component {
  render() {
    var cell;
    if (this.props.active) {
      cell = <div className="Cell__item Cell__item--active">{this.props.text}</div>;
    } else {
      cell = <div className="Cell__item Cell__item--passive">{this.props.text}</div>;
    }

    return <div className="Cell">{cell}</div>;
  }
}

Cell.propTypes = {
  active: React.PropTypes.bool.isRequired,
  text: React.PropTypes.string,
};

export default Cell;
