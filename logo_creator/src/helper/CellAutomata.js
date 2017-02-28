import seedrandom from 'seedrandom';

class CellAutomata {

  // make random number 0 or 1
  rndBool = () => {
    return this.random() < .5;
  }

  // make array of random numbers
  rndRow(count) {
    return Array.from(Array(count)).map(this.rndBool);
  }

  // make array of numbers for the requested rule
  makeRule(number) {
    var binary = (number >>> 0).toString(2);
    while (binary.length < 8) {
      binary = '0' + binary;
    }
    binary = binary.split('').reverse();
    return binary;
  }


  // calculate a new Row based on the last row and the rule
  calcNewRow(oldRow, rule) {
    var newRow = [];

    oldRow.map((bool, index, arr) => {
      var left  = + arr[index - 1];
      var self  = + bool;
      var right = + arr[index + 1];
      if (index === 0) {
        left = + arr[arr.length - 1];
      }
      if (index === arr.length - 1) {
        right = + arr[0];
      }

      var res = parseInt(('' + left + self + right), 2);
      newRow.push( + rule[res]);
    });
    return newRow;
  }

  generate(props) {
    this.columns = props.columns || 15;
    this.rows = props.rows || 15;
    this.rule = props.rule || 3;
    this.seed = props.seed || Math.random();
    return this.calculate();
  }

  calculate() {
    // initalize the seed
    this.random = seedrandom(this.seed);

    var result = [];
    var lastRow = this.rndRow(this.columns);
    var rule = this.makeRule(this.rule);
    Array.from(Array(this.rows)).map(() => {
      var nextRow = this.calcNewRow(lastRow, rule);
      result.push(nextRow);
      lastRow = nextRow;
    });
    return result;
  }
}


export default CellAutomata;
