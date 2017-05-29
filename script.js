// Code goes here

angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {
  $scope.user = {
    name: 'Luke Skywalker',
    address: {
      street: 'PO box 123',
      city: 'Secret Rebel Base',
      planet: 'Yavin 4'
    },
    friends: [
      "Leia",
      "Chewbacca",
      "Han Solo"
    ]
  }
});

angular.module('app').directive('userInfoCard', function() {
  return {
    templateUrl: "./userInfoCard.html",
    restrict: "E"
  }
})