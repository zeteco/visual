import React, {Component} from 'react';
require('./Text.scss');

class Text extends Component {

  constructor() {
    super();
  }

  render() {
    const letters = this.props.text.split('').map( letter => {
      return <div className="letter">{ letter }</div>
    })
    return (
      <div className="text">
        <div className="wrapper">
          { letters }
        </div>
      </div>
    );
  }
}

// Text.propTypes = {
//   string: React.PropTypes.string,
// };

export default Text;
