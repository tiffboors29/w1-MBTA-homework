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



var sameLine = function( start, stop, line) {

};



var find = function(array, value) { //find value
  for (i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return [i];
      }
    }
    return -1;
  };



var tester = function() {
  console.log('Find should return 2, actually returns ' + find(['a', 'b', 'c'], 'c'));
console.log('Find should return -1, actually returns ' + find(['a', 'b', 'c'], 'z'));
};
