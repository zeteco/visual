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
      .map((word, i) => <Text text={word} key={word + i}/> );

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
