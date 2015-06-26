'use strict';

// MBTA HOMEWORK
// Create representation of MBTA, with multiple 'lines', to determine the number of 'stops' between an origin and a destination, accounting for the posibility of transferring between differen lines

var red, orange, green;   //all intersect at park st

red = [
  'south station',
  'park st',
  'kendall',
  'central',
  'harvard',
  'porter',
  'davis',
  'alewife'
  ];

orange = [
  'north station',
  'haymarket',
  'park st',
  'state',
  'downtown crossing',
  'chinatown',
  'back bay',
  'forest hills'
  ];

green = [
  'haymarket',
  'government center',
  'park st',
  'boylston',
  'arlington',
  'copley'
  ];



var sameLine = function(line, firstStop, secondStop) {
  //finde indices of start and stop and subtract them
  //only care about magnitude, not direction, so take absolute value
  var diff = find(line, firstStop) - find(line, secondStop);
  if (diff < 0) {
    diff *= -1;
  }
  return diff;
  //using a ternary operator instead of if would be
  // return (diff > 0)? diff : -diff;
};



var find = function(array, value) { //find value
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return [i];
      }
    }
    return -1;
  };



var tester = function() {
  console.log('find');
  console.log('Find should return 2, actually returns ' + find(['a', 'b', 'c'], 'c'));
  console.log('Find should return -1, actually returns ' + find(['a', 'b', 'c'], 'z'));
  console.log('sameLine');
  console.log('* should return 1, actually returns ' + sameLine(red, 'south station', 'park st'));
  console.log('* should return 4, actually returns ' + sameLine(red, 'kendall', 'davis'));
  console.log('* should return 1, actually returns ' + sameLine(orange, 'back bay', 'forest hills'));
  console.log('* should return 3, actually returns ' + sameLine(orange, 'north station', 'state'));
  console.log('* should return 1, actually returns ' + sameLine(green, 'arlington', 'copley'));
  console.log('* should return 5, actually returns ' + sameLine(green, 'haymarket', 'copley'));
};

tester();
