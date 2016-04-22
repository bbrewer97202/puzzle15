/**
 * create initial positions for game
 * @param  {number} count number of tiles per row/col
 */
export function createInitialPositions(count) {

  let length = (count * count);
  let values = [];
  let initialPositions = [];

  //fill initial values
  for (let c = 0; c < length; c++) {
    values.push(c);
  }

  //shuffle values
  for (let i = length; i; i -= 1) {
    let j = Math.floor(Math.random() * i);
    let x = values[i - 1];
    values[i - 1] = values[j];
    values[j] = x;
  }

  //put values into multidimensional list
  for (let c = 0, k = -1; c < length; c++) {
    if (c % count === 0) {
      k++;
      initialPositions[k] = [];
    }
    initialPositions[k].push(values[c]);
  }
  return initialPositions;
}

export function getTilePosition(grid, id) {
  let pos = {};
  grid.forEach(function(element, index) {
    let i = element.indexOf(id);
    if (i !== -1) {
      pos.row = index;
      pos.col = i;
    }
  });
  return pos;
}
