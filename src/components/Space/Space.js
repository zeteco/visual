import React, {Component} from 'react';
require('./Space.scss');

class Space extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="space"></div>
    );
  }
}

// Space.propTypes = {
//   string: React.PropTypes.string,
// };

export default Space;
