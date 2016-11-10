import React, {Component} from 'react';
import Text from '../Text/Text';
import Space from '../Space/Space';
require('./Textlayer.scss');

class Textlayer extends Component {

  constructor() {
    super();
  }

  render() {
    let style = {
      width: 0.8 * this.props.width + 'rem',
    };

    let phrases = this.props.phrases
      .split('|')
      .map( phrase => <Text text={phrase}/> );

    return (
      <div className="textlayer" style={style}>
        { phrases }
      </div>
    );
  }
}

Textlayer.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  phrases: React.PropTypes.string,
};

export default Textlayer;
