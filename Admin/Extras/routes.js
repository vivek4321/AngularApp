//Routes
TApp.config(function($routeProvider){
  $routeProvider
  //route to home
  .when('/',{
    templateUrl : 'views/home.html',
    controller : 'mainController'
  })
  .when('/news',{
    templateUrl : 'views/news.html',
    controller : 'newsListCtrl'
  })
  .when('/edit-news',{
    templateUrl : 'views/edit-news.html',
    controller : 'editNewsCtrl'
  })
  .when('/add-news',{
    templateUrl:'views/add-news.html',
    controller:'addNewsCtrl'
  })
  .when('/reviews',{
    templateUrl:'views/reviews.html',
    controller:'reviewCtlr'
  })
  .when('/add-reviews',{
    templateUrl : 'views/add-reviews.html',
    controller : 'addReviewsCtlr'
  })
  .when('/trailers',{
    templateUrl: 'views/trailers.html',
    controller: 'trailersCtrl'
  })
});
