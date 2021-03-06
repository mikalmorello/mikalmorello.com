
var app = angular.module('portfolio',  ['ngRoute', 'ngAnimate', 'filters']);

// APP CONFIG

app.config(function ($routeProvider, $locationProvider){
  $routeProvider
  .when('/', { 
    controller: 'MainCtrl',
    templateUrl: 'partials/home.html',
    title: 'Home'
  })
  .when('/about', {
    controller: 'MainCtrl',
    templateUrl: 'partials/about.html',
    title: 'About'
  })
  .when('/contact', {
    controller: 'MainCtrl',
    templateUrl: 'partials/contact.html',
    title: 'Contact'
  })
  .when('/projects', {
    controller: 'MainCtrl',
    templateUrl: 'partials/projects.html',
    title: 'Projects'
  })
  .when('/projects/:title', {
    controller: 'ProjectCtrl',
    templateUrl: 'partials/project_details.html',
    title: 'Project'
  })
 .when('/articles', {
    controller: 'MainCtrl',
    templateUrl: 'partials/articles.html',
    title: 'Articles'
  })
   .when('/search', {
    controller: 'MainCtrl',
    templateUrl: 'partials/search.html',
    title: 'Search'
  })
  .when('/articles/:title', {
    controller: 'ArticleCtrl',
    templateUrl: 'partials/article_details.html',
    title: 'Article'
  })
  .otherwise({
    redirectTo: '/404',
    templateUrl: 'partials/404.html',
    title: '404'
  });
  $locationProvider.html5Mode(true)
});

// MAIN CONTROLLER
app.controller('MainCtrl', ['$scope', 'projects', 'articles', function($scope, projects, articles) {
  projects.success(function(data) {
    $scope.projects = data;
  });
  articles.success(function(data) {
    $scope.articles = data;
  });
  
  $scope.date = new Date();
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


// ARTICLE CONTROLLER
  app.controller('ArticleCtrl', ['$scope', 'articles', '$routeParams', 'sharedProperties', function($scope, articles, $routeParams, sharedProperties) {
  articles.success(function(data) {
    $scope.detail = sharedProperties.getUrlTitle(data, $scope, $routeParams);    
  });
    articles.error(function(data) {
    console.log('error');
  });
}]);


// ARTICLE SERVICE
app.factory('articles', ['$http', function($http) {
  return $http.get('js/article.json')
   .success(function(data) {
     return data;
   })
   .error(function(data) {
     return data;
   });
}]);

// RESUME CONTROLLER
  app.controller('ResumeCtrl', ['$scope', 'resume', function($scope, resume) {
  resume.success(function(data) {
    $scope.resume = data;    
  });
    resume.error(function(data) {
    console.log('error');
  });
}]);


// RESUME SERVICE
app.factory('resume', ['$http', function($http) {
  return $http.get('js/resume.json')
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

app.controller("MenuCtrl", function($scope, $location) {

    // SET ACTIVE MENU CLASS
    $scope.getClass = function (path) {
      if ($location.path().substr(0, path.length) === path) {
        return 'active';
      } else {
        return '';
      }
    }
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


// APP SEARCH DIRECTIVE

app.directive("searchOverlay", function(){
  return {
    restrict: 'E',
    templateUrl: 'templates/search.html',
    controller: function($scope){
        $scope.searchClass = "hide";
        $scope.searchIconClass = "ti-search";
        $scope.searchDisplayClass = "";
           
        $scope.searchDisplay = function(){
              if ($scope.searchClass === "hide"){
                $scope.searchClass = "show";
                $scope.searchIconClass="ti-close";
                $scope.searchDisplayClass = "search-open";
              } else {
                $scope.searchClass = "hide";
                $scope.searchIconClass="ti-search";
                $scope.searchDisplayClass = "";
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

app.directive("scroll", function ($window ) {
    return function(scope, element, attrs) {
        // STICKY MENU SCROLL CHECK
        angular.element($window).bind("scroll", function() {
             if (this.pageYOffset >= 100) {
                 scope.boolChangeClass = true;
                 console.log('Scrolled below header.');
             } else {
                 scope.boolChangeClass = false;
                 console.log('Header is in view.');
             }
            scope.$apply();
          
        // BACK TO TOP BUTTON CHECK
          scope.topClass = 'hide';
          
          if (this.pageYOffset >= 900) {
            scope.topClass = 'show';
          } else {
            scope.topClass = 'hide';
          }
        // BOTTOM OF PAGE FOOTER CHECK
            var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
            var body = document.body, html = document.documentElement;
            var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
            windowBottom = windowHeight + window.pageYOffset;
            scope.footerClass = "";
            if (windowBottom >= (docHeight - 60)) {
                console.log('bottom reached');
                scope.footerClass = "color";
            } else {
                 scope.footerClass = "grey";
            }
        });
    };
});






// change Page Title based on the routers
app.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
        $rootScope.bodyClass = angular.lowercase(current.$$route.title);
        // ANIMATE TO TOP
        //document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
}]);



//FILTERS - TRUNCATE
angular.module('filters', []).
    filter('truncate', function () {
        return function (text, length, end) {

                return String(text).slice(2);
                 console.log(String(text).slice(2));

        };
    });





// CONTACT FORM

// creating Angular Module
  // create angular controller and pass in $scope and $http
  app.controller('FormController',function($scope, $http) {
  // creating a blank object to hold our form information.
  //$scope will allow this to pass between controller and view
  $scope.formData = {};
  // submission message doesn't show when page loads
  $scope.submission = false;
  // Updated code thanks to Yotam
  var param = function(data) {
        var returnString = '';
        for (d in data){
            if (data.hasOwnProperty(d))
               returnString += d + '=' + data[d] + '&';
        }
        // Remove last ampersand and return
        return returnString.slice( 0, returnString.length - 1 );
  };
  $scope.submitForm = function() {
    $http({
    method : 'POST',
    url : 'php/process.php',
    data : param($scope.formData), // pass in data as strings
    headers : { 'Content-Type': 'application/x-www-form-urlencoded' } // set the headers so angular passing info as form data (not request payload)
  })
    .success(function(data) {
      if (!data.success) {
       // if not successful, bind errors to error variables
       $scope.errorName = data.errors.name;
       $scope.errorEmail = data.errors.email;
       $scope.errorTextarea = data.errors.message;
       $scope.submissionMessage = data.messageError;
       $scope.submission = true; //shows the error message
      } else {
      // if successful, bind success message to message
       $scope.submissionMessage = data.messageSuccess;
       $scope.formData = {}; // form fields are emptied with this line
       $scope.submission = true; //shows the success message
      }
     });
   };
});


// ANCHORS?

app.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
});

