import React from 'react';
import styles from './UiToggle.scss';

const UiToggle = (props) => {
  const { isUiVisible, toggleClickHandler } = props;
  const toggleValue = (bool) => {
    if (!bool) return `${styles.cog} ${styles.uiToggle}`;
    return `${styles.cross} ${styles.uiToggle}`;
  };
  return (
    <input
      type="button"
      className={toggleValue(isUiVisible)}
      value={''}
      onClick={toggleClickHandler}
    />
  );
};

UiToggle.propTypes = {
  isUiVisible: React.PropTypes.bool,
  toggleClickHandler: React.PropTypes.func,
};

export default UiToggle;
