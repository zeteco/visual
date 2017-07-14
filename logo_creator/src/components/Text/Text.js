import React, { Component } from 'react';
import styles from './Text.scss';

class Text extends Component {
  constructor() {
    super();
  }

  render() {
    let letters = null;

    // start with ! then its markdown
    if (this.props.text.charAt(0) === '!') {
      // make a wobbly markdown parser...


      let width = 21;
      let height = 4;

      let text = this.props.text;

      // if the text starts with !{w,h} the box is defined by the user
      const regexp = /^!{([0-9.]+),([0-9.]+)}(.*)$/gi;

      const match = regexp.exec(text);
      if (match) {
        width = match[1];
        height = match[2];
        text = `!${match[3]}`;
      }

      const style = `
        width: ${width * 0.8}rem;
        height: ${height}rem;
      `;

      let texttype = 'normal';
      if (/^!\s+$/.test(text)) {
        texttype = 'empty';
      }

      // <br> is preserved
      // **text** = emphasis text
      // ^^txt^^ = supertext
      // [LinkText](https://...) = link
      const fakeMarkdown = text
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/&lt;br&gt;/g, '<br>')
        .replace(/^!(.*)$/gi, `<div class="${styles.fakemarkdown} ${texttype}" style="${style}">$1<div class="${styles.shade}" style="${style}"></div></div>`)
        .replace(/\*\*([^*]*)\*\*/gi, `<span class="${styles.fakemarkdown__emphasis}">$1</span>`)
        .replace(/\^\^([^\^]*)\^\^/gi, '<sup>$1</sup>')
        .replace(/\[([^[]*)\]\(([^)]*)\)/gi, '<a href="$2" target="_blank">$1</a>');
      letters = <div style={this.props.style}><div dangerouslySetInnerHTML={{ __html: fakeMarkdown }} /></div>;
    } else {
      letters = this.props.text.split('').map((letter, i) => {
        let lettertype = 'normal';
        let printLetter = letter;
        if (letter === ' ') {
          lettertype = 'empty';
          printLetter = '.';
        }

        return (
          <div className={`${styles.letter} ${lettertype}`} key={`text-${i}`} >
            { printLetter }<div className={styles.shade} />
          </div>
        );
      });
    }

    return (
      <div className={styles.text} style={this.props.style}>
        <div className={styles.wrapper}>{ letters }</div>
      </div>
    );
  }
}

Text.propTypes = {
  text: React.PropTypes.string,
  style: React.PropTypes.object,
};

export default Text;
