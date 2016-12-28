import React, { Component } from 'react';
require('./UiToggle.scss');

const UiToggle = (props) => {
  const { isUiVisible, toggleClickHandler} = props;
  const toggleValue = (bool) => {
    if (!bool) return '⚙';
    else return 'X';
  };
  return (
    <input
      type="button"
      className="ui-toggle"
      value={toggleValue(isUiVisible)}
      onClick={toggleClickHandler} />
  );
};

UiToggle.propTypes = {
  isUiVisible: React.PropTypes.bool,
  toggleClickHandler: React.PropTypes.func,
};

export default UiToggle;