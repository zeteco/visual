import React, { PureComponent } from 'react';
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';
import PropTypes from 'prop-types';
import styles from './MainPage.scss';
import CellAutomata from '../CellAutomata/CellAutomata';
import Textlayer from '../Textlayer/Textlayer';
import AutomataLib from '../../helper/CellAutomata';
import Ui from '../Ui/Ui';
import UiToggle from '../UiToggle/UiToggle';

const urlPropsQueryConfig = {
  rule: { type: UrlQueryParamTypes.number },
  seed: { type: UrlQueryParamTypes.string },
  words: { type: UrlQueryParamTypes.string },
  style: { type: UrlQueryParamTypes.string },
  autosize: { type: UrlQueryParamTypes.boolean },
  autorule: { type: UrlQueryParamTypes.boolean },
  columns: { type: UrlQueryParamTypes.number },
  rows: { type: UrlQueryParamTypes.number },
  fill: { type: UrlQueryParamTypes.string },
  empty: { type: UrlQueryParamTypes.string },
  isUiVisible: { type: UrlQueryParamTypes.boolean },
};

class MainPage extends PureComponent {
  static propTypes = {
    // URL props are automatically decoded and passed in based on the config
    rule: PropTypes.number,
    seed: PropTypes.string,
    words: PropTypes.string,
    style: PropTypes.string,
    autosize: PropTypes.bool,
    autorule: PropTypes.bool,
    columns: PropTypes.number,
    rows: PropTypes.number,
    fill: PropTypes.string,
    empty: PropTypes.string,
    isUiVisible: PropTypes.bool,

    // change handlers are automatically generated when given a config.
    // By default they update that single query parameter and maintain existing
    // values in the other parameters.
    onChangeRule: PropTypes.func.isRequired,
    onChangeSeed: PropTypes.func.isRequired,
    onChangeWords: PropTypes.func.isRequired,
    onChangeStyle: PropTypes.func.isRequired,
    onChangeAutosize: PropTypes.func.isRequired,
    onChangeAutorule: PropTypes.func.isRequired,
    onChangeColumns: PropTypes.func.isRequired,
    onChangeRows: PropTypes.func.isRequired,
    onChangeFill: PropTypes.func.isRequired,
    onChangeEmpty: PropTypes.func.isRequired,
    onChangeIsUiVisible: PropTypes.func.isRequired,
  };

  static defaultProps = {
    rule: 110,
    seed: 'asnely',
    words: `!Zeltlager der Technik- und Computerfreunde <br>**21^^st^^ – 24^^th^^ July 2017**
Ze,!{2,2} ,!{16,2}[→ Wiki with infos](https://wiki.zeteco.ch/)
Te,!{2,2} ,!{8,2}[→ Tickets](https://tickets.zeteco.ch)
Co
!{20,2}[→ Call for Participation](https://frab.zeteco.ch)`,
    style: 'normal',
    autosize: true,
    autorule: true,
    columns: 1,
    rows: 1,
    fill: '/',
    empty: '​‌\\',
    isUiVisible: false,
  };
  constructor() {
    super();
    this.automata = new AutomataLib();

    const body = document.getElementsByTagName('body')[0];


    // setup the trottled event optimizedResize
    (function trottle() {
      const throttle = (type, name, objInput) => {
        const obj = objInput || window;
        let running = false;
        const func = () => {
          if (running) { return; }
          running = true;
          requestAnimationFrame(() => {
            obj.dispatchEvent(new CustomEvent(name));
            running = false;
          });
        };
        obj.addEventListener(type, func);
      };

        /* init - you can init any event */
      throttle('resize', 'optimizedResize');
    }());


    // handle event
    window.addEventListener('optimizedResize', () => {
      if (this.props.autosize) {
        // window.innerWidth;
        const remSize = parseFloat(
          window.getComputedStyle(body, null)
            .getPropertyValue('font-size'),
        );

        this.props.onChangeRows(Math.floor(window.innerHeight / remSize));
        this.props.onChangeColumns(Math.floor(window.innerWidth / (remSize * 0.8)));
      }
    });
  }

  componentDidMount() {
    // if dom is ready set the correct row and columns (autosize: true)
    if (this.props.autosize) {
      window.dispatchEvent(new Event('optimizedResize'));
    }
    setInterval(() => {
      if (this.props.autorule) {
        this.props.onChangeRule(Math.floor(Math.random() * 255));
      }
    }, 3000);
  }
  changeRule = (rule) => {
    this.props.onChangeAutorule(false);
    this.props.onChangeRule(rule);
  };
  changeColumns = (columns) => {
    this.props.onChangeAutosize(false);
    this.props.onChangeColumns(columns);
  };
  changeRows = (rows) => {
    this.props.onChangeAutosize(false);
    this.props.onChangeRows(rows);
  };
  toggleClickHandler = () => {
    this.props.onChangeIsUiVisible(!this.props.isUiVisible);
  };
  changeWords = (text) => {
    this.props.onChangeWords(text);
  };
  render() {
    const data = this.automata.generate({
      columns: this.props.columns,
      rows: this.props.rows,
      rule: this.props.rule,
      seed: this.props.seed,
    });

    return (
      <div className={`${styles.MainPage} ${this.props.style}`}>
        <div className={styles.visual}>
          <Textlayer
            width={this.props.columns}
            height={this.props.rows}
            words={this.props.words}
            seed={this.props.seed}
          />
          <CellAutomata
            data={data}
            fill={this.props.fill}
            empty={this.props.empty}
          />
          <UiToggle
            isUiVisible={this.props.isUiVisible}
            toggleClickHandler={this.toggleClickHandler}
          />
          <Ui
            visible={this.props.isUiVisible}
            columns={this.props.columns}
            autosize={this.props.autosize}
            autorule={this.props.autorule}
            rows={this.props.rows}
            rule={this.props.rule}
            words={this.props.words}
            seed={this.props.seed}
            fill={this.props.fill}
            empty={this.props.empty}
            style={this.props.style}

            changeRule={this.changeRule}
            changeSeed={this.props.onChangeSeed}
            changeWords={this.changeWords}
            changeStyle={this.props.onChangeStyle}
            changeFill={this.props.onChangeFill}
            changeEmpty={this.props.onChangeEmpty}
            changeColumns={this.changeColumns}
            changeRows={this.changeRows}
            changeAutosize={this.props.onChangeAutosize}
            changeAutorule={this.props.onChangeAutorule}
          />
        </div>
      </div>
    );
  }
}
export default addUrlProps({ urlPropsQueryConfig })(MainPage);
