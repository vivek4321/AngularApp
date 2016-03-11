//Angular Script
var app = angular.module('app', ['ngRoute'])
//Routes
app.directive('youtube',function(){
  return{
    template:'<script src="https://apis.google.com/js/platform.js"></script><div class="g-ytsubscribe" data-channelid="UCyxucVDziTBaJkGZpVYMm8Q" data-layout="full" data-theme="dark" data-count="hidden"></div>',
    restrict:'E'
  }
});
app.directive('facebook',function(){
  return{
    template:'<br><div class="fb-like" data-href="https://www.facebook.com/photo.php?fbid=10205048092511848&amp;set=a.2253518667321.2096856.1528936295&amp;type=3&amp;theater" data-width="20" data-layout="button" data-action="like" data-show-faces="true" data-share="true">Like</div>',
    restrict:'E'
  }
});
app.directive('twitter',function(){
  return{
    template:'<a class="twitter-follow-button"  href="https://twitter.com/TwitterDev/asds345"  data-size="large">Follow @TwitterDev</a>',
    restrict:'E'
  }
});
app.config(["$routeProvider","$locationProvider",function($routeProvider, $locationProvider){
    $routeProvider
    //route to HomePage
    .when('/',{
      templateUrl : 'views/home.html',
      controller : 'userController'
    })
    .when('/news',{
      templateUrl : 'views/news.html',
      controller : 'newsController'
    })
    .when('/newsList/:id',{
      templateUrl : 'views/newsList.html',
      controller:'newsItemCtrl'
    })
    .when('/reviews',{
      templateUrl:'views/reviews.html',
      controller : 'reviewsController'
    })
    .when('/SingleMovieReview/:id',{
      templateUrl:'views/SingleMovieReview.html',
      controller:'reviewsItemCtrl'
    })
    .when('/trailers',{
      templateUrl: 'views/trailers.html',
      controller: 'trailersController'
    })
    .when('/upComing',{
      templateUrl: 'views/UpComming.html',
      controller: 'UCMCtrl'
    })
    .when('/singleUpMovInfo/:id',{
      templateUrl: 'views/singleUpMovInfo.html',
      controller : 'UCMListCtrl'
    })
    .when('/event',{
      templateUrl: 'views/events.html',
      controller: 'eventsController'
    })
    .when('/eventList/:id',{
      templateUrl: 'views/singleEventInfo.html',
      controller: 'eventListCtrl'
    })
    .when('/InTheaters',{
      templateUrl: 'views/inTheater.html',
      controller : 'InTheatersCtrl'
    })
    .when('/1InTheaters',{
      templateUrl: 'views/1InTheater.html'
    })
    .when('/images',{
      templateUrl: 'views/images.html',
      controller : 'imagesCtrl'
    })
    .when('/gallery/:name',{
      templateUrl: 'views/gallery.html',
      controller : 'galCtrl'
    })
    // .when('/about',{
    //   templateUrl: 'views/about.html',
    //   controller : ''
    // })
    // .when('/contact',{
    //   templateUrl: 'views/contact.html',
    //   controller : ''
    // })
    .otherwise(
      { redirectTo: '/' }
    )

}]);


//Factory
app.factory("services", ['$http', function($http){
      //var baseService ='/##/T/'
      var obj = {};
      obj.getNews = function(){
        return $http.get('http://localhost/T/news');
      };
      obj.getNewsItembyId = function(id){
        return $http.get('http://localhost/T/newsByID?id='+id);
      };
      obj.getReviews = function(){
        return $http.get('http://localhost/T/review');
      }
      obj.getReviewByID = function(id){
        return $http.get('http://localhost/T/reviewByID?id='+id);
    }

    obj.getTrailers = function(){
      return $http.get('http://localhost/T/trailers');
    }

    obj.getTrailerByID = function(id){
      return $http.get('http://localhost/T/trailerByID?id='+id);
    }

    obj.getAllUCMovies = function(){
        return $http.get('http://localhost/T/upInMovies');
      }

    obj.getUCMovieById = function(id){
        return $http.get('http://localhost/T/movieByID?id='+id);
        // .then(function(data){
        //   alert(JSON.stringify(data.data));
        // });
    }

    obj.getAllEvents = function(){
        return $http.get('http://localhost/T/event');
      }

    obj.getEventById = function(id){
        return $http.get('http://localhost/T/eventByID?id='+id);
    }

    obj.getAllITheater = function(){
        return $http.get('http://localhost/T/inTheater');
      }
      obj.getITheaterById = function(id){
        return $http.get('http://localhost/T/inTheaterByID?id='+id);
      }

      obj.GAGalNames = function(){
        return $http.get('http://localhost/T/gallery');
      }
      obj.GIByGallery =function(Gname){
        //alert("services"+'http://localhost/T/imagesByGn?Gn="a"');
        //alert("services"+'http://localhost/T/imagesByGn?Gn='+'"'+Gname+'"');
        return $http.get('http://localhost/T/imagesByGn?Gn='+'"'+Gname+'"');
        // .then(
        //   function(data){
        //     alert(JSON.stringify(data.data));
        //   }
        // );
      }

    return obj;

}]);


