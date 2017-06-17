import React, { Component } from 'react';
import styles from './App.scss';
import CellAutomata from '../CellAutomata/CellAutomata';
import Textlayer from '../Textlayer/Textlayer';
import Text from '../Text/Text';
import Space from '../Space/Space';
import AutomataLib from '../../helper/CellAutomata';
import Ui from '../Ui/Ui';
import UiToggle from '../UiToggle/UiToggle';

class App extends Component {

  constructor() {
    super();
    this.automata = new AutomataLib();

    var body = document.getElementsByTagName('body')[0];


    // setup the trottled event optimizedResize
    (function() {
        var throttle = function(type, name, obj) {
            obj = obj || window;
            var running = false;
            var func = function() {
                if (running) { return; }
                running = true;
                 requestAnimationFrame(function() {
                    obj.dispatchEvent(new CustomEvent(name));
                    running = false;
                });
            };
            obj.addEventListener(type, func);
        };

        /* init - you can init any event */
        throttle("resize", "optimizedResize");
    })();

    this.state = {
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
      columns: 45,
      rows: 27,
      fill: '/',
      empty: '​‌\\',
      isUiVisible: false,
    };


    // handle event
    window.addEventListener('optimizedResize', () => {

      if(this.state.autosize) {
        // window.innerWidth;
        var remSize = parseFloat(
          window.getComputedStyle(body, null)
            .getPropertyValue('font-size')
        );

        this.setState({
          rows: Math.floor(window.innerHeight / remSize),
          columns: Math.floor(window.innerWidth / (remSize * 0.8)),
        });
      }
    });
  }

  componentDidMount() {
    // if dom is ready set the correct row and columns (autosize: true)
    if(this.state.autosize) {
      window.dispatchEvent(new Event('optimizedResize'));
    }
    setInterval(() => {
      console.log('update')
      if(this.state.autorule) {
        this.setState({
          rule: Math.floor(Math.random() * 255),
        });
      }
    }, 3000);

  }

  changeRule = (rule) => this.setState({ rule });
  changeSeed = (seed) => this.setState({ seed });
  changeWords = (words) => this.setState({ words });
  changeStyle = (style) => this.setState({ style });
  changeFill = (fill) => this.setState({ fill });
  changeEmpty = (empty) => this.setState({ empty });
  changeAutosize = (autosize) => this.setState({ autosize });
  changeAutorule = (autorule) => this.setState({ autorule });
  changeColumns = (columns) => this.setState({ autosize: false, columns });
  changeRows = (rows) => this.setState({ autosize: false, rows });
  toggleClickHandler = () => this.setState({ isUiVisible: !this.state.isUiVisible });

  render() {
    var data = this.automata.generate({
      columns: this.state.columns,
      rows: this.state.rows,
      rule: this.state.rule,
      seed: this.state.seed,
    });

    return (
      <div className={`${styles.app} ${this.state.style}`}>
        <div className={styles.visual}>
          <Textlayer
            width={this.state.columns}
            height={this.state.rows}
            words={this.state.words}
            seed={this.state.seed}
            />
          <CellAutomata
            data={data}
            fill={this.state.fill}
            empty={this.state.empty}
            />
          <UiToggle
            isUiVisible={this.state.isUiVisible}
            toggleClickHandler={this.toggleClickHandler}
            />
          <Ui
            visible={this.state.isUiVisible}
            columns={this.state.columns}
            autosize={this.state.autosize}
            autorule={this.state.autorule}
            rows={this.state.rows}
            rule={this.state.rule}
            words={this.state.words}
            seed={this.state.seed}
            fill={this.state.fill}
            empty={this.state.empty}

            changeRule={this.changeRule}
            changeSeed={this.changeSeed}
            changeWords={this.changeWords}
            changeStyle={this.changeStyle}
            changeFill={this.changeFill}
            changeEmpty={this.changeEmpty}
            changeColumns={this.changeColumns}
            changeRows={this.changeRows}
            changeAutosize={this.changeAutosize}
            changeAutorule={this.changeAutorule}
            />
        </div>
      </div>
    );
  }
}

export default App;
