'use strict;'

var red = ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'];
var green = ['haymarket', 'government center', 'park st', 'boylston', 'arlington', 'copley'];
var orange = ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills'];

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
