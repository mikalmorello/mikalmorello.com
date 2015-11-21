
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
	  image: 'Image', 
	  description: 'Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte',
      url:'partials/projects/project-name.html'
	},
  {   title: 'Project-Name-2',
      subtitle: 'Project Details Subtitle',
	  image: 'image', 
	  description: 'Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte',
     url:'partials/projects/project-name.html'
	},
  {   title: 'Project-Name-3',
      subtitle: 'Project Details Subtitle',
	  imge: 'image', 
	  description: 'Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient monte',
     url:'partials/projects/project-name.html'
	},
  
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



// TABS
app.controller("PanelController", function(){
  this.tab = 1;
  this.selectTab = function (setTab){
     this.tab = setTab;
  };
  this.isSelected = function(checkTab){
    return this.tab === checkTab;
  }
});



app.controller("MainCtrl", function($scope, $location, $anchorScroll) {
  $scope.menuClass = function(page) {
    var current = $location.path().substring(1);
    return page === current ? "active" : "";
  };
  
  
   /* MENU TOGGLE - ANGULAR */
    $scope.sidebarClass = "sidebar-closed";
    $scope.iconClass ="ti-close icon-large";
    
    $scope.changeClass = function(){
        if ($scope.sidebarClass === "sidebar-open")
            $scope.sidebarClass = "sidebar-closed",
            $scope.iconClass ="ti-menu icon-large";
         else
            $scope.sidebarClass = "sidebar-open",
            $scope.iconClass = "ti-close icon-large";
    };
    
  /* SCROLL TO CONTENT */
  
});

// NOT USED, BUT WANT TO USE DYNAMIC CUSTOM DIRECTIVES
   app.directive("myButtons", function () {
        return {
            restrict: 'E',
           // template: '<div>This is a snippet</div>',
            templateUrl: 'partials/components/button.html',
           // replace: true
        };
     });

// COMPONENT DETAILS - ASIDE SLIDE    
app.directive('slideToggle', function() {  
  return {
    restrict: 'A',      
    scope:{},
    controller: function ($scope) {}, 
    link: function(scope, element, attr) {
      element.bind('click', function() {                  
        var $slideBox = angular.element(attr.slideToggle);
        var slideDuration = parseInt(attr.slideToggleDuration, 10) || 200;
        $slideBox.stop().slideToggle(slideDuration);
      });
    }
  };  
});

// COMPONENT DETAILS - MAIN / ASIDE SPACING
app.controller("myController", function($scope){	    
    $scope.class = "col-lg-8";
    
    $scope.toggleClass = function(){
        if ($scope.class === "col-lg-8")
            $scope.class = "col-lg-12 ";
        else
            $scope.class = "col-lg-8";
    };
});


