'use strict'

if ( typeof(define) !== 'function' )
  var define = require('amdefine')(module);

define(['stablematch'], function(sma) {

  // setup two sets that will be paired
  var setA = ['1','2','3','4','5','6'];
  var setB = ['a','b','c','d','e','f'];

  // callback function `rankA` returns the preference order
  // of `setB` given any element in `setA`.
  var rankA = function(a) {
    switch ( a )
    {
      case '1': return ['a', 'd', 'b', 'f', 'e', 'c'];
      case '2': return ['c', 'a', 'b', 'd', 'e', 'f'];
      case '3': return ['a', 'b', 'd', 'c', 'e', 'f'];
      case '4': return ['d', 'a', 'b', 'e', 'c', 'f'];
      case '5': return ['a', 'b', 'c', 'f', 'd', 'e'];
      case '6': return ['b', 'a', 'd', 'c', 'e', 'f'];
      default:  throw 'no such element "' + a + '" in set A';
    }
  };

  // callback function `rankB` returns the preference order
  // of `setA` given any element in `setB`.
  var rankB = function(b) {
    switch ( b )
    {
      case 'a': return ['1', '2', '3', '4', '5', '6'];
      case 'b': return ['2', '1', '4', '3', '5', '6'];
      case 'c': return ['5', '1', '6', '3', '2', '4'];
      case 'd': return ['1', '3', '2', '5', '4', '6'];
      case 'e': return ['4', '1', '3', '6', '2', '5'];
      case 'f': return ['2', '1', '4', '3', '6', '5'];
      default:  throw 'no such element "' + b + '" in set B';
    }
  };

  // call stablematch.match() to pair all of the elements.
  var solution = sma.match(setA, setB, rankA, rankB);
  console.log(solution)
})
