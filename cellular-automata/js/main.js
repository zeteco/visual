<<<<<<< 71c75761133fe5d4b957d574bdb385c0f9b98348
<<<<<<< 649b1af6898ff2a2eb049d5983449445ffbc2ab8
// var ruleInput = document.querySelector('input.rule')
// var containers = document.body.querySelectorAll('.container')
var containers = Array.prototype.slice.call(document.querySelectorAll('.container'));

var width = 15
var height = 15

// -------------- Render functions -------------- //

// make random number 0 or 1
var rndBool = () => Math.random() < .5

// make array of random numbers
var rndRow = count => Array.from(Array(count)).map(rndBool);
=======
var ruleInput = document.querySelector('#rule')
var container = document.body.querySelector('.container')
=======
// var ruleInput = document.querySelector('input.rule')
// var containers = document.body.querySelectorAll('.container')
var containers = Array.prototype.slice.call(document.querySelectorAll('.container'));
>>>>>>> New visual prototype with two layers

var width = 15
var height = 15

// -------------- Render functions -------------- //

// make random number 0 or 1
var rndBool = () => Math.random() < .5

// make array of random numbers
<<<<<<< 71c75761133fe5d4b957d574bdb385c0f9b98348
<<<<<<< 515444ccec1d959cda18fcb931c5ba847985ebf8
var rndRow = count => {
  let randomRow = []
  for (var i = 0; i < count; i++) {
    randomRow.push(rndBool())
  }
  return randomRow
}
>>>>>>> MOD: bring the code to a js file
=======
var rndRow = (count) => Array.from(Array(count)).map(() => rndBool());
>>>>>>> MOD: some code cleaning
=======
var rndRow = count => Array.from(Array(count)).map(rndBool);
>>>>>>> New visual prototype with two layers

// make array of numbers for results
var makeRule = number => {
  var binary = (number >>> 0).toString(2)
  while (binary.length < 8) {
    binary = "0" + binary
  }
<<<<<<< 515444ccec1d959cda18fcb931c5ba847985ebf8
<<<<<<< 649b1af6898ff2a2eb049d5983449445ffbc2ab8
  binary = binary.split('').reverse()
  return binary
}

=======
  binary = binary.split("").reverse()
=======
  binary = binary.split('').reverse()
>>>>>>> MOD: some code cleaning
  return binary
}

<<<<<<< 71c75761133fe5d4b957d574bdb385c0f9b98348
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

>>>>>>> MOD: bring the code to a js file
=======
>>>>>>> New visual prototype with two layers
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
<<<<<<< 71c75761133fe5d4b957d574bdb385c0f9b98348
<<<<<<< 649b1af6898ff2a2eb049d5983449445ffbc2ab8
    if (index === arr.length - 1)
      var right = + arr[0]

    var res = parseInt(('' + left + self + right), 2)
=======
    if (index === arr.length)
=======
    if (index === arr.length - 1)
>>>>>>> New visual prototype with two layers
      var right = + arr[0]

<<<<<<< 515444ccec1d959cda18fcb931c5ba847985ebf8
    var res = parseInt(("" + left + self + right), 2)
>>>>>>> MOD: bring the code to a js file
=======
    var res = parseInt(('' + left + self + right), 2)
>>>>>>> MOD: some code cleaning
    newRow.push( + rule[res])
  })
  return newRow
}

// exec
<<<<<<< 71c75761133fe5d4b957d574bdb385c0f9b98348
<<<<<<< 649b1af6898ff2a2eb049d5983449445ffbc2ab8
var calculate = ruleNumber => {
  var result = []
  // ruleNumber = ruleInput.value || 73
  var lastRow = rndRow(width)
  Array.from(Array(height)).map(() => {
    var nextRow = calcNewRow(lastRow, ruleNumber)
    // renderRow(nextRow)
    result.push(nextRow)
    lastRow = nextRow
  })
  return result
}

// -------------- Render functions -------------- //

// makes new divs and puts cells in row
var renderRow = (row, element) => {
  var rowDiv = newRowDiv(element)
  return row.map( bool => {
    var cell = document.createElement('div')
    cell.classList.add('cell')
    cell.classList.add( bool ? 'cell--true' : 'cell--false' )
    rowDiv.appendChild(cell)
    return cell
  })
}
// makes new row.div
var newRowDiv = (element) => {
  var rowDiv = document.createElement('div')
  rowDiv.classList.add('row')
  element.appendChild(rowDiv)
  return rowDiv
}

