var app = angular.module('spaApp',['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider.when('/',
    {
      controller:'HomeController',
      templateUrl: 'app/views/home.html'
    })
  .when('/works',
    {
      controller: 'WorksController',
      templateUrl: 'app/views/works.html'
    })
    .when('/news',
      {
        controller: 'NewsController',
        templateUrl: 'app/views/news.html'
      })
   .when('/contact',
      {
        controller: 'ContactController',
        templateUrl: 'app/views/contact.html'
      })
   .when('/story',
      {
        controller: 'StoryController',
        templateUrl: 'app/views/story.html'
      })
  .when('/adam',
     {
       controller: 'AdamController',
       templateUrl: 'app/views/adam.html'
     })
});
app.controller('WorksController', function($scope){
  $scope.customerID = 5;
});



app.controller('NewsController', ['$scope', function GDController($scope) {
  $scope.title = 'Graphic Design';
  $scope.promo = 'Logos, Posters, And General Graphic Design Projects';
  $scope.products = [
    {
    	name: 'Visionaire Poster',
    	cover: 'img/Visionaire.jpg'
  	},
    {
    	name: 'Wolf Kings Poster',
    	cover: 'img/Wolf-Kings.jpg'
  	},
    {
      name: 'PSA Poster',
      cover: 'img/psa-poster.jpg'
    },
    {
      name: 'Intergalactic Doorway',
      cover: 'img/red-door.jpg'
    },
    {
      name: 'Species: Unknown',
      cover: 'img/goat.jpg'
    },
    {
      name: 'Seudo Productions',
      cover: 'img/seudo-productions-long.jpg'
    },
    {
      name: 'EXO Studios',
      cover: 'img/exo-studios.jpg'
    },
    {
    	name: 'Wiccan Sweets Shoppe',
    	cover: 'img/wiccan-sweets-shoppe.jpg'
  	},
    {
    	name: 'Sunrise Airlines',
    	cover: 'img/sunrise-airlines.jpg'
  	},
    {
    	name: 'Medieval Poker Club',
    	cover: 'img/medieval-poker-club.jpg'
  	},
    {
      name: 'Tweet Inc.',
      cover: 'img/tweet-inc.jpg'
    },
    {
      name: 'Sunset',
      cover: 'img/Symmetrical Design.jpg'
    },
    {
      name: '',
      cover: 'img/Business Cards.jpg'
    },
    {
      name: '',
      cover: 'img/Inspirational Quote Design.jpg'
    },

  ];
  $scope.plusOne = function(index) {
  	$scope.products[index].likes += 1;
	};
	$scope.minusOne = function(index) {
  	$scope.products[index].dislikes += 1;
	};
}]);




app.controller('StoryController', function($scope){
  $scope.customerID = 5;
});
app.controller('ContactController', function($scope){
  $scope.customerID = 5;
});
app.controller('AdamController', function($scope){
  $scope.customerID = 5;
});
app.controller('HomeController', function($scope) {
  $scope.customers = [
      {"id": 1, "name":"Ted", "total": 5.996},
      {"id": 2, "name":"Michelle", "total": 10.994},
      {"id": 3, "name":"Zed", "total": 10.99},
      {"id": 4, "name":"Tina", "total": 15.994}
    ];
  });
