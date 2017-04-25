import React, {Component} from 'react';
import styles from './Text.scss';

class Text extends Component {

  constructor() {
    super();
  }

  render() {

    var letters = null;

    if(this.props.text.charAt(0) === '!') {
      //make a wobbly markdown parser...
      const fakeMarkdown = this.props.text
        .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
        .replace(/&lt;br&gt;/g,'<br>')
        .replace(/^!(.*)$/gi, `<div class="${styles.fakemarkdown}">$1</div>`)
        .replace(/\*\*([^*]*)\*\*/gi, `<span class="${styles.fakemarkdown__emphasis}">$1</span>`)
        .replace(/\^\^([^\^]*)\^\^/gi, `<sup>$1</sup>`)
        .replace(/\[([^[]*)\]\(([^)]*)\)/gi, '<a href="$2" target="_blank">$1</a>');
      letters = <div style={this.props.style}><div dangerouslySetInnerHTML={{ __html: fakeMarkdown }}></div></div>;
    } else {
      letters = this.props.text.split('').map((letter, i) => {
        return (
          <div className={styles.letter} key={`text-${i}`} >
            { letter }
          </div>
        );
      });
    }

    return (
      <div className={styles.text} style={this.props.style}>
        <div className={styles.wrapper}>
          { letters }
        </div>
      </div>
    );
  }
}

Text.propTypes = {
  text: React.PropTypes.string,
  style: React.PropTypes.object,
};

export default Text;
