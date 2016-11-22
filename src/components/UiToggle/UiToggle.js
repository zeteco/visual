import React, { Component } from 'react';
require('./UiToggle.scss');

class UiToggle extends Component {
  render() {
    return (
      <input
        type="button"
        className="ui-toggle"
        value={this.props.toggleValue}
        onClick={this.props.toggleClickHandler} />
    );
  }
}

export default UiToggle;