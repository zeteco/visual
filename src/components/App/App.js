import React, { Component } from 'react';
import MainPage from '../MainPage/MainPage';
import history from '../../history';

class App extends Component {
  componentDidMount() {
    // force an update if the URL changes
    history.listen(() => {
      this.forceUpdate();
    });
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <MainPage />
      </div>
    );
  }
}

export default App;
