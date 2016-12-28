import React, {Component} from 'react';
import styles from './Space.scss';

class Space extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className={styles.space}></div>
    );
  }
}

// Space.propTypes = {
//   string: React.PropTypes.string,
// };

export default Space;
