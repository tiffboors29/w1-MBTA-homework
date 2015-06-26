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
  'copley'];

var stopsBetween = function(startLine, startStop, destLine, destStop) {
  var totalStops;

  if (startLine === destLine) {
    totalStop
  }
  console.log(totalStops);
  return totalStops;
};

