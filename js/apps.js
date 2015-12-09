
var app = angular.module('portfolio', ['ngRoute', 'ngAnimate']);

// APP CONFIG

app.config(function ($routeProvider){
  $routeProvider
  .when('/', { 
    controller: 'MainCtrl',
    templateUrl: 'partials/home.html'
  })
  .when('/projects', {
    controller: 'MainCtrl',
    templateUrl: 'partials/projects.html'
  })
  .when('/projects/:title', {
    controller: 'ProjectCtrl',
    templateUrl: 'partials/project_details.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});

// HOME CONTROLLER
app.controller('MainCtrl', ['$scope', 'projects', function($scope, projects) {
  projects.success(function(data) {
    $scope.projects = data;
  });
}]);
  
// PROJECT CONTROLLER
  app.controller('ProjectCtrl', ['$scope', 'projects', '$routeParams', 'sharedProperties', function($scope, projects, $routeParams, sharedProperties) {
  projects.success(function(data) {
    $scope.detail = sharedProperties.getUrlTitle(data, $scope, $routeParams);    
  });
    projects.error(function(data) {
    console.log('error');
  });
}]);


// PROJECT SERVICE
app.factory('projects', ['$http', function($http) {
  return $http.get('js/project.json')
   .success(function(data) {
     return data;
   })
   .error(function(data) {
     return data;
   });
}]);


// SHARED SERVICE FOR STORING REUSABLE FUNCTIONS


app.service('sharedProperties', function () {
  return {
    getUrlTitle: function(data, $scope, $routeParams ) {   
      $scope.data = data;
          angular.forEach($scope.data, function(value, key){
            if(value.title == $routeParams.title) {
              $scope.detail = $scope.data[key];
              console.log('Match: ' + value.title);
            } else {
              console.log('Not a match: ' + value.title);
            }
          });
        return $scope.detail;
      }
  };
});

// APP MENU OVERLAY

app.controller("MenuCtrl", function($scope) {

   /* MENU TOGGLE - ANGULAR */
    $scope.overlayClass = "overlay overlay-contentscale";
    $scope.containerClass = "container";
    
    $scope.overlayMenu = function(){
        if ($scope.overlayClass === "overlay overlay-contentscale") {
            $scope.overlayClass = "overlay"
            $scope.containerClass = "container overlay-open";
          } else {
            $scope.overlayClass = "overlay overlay-contentscale"
            $scope.containerClass = "container";
          }
    };
});


// APP MENU DIRECTIVE
app.directive("menuOverlay", function(){
  return {
    restrict: 'E',
    templateUrl: 'templates/overlay.html'
  };
});