import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import seedrandom from 'seedrandom';
import Textline from '../Textline/Textline';
import styles from './Textlayer.scss';

class Textlayer extends PureComponent {
  render() {
    const widthStyle = {
      width: `${0.8 * this.props.width}rem`,
      left: `calc(50% - ${(0.8 * this.props.width) / 2}rem)`,
    };

    // initalize the seed
    const random = seedrandom(this.props.seed);

    const words = this.props.words
      // split on , but give the option to escape with \, >>> http://stackoverflow.com/questions/7329972/how-to-split-a-string-in-js-with-some-exceptions
      // for comma separations
      // .replace( /!{([0-9.]+),([0-9.]+)}/g, '!{$1\\,$2}')
      // .replace(/\\?\,/g, function (t) { return t === ',' ? '\u000B' : ','; }).split('\u000B')
      .split('\n')
      .map((line, i) => <Textline text={line} key={line + i} paddingLeft={`${(Math.floor(random() * 7) * 0.8)}rem`} />);

    return (
      <div className={styles.textlayer} style={widthStyle}>
        {words}
      </div>
    );
  }
}

Textlayer.propTypes = {
  width: PropTypes.number.isRequired,
  words: PropTypes.string.isRequired,
  seed: PropTypes.string.isRequired,
};

export default Textlayer;
