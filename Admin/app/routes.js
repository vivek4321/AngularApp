
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
  .when('/event',{
    templateUrl: 'views/events.html',
    controller: 'eventsCtrl'
  })
  .when('/images',{
    templateUrl: 'views/images.html',
    controller: 'imagesCtrl'
  })
  .when('/InTheaters',{
    templateUrl: 'views/InTheater.html',
    controller: 'InTheatersCtrl'
  })
  .when('/upComing',{
    templateUrl: 'views/UpComming.html',
    controller: 'upComingCtrl'
  })
});
