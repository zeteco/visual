import React from 'react';
import styles from './UiToggle.scss';

const UiToggle = (props) => {
  const { isUiVisible, toggleClickHandler} = props;
  const toggleValue = (bool) => {
    if (!bool) return '⚙';
    else return 'X';
  };
  return (
    <input
      type="button"
      className={styles.uiToggle}
      value={toggleValue(isUiVisible)}
      onClick={toggleClickHandler} />
  );
};

UiToggle.propTypes = {
  isUiVisible: React.PropTypes.bool,
  toggleClickHandler: React.PropTypes.func,
};

export default UiToggle;
