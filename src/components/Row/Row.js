import React, {Component} from 'react';
require('./Row.scss');
import Cell from '../Cell/Cell';

class Row extends Component {

  constructor() {
    super();
  }

  render() {

    var cells = this.props.data.map(function(cell) {
      if (cell) {
        return (<Cell active={true}/>);
      } else {
        return (<Cell active={false}/>);
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
};

export default Row;
