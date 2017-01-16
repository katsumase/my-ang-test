(function () {
'use strict'

angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  $scope.items = "";


  $scope.getLunchList = function () {

    $scope.message = parse_list($scope.items);

  };

  function parse_list(s) {

    var message = "";
    var count = 0;

    if ( s.length === 0 ) {

      message = "Please enter data first";

      return message;

    }

    var arrayofstring = s.split(',');

    for (var i = 0; i < arrayofstring.length; i++) {

      if ( arrayofstring[i] != " " && arrayofstring[i] != "") { //skipping blanks and nulls
        count += 1;
        console.log( arrayofstring[i] );
      }

    }
      console.log("Total in array" + " = " + arrayofstring.length + " Total count = " + count);

    if ( count <= 3) {
      message = "Enjoy!";
    }
    else if  (count > 3) {
      message = "Too much!";
    }
    else {
      message = "empty list!";
    }

    return message;

  }

}


})();
