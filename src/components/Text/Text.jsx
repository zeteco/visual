import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Text.scss';

class Text extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

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
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') // html escape
        .replace(/&lt;br&gt;/g, '<br>') // restore <br>-tag
        .replace(/^!(.*)$/gi, '$1') // remove leading exclamation mark
        .replace(/^\s*/mg, x => new Array(x.length + 1).join('&nbsp;')) // replace leading spaces with &nbsp;
        .replace(/^(.*)$/gi, `<div class="${styles.fakemarkdown} ${texttype}" style="${style}">$1<div class="${styles.shade}" style="${style}"></div></div>`)
        .replace(/\*\*([^*]*)\*\*/gi, `<span class="${styles.fakemarkdown__emphasis}">$1</span>`) // **text** => emphasis
        .replace(/\^\^([^^]*)\^\^/gi, '<sup>$1</sup>') // ^^text^^ => superscript
        .replace(/\[([^[]*)\]\(([^)]*)\)/gi, '<a href="$2" target="_blank">$1</a>');
      letters = <div dangerouslySetInnerHTML={{ __html: fakeMarkdown }} />; // eslint-disable-line
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
      <div className={styles.text}>
        <div className={styles.wrapper}>{ letters }</div>
      </div>
    );
  }
}

export default Text;
