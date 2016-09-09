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
            if ($scope.lunch.count === undefined) {
                errorMsg();
                return;
            }
            var trimedCount = $scope.lunch.count.trim()
            var count = parseInt(trimedCount);
            if (isNaN(trimedCount) || isNaN(count)) {
                errorMsg();
                return;
            }
        
            if (count >= 0 && count < 4) {
                enjoyMsg();
            } else if (count >= 4) {
                tooMuchMsg();
            } else {
                errorMsg();
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