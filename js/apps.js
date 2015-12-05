
/**
 * Main AngularJS Web Application
 */
var app = angular.module('portfolio', ['ngRoute', 'ngAnimate']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', '$locationProvider', function ($routeProvider,$locationProvider ) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/projects", {templateUrl: "partials/projects.html", controller: "PageCtrl"})
    .when("/blog", {templateUrl: "partials/blog.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // COMPONENT
    .when("/project", { templateUrl: "partials/projects_list.html"})
    .when("/projects/:title", { templateUrl: "partials/project_details.html", controller: "ShowProjectCtrl" })
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"})
}]);


/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function ($scope) {
  console.log("Page Controller reporting for duty.");
});


// DATA TYPE PROJECTS
app.factory("Project", function() {
  
var projects = [
  {   title: 'Project-Name-1',
      subtitle: 'Project Details Subtitle',
	  image: 'assets/images/project-1.jpg', 
	  description: 'Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte',
      url:'partials/projects/project-name-1.html'
	},
  {   title: 'Project-Name-2',
      subtitle: 'Project Details Subtitle',
	  image: 'assets/images/project-2.jpg', 
	  description: 'Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte',
      url:'partials/projects/project-name-2.html'
	},
  {   title: 'Project-Name-3',
      subtitle: 'Project Details Subtitle',
	  image: 'assets/images/project-3.jpg', 
	  description: 'Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte',
      url:'partials/projects/project-name-3.html'
	}
]
    return {
      all: function() {
        return projects;
      },
      get: function(title) {
        var result = null;
        angular.forEach(projects, function(p) {
          if (p.title == title) result = p;
        });
       return result;
    }
  };
});

app.controller("ProjectCtrl", function($scope, Project) {
  $scope.projects = Project.all();
});

app.controller("ShowProjectCtrl", function($scope, $routeParams, Project) {
  $scope.project = Project.get($routeParams.title);
});

app.controller("MainCtrl", function($scope, $location, $anchorScroll) {
  $scope.menuClass = function(page) {
    var current = $location.path().substring(1);
    return page === current ? "active" : "";
  };

   /* MENU TOGGLE - ANGULAR */
    $scope.sidebarClass = "sidebar-open";
    $scope.iconClass ="ti-menu icon-large";
    
    $scope.changeClass = function(){
        if ($scope.sidebarClass === "sidebar-closed")
            $scope.sidebarClass = "sidebar-open",
            $scope.iconClass ="ti-close icon-large";
         else
            $scope.sidebarClass = "sidebar-closed",
            $scope.iconClass = "ti-menu icon-large";
    };
});

// APP MENU DIRECTIVE
app.directive("menuOverlay", function(){
  return {
    restrict: 'E',
    templateUrl: 'templates/overlay.html'
  };
});