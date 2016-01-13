
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
});


// APP MENU DIRECTIVE

app.directive("menuOverlay", function(){
  return {
    restrict: 'E',
    templateUrl: 'templates/overlay.html',
    controller: function($scope){
        $scope.overlayClass = "hide";
        $scope.containerClass = "container";
        $scope.menuOverlayClass = "";  
           
        $scope.overlayMenu = function(){
              if ($scope.overlayClass === "hide") {
                $scope.overlayClass = "overlay"
                $scope.containerClass = "container overlay-open"
                $scope.menuOverlayClass = "is-active";
              } else if ($scope.overlayClass === "overlay"){
                $scope.overlayClass = "overlay overlay-contentscale"
                $scope.containerClass = "container";
                $scope.menuOverlayClass = ""
              } else {
                $scope.overlayClass = "overlay"
                $scope.containerClass = "container overlay-open"
                $scope.menuOverlayClass = "is-active";
              }
            };
        }
  }
});

// FIXED TOP MENU

app.directive('setClassWhenAtTop', function ($window) {
    var $win = angular.element($window); // wrap window object as jQuery object

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var topClass = attrs.setClassWhenAtTop, // get CSS class from directive's attribute value
                offsetTop = element.offset().top; // get element's top relative to the document

            $win.on('scroll', function (e) {
                if ($win.scrollTop() >= offsetTop) {
                    element.addClass(topClass);
                } else {
                    element.removeClass(topClass);
                }
            });
        }
    };
});

app.controller('ctrl', function ($scope) {
    $scope.scrollTo = function (target){
    };
});

// SCROLL TEST

app.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
             if (this.pageYOffset >= 100) {
                 scope.boolChangeClass = true;
                 console.log('Scrolled below header.');
             } else {
                 scope.boolChangeClass = false;
                 console.log('Header is in view.');
             }
            scope.$apply();
        });
    };
});