var render = (data, element) => {
  element.innerHTML = ''
  return data.map( row => renderRow(row, element) )

}

var findSpace = (array, string) => {
  var line = array.toString().split(',').join('')
  var string = Array.from(Array(string.length)).map( x => 1 )
  .toString().split(',').join('')

  var targetIndex = line.indexOf(string)
  return targetIndex
}

var placeWords = (data, nodes, words) => {
  var fullRow = -1
  words.map( word => {
    var done = false
    data.map((row, index) => {
      if (!done) {
        var candidate = findSpace(row, word)
        if (candidate !==  -1 && index > fullRow) {
          fullRow = index
          done = true
          var letters = word.split('')
          letters.map((letter, letterIndex) => {
            nodes[index][candidate + letterIndex].innerHTML = letter
            nodes[index][candidate + letterIndex].classList.add('letter')
          })
          // console.log(`row: ${index}, space: ${candidate}, fullRow: ${fullRow}`);
        }
      }
    })
  })
}

// -------------- execute -------------- //

var newCA = elements => {
  elements.map((container, index) => {
    var result = calculate(110)
    var nodes = render(result, container)
    // console.log(nodes);
    if (index) {
      placeWords(result, nodes, ['ZE', 'TE', 'CO', '2017'])
      // addLetters(['BAR', 'RECHTS'], result, container)
    }
  })
}


newCA(containers)
=======
var calculate = () => {
  container.innerHTML = ''
  ruleNumber = ruleInput.value || 73
=======
var calculate = ruleNumber => {
  var result = []
  // ruleNumber = ruleInput.value || 73
>>>>>>> New visual prototype with two layers
  var lastRow = rndRow(width)
  Array.from(Array(height)).map(() => {
    var nextRow = calcNewRow(lastRow, ruleNumber)
    // renderRow(nextRow)
    result.push(nextRow)
    lastRow = nextRow
  })
  return result
}

// -------------- Render functions -------------- //

// makes new divs and puts cells in row
var renderRow = (row, element) => {
  var rowDiv = newRowDiv(element)
  return row.map( bool => {
    var cell = document.createElement('div')
    cell.classList.add('cell')
    cell.classList.add( bool ? 'cell--true' : 'cell--false' )
    rowDiv.appendChild(cell)
    return cell
  })
}
// makes new row.div
var newRowDiv = (element) => {
  var rowDiv = document.createElement('div')
  rowDiv.classList.add('row')
  element.appendChild(rowDiv)
  return rowDiv
}

var render = (data, element) => {
  element.innerHTML = ''
  return data.map( row => renderRow(row, element) )

}

<<<<<<< 71c75761133fe5d4b957d574bdb385c0f9b98348
calculate()
>>>>>>> MOD: bring the code to a js file
=======
var findSpace = (array, string) => {
  var line = array.toString().split(',').join('')
  var string = Array.from(Array(string.length)).map( x => 1 )
  .toString().split(',').join('')

  var targetIndex = line.indexOf(string)
  return targetIndex
}

var placeWords = (data, nodes, words) => {
  var fullRow = -1
  words.map( word => {
    var done = false
    data.map((row, index) => {
      if (!done) {
        var candidate = findSpace(row, word)
        if (candidate !==  -1 && index > fullRow) {
          fullRow = index
          done = true
          var letters = word.split('')
          letters.map((letter, letterIndex) => {
            nodes[index][candidate + letterIndex].innerHTML = letter
            nodes[index][candidate + letterIndex].classList.add('letter')
          })
          // console.log(`row: ${index}, space: ${candidate}, fullRow: ${fullRow}`);
        }
      }
    })
  })
}

// -------------- execute -------------- //

var newCA = elements => {
  elements.map((container, index) => {
    var result = calculate(15)
    var nodes = render(result, container)
    // console.log(nodes);
    if (index) {
      placeWords(result, nodes, ['ZE', 'TE', 'CO', '2017'])
      // addLetters(['BAR', 'RECHTS'], result, container)
    }
  })
}


newCA(containers)
>>>>>>> New visual prototype with two layers
