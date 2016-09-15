(function () {
  angular.module('LunchCheck', [])

    .controller('LunchCheckController', LunchCheck);

  LunchCheck.$inject = ['$scope'];

  function LunchCheck($scope) {
    $scope.lunch = {};
    $scope.message = "";
    $scope.checkIfTooMuch = check;
    $scope.fontColor = "green";
    $scope.borderColor = "green";


    function check() {
      if ($scope.lunch.content === undefined) {
        errorMsg();
        return;
      }
      var lunchArray = $scope.lunch.content.split(',');
      var length = lunchArray.length;
      if (length >= 0 && length < 4) {
        enjoyMsg();
      } else if (length >= 4) {
        tooMuchMsg();
      }
    };

    function errorMsg() {
      $scope.message = 'Please enter data first';
      $scope.fontColor = "red";
      $scope.borderColor = "red";
    };

    function enjoyMsg() {
      $scope.message = 'Enjoy!';
      $scope.fontColor = "green";
      $scope.borderColor = "green";
    };

    function tooMuchMsg() {
      $scope.message = 'Too much!';
      $scope.fontColor = "green";
      $scope.borderColor = "green";
    };
  }

})();