angular.module('c.pl', [])

.controller('UrlsCtrl', function($scope, $http) {
  $scope.formData = {};

  $scope.createShortUrl = function() {
    $http.post('/api/urls', $scope.formData)
      .success(function(data) {
        $scope.formData = {}
        $scope.shortUrl = data.shortUrl;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      })
  };
});
