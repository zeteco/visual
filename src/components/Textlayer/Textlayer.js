import React, {Component} from 'react';
require('./Textlayer.scss');

class Textlayer extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="textlayer">
        {this.props.children}
      </div>
    );
  }
}

// Textlayer.propTypes = {
//   string: React.PropTypes.string,
// };

export default Textlayer;
