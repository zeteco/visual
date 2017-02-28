import React, {Component} from 'react';
import Text from '../Text/Text';
import seedrandom from 'seedrandom';
import styles from './Textlayer.scss';

class Textlayer extends Component {

  constructor() {
    super();
  }

  render() {
    let widthStyle = {
      width: 0.8 * this.props.width + 'rem',
    };

    // initalize the seed
    let random = seedrandom(this.props.seed);

    let words = this.props.words
      // split on , but give the option to escape with \, >>> http://stackoverflow.com/questions/7329972/how-to-split-a-string-in-js-with-some-exceptions
      .replace(/\\?\,/g, function (t) { return t === ',' ? '\u000B' : ','; }).split('\u000B')
      .map((word, i) => <Text text={word} key={word + i} style={{paddingLeft: `${(Math.floor(random() * 7 ) * 0.8)}rem`}}/> );

    return (
      <div className={styles.textlayer} style={widthStyle}>
        {words}
      </div>
    );
  }
}

Textlayer.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  words: React.PropTypes.string,
  seed: React.PropTypes.string,
};

export default Textlayer;
