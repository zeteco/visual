var ruleInput = document.querySelector('#rule')
var container = document.body.querySelector('.container')

var width = 120
var height = 120
var ruleNumber

// make random number 0 or 1
var rndBool = () => Math.random()<.5

// make array of random numbers
var rndRow = (count) => Array.from(Array(count)).map(() => rndBool());

// make array of numbers for results
var makeRule = number => {
  var binary = (number >>> 0).toString(2)
  while (binary.length < 8) {
    binary = "0" + binary
  }
  binary = binary.split('').reverse()
  return binary
}

// makes new divs and puts cells in row
var renderRow = row => {
  var rowDiv = newRowDiv()
  row.map( bool => {
    var cell = document.createElement('div')
    cell.classList.add('cell')
    cell.classList.add( bool ? 'cell--true' : 'cell--false' )
    rowDiv.appendChild(cell)
  })
}
// makes new row.div
var newRowDiv = () => {
  var rowDiv = document.createElement('div')
  rowDiv.classList.add('row')
  container.appendChild(rowDiv)
  return rowDiv
}

// meat
var calcNewRow = (oldRow, ruleNumber) => {
  var newRow = []
  var rule = makeRule(ruleNumber)
  oldRow.map((bool, index, arr) => {
    var left  = + arr[index - 1]
    var self  = + bool
    var right = + arr[index + 1]
    if (index === 0)
      var left = + arr[arr.length - 1]
    if (index === arr.length)
      var right = + arr[0]

    var res = parseInt(('' + left + self + right), 2)
    newRow.push( + rule[res])
  })
  return newRow
}

// exec
var calculate = () => {
  container.innerHTML = ''
  ruleNumber = ruleInput.value || 73
  var lastRow = rndRow(width)
  for (var i = 0; i < height; i++) {
    var nextRow = calcNewRow(lastRow, ruleNumber)
    renderRow(nextRow)
    lastRow = nextRow
  }
}

calculate()
