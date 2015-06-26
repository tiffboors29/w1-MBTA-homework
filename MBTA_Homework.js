'use strict;'

var red = [
  'south station',
  'park st',
  'kendall',
  'central',
  'harvard',
  'porter',
  'davis',
  'alewife'
  ];

var green = [
  'haymarket',
  'government center',
  'park st',
  'boylston',
  'arlington',
  'copley'
  ];

var orange = [
  'north station',
  'haymarket',
  'park st',
  'state',
  'downtown crossing',
  'chinatown',
  'back bay',
  'forest hills'
  ];

var stopsBetween = function(startLine, startStation, stopLine, stopStation) {
  var totalStops;
  if (startLine === stopLine) {
    totalStops = Math.abs(startLine.indexOf(startStation) - startLine.indexOf(stopStation));
      console.log(totalStops);
      return totalStops;
  } else {
    var stopsToPark;
    var stopsFromPark;
    stopsToPark = Math.abs(startLine.indexOf(startStation) - startLine.indexOf('park st'));
    stopsFromPark = Math.abs(stopLine.indexOf('park st') - stopLine.indexOf(stopStation));
    totalStops = stopsToPark + stopsFromPark;
    console.log(totalStops);
    return totalStops;
  }
};


var tester = function() {
  console.log('stops between on same line');
  console.log('* should return 1, actually returns ' + stopsBetween(red, 'south station', red, 'park st'));
  console.log('* should return 4, actually returns ' + stopsBetween(red, 'kendall', red, 'davis'));
  console.log('* should return 1, actually returns ' + stopsBetween(orange, 'back bay', orange, 'forest hills'));
  console.log('* should return 3, actually returns ' + stopsBetween(orange, 'north station', orange, 'state'));
  console.log('* should return 1, actually returns ' + stopsBetween(green, 'arlington', green, 'copley'));

  console.log('stops between different lines');
  console.log('* should return 5, actually returns ' + stopsBetween(green, 'arlington', red, 'harvard'));
  console.log('* should return 1, actually returns ' + stopsBetween(red, 'south station', orange, 'park st'));
  console.log('* should return 3, actually returns ' + stopsBetween(orange, 'north station', green, 'boylston'));
  console.log('* should return 6, actually returns ' + stopsBetween(green, 'arlington', red, 'porter'));
};

tester();
