import React from 'react';
import PropTypes from 'prop-types';
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
  isUiVisible: PropTypes.bool.isRequired,
  toggleClickHandler: PropTypes.func.isRequired,
};

export default UiToggle;
