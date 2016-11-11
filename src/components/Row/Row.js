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
          key={`c.${this.props.index}.${i}`}
        />);
      } else {
        return (<Cell
          active={false}
          text={this.props.empty}
          key={`c.${this.props.index}.${i}`}
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
  index: React.PropTypes.number,
  empty: React.PropTypes.string,
};

export default Row;
