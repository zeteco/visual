import React, {Component} from 'react';
import Text from '../Text/Text';
import styles from './Textline.scss';

class Textline extends Component {

  render() {

    let words = this.props.text
      // split on , but give the option to escape with \, >>> http://stackoverflow.com/questions/7329972/how-to-split-a-string-in-js-with-some-exceptions
      // for comma separations
      .replace( /!{([0-9.]+),([0-9.]+)}/g, '!{$1\\,$2}')
      .replace(/\\?\,/g, function (t) { return t === ',' ? '\u000B' : ','; }).split('\u000B')
      .map((word, i) => <Text text={word} key={word + i}/> );

    return (
      <div className={styles.textline} style={this.props.style}>
        {words}
      </div>
    );
  }
}

Textline.propTypes = {
  text: React.PropTypes.string,
  style: React.PropTypes.object,
};

export default Textline;
