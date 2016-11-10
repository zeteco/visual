import React, {Component} from 'react';
require('./Text.scss');

class Text extends Component {

  constructor() {
    super();
  }

  render() {
    let random = Math.floor(Math.random() * 7 ) * 0.8;

    let style = {
      paddingLeft: random + 'rem',
    };

    const letters = this.props.text.split('').map((letter, i) => {
      return (
        <div className="letter" key={`text-${i}`} >
          { letter }
        </div>
      );
    });

    return (
      <div className="text" style={style}>
        <div className="wrapper">
          { letters }
        </div>
      </div>
    );
  }
}

Text.propTypes = {
  text: React.PropTypes.string,
};

export default Text;
