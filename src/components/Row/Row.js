import React, {Component} from 'react';
require('./Row.scss');
import Cell from '../Cell/Cell';

class Row extends Component {

  constructor() {
    super();
  }

  render() {

    var cells = this.props.data.map((cell, i) => {
      if (cell) {
        return (<Cell
          active={true}
          text={this.props.fill}
          key={'cell-' + i}
        />);
      } else {
        return (<Cell
          active={false}
          text={this.props.empty}
          key={'cell-' + i}
        />);
      }
    });

    return (
      <div className="Row">
        {cells}
      </div>
    );
  }
}

Row.propTypes = {
  data: React.PropTypes.array.isRequired,
  fill: React.PropTypes.string,
  empty: React.PropTypes.string,
};

export default Row;