//<-- start   Angular controllers -->
app.controller('userController',["$scope","services", function($scope,services){
   services.getNews().then(
      function(data){
        $scope.newsObjH =data.data;
      }
    );
  services.getReviews().then(
     function(data){
       $scope.reviewsObjH = data.data;
     }
   );
  services.getTrailers().then(
    function(data){
      $scope.traiObjH = data.data;
    }
  );
  services.GAGalNames().then(
    function(data){
      $scope.galObjH = data.data;
    }
  );
  services.getTrailers().then(
    function(data){
    $scope.traiObjH = data.data;
    }
  );

  services.getAllUCMovies().then(function(data){
    $scope.UCMoviesH = data.data;
  });

  services.getAllITheater().then(function(data){
  $scope.ITheatersH = data.data;
 });
 services.getAllEvents().then(function(data){
   $scope.eventsH = data.data;
 });
 services.getAllUCMovies().then(function(data){
   $scope.UCMovies = data.data;
 });

}]);
app.controller('newsController', ["$scope","$rootScope","services","$route",function( $scope , $rootScope, services, $route){
      services.getNews().then(function(data){
        $scope.newsList = data.data;
      });
}]);
app.controller('newsItemCtrl', [ "$scope","$rootScope","services","$routeParams","$route" ,function($scope , $rootScope, services,$routeParams, $route){
  services.getNewsItembyId($route.current.params.id).then(function(data){
    $rootScope.newsItem = data.data;
    });
}]);
app.controller('reviewsController', function( $scope , services, $rootScope){
        services.getReviews().then(function(data){
          $scope.movieReviews = data.data;
        });
});
app.controller('reviewsItemCtrl', [ "$scope","$rootScope","services","$routeParams","$route" ,function($scope , $rootScope, services,$routeParams, $route){
  services.getReviewByID($route.current.params.id).then(function(data){
    $rootScope.movieItem = data.data;
    });
}]);
app.controller('trailersController', function( $scope , services, $rootScope){
        services.getTrailers().then(function(data){
          $scope.movieTrailers = data.data;
        });
});
app.controller('UCMCtrl', function( $scope , services, $rootScope){
        services.getAllUCMovies().then(function(data){
          $scope.upcomingMovies = data.data;
        });
});
app.controller('UCMListCtrl', ["$scope","$rootScope","services","$routeParams","$route" ,function($scope, $rootScope, services,$routeParams, $route){
  services.getUCMovieById($route.current.params.id).then(function(data){
    //alert($route.current.params.id);
    $scope.testUCMovie = data.data;
    //alert(JSON.stringify(data.data));
  });
}]);
app.controller('eventsController', function( $scope , services, $rootScope){
        services.getAllEvents().then(function(data){
          $scope.events = data.data;
        });
});
app.controller('eventListCtrl',["$scope","$rootScope","services","$routeParams","$route" ,function($scope, $rootScope, services,$routeParams, $route){
  services.getEventById($route.current.params.id).then(function(data){
    //alert($route.current.params.id);
    $scope.testEvent = data.data;
    //alert(JSON.stringify(data.data));
  });
}]);

    app.controller('InTheatersCtrl', function($scope,services){
      function refreshITheater(){
        services.getAllITheater().then(function(data){
        $scope.ITheaters = {}
        $scope.ITheaters = data.data;
       });
      }
    refreshITheater();

    $scope.getITheaterById = function(id){
      services.getITheaterById(id).then(function(data){
        $scope.ITMovie = data.data;
      });
    }
    });

    app.controller('imagesCtrl',function($scope,$rootScope,services){
      function refreshImaages(){
        services.GAGalNames().then(function(data){
          //alert(JSON.stringify(data.data));
          $scope.galnames = {}
          $scope.galnames = data.data;
        });
      }
      refreshImaages();
    });

    app.controller('galCtrl',["$scope","$rootScope","services","$routeParams","$route" ,function($scope, $rootScope, services,$routeParams, $route){
      services.GIByGallery($route.current.params.name).then(function(data){
        $rootScope.gallery = {}
        $rootScope.gallery = data.data;
        //alert(JSON.stringify(data.data));
      });
    }]);
