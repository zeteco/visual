import React, {Component} from 'react';
import Text from '../Text/Text';
require('./Textlayer.scss');

class Textlayer extends Component {

  constructor() {
    super();
  }

  render() {
    let style = {
      width: 0.8 * this.props.width + 'rem',
    };

    let words = this.props.words
      .split(',')
      .map( phrase => <Text text={phrase}/> );

    return (
      <div className="textlayer" style={style}>
        { words }
      </div>
    );
  }
}

Textlayer.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  words: React.PropTypes.string,
};

export default Textlayer;
