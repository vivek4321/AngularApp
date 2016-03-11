

// create the module and name it scotchApp
    var TApp = angular.module('TApp', ['ngRoute']);

    //services
    TApp.factory("services", ['$http', function($http){
      //var baseService ='/##/T/'
      var obj = {};

      obj.getNews = function(){
        return $http.get('http://localhost/T/news');
      };

      // obj.getNewsById = function(newsItemID){
      //   return $http.get('http://localhost/T/reviewByID?id='+newsItemID);
      // }
      obj.insertNewsItem = function(newsItem){
        return $http.post('http://localhost/T/insertN', newsItem).then(function(results){
          alert(JSON.stringify(newsItem)+JSON.stringify(results));
          return results;
        });
      }
      // obj.updateNewsItem = function(newsItemID, newsItem){
      //
      // }
      obj.deleteNewsItem = function(id){
        return $http.delete('http://localhost/T/deleteNews?id='+id).then(function(status){
          alert("service"+id);
          return status.data;
        });
      }

      //Start for reviews
      obj.insertReviewItem = function(reviewItem){
        return $http.post('http://localhost/T/insertReview',reviewItem).then(function(status){
            //alert('ctrl'+status.data);
          return status.data;
        });
      }
      // get all reviews
      obj.getReviews = function(){
        return $http.get('http://localhost/T/review');
        // .then(function(status){
        //   alert("service"+status.data);
        //   return status.data;
        // });
      }
      obj.getReviewByID = function(id){
        return $http.get('http://localhost/T/reviewByID?id='+id);
      }
      obj.deleteReviewByID = function(id){
        return $http.delete('http://localhost/T/deletereview?id='+id);
      }

      //****************** for Trailers ******************

      obj.getAllTrailer = function(){
        return $http.get('http://localhost/T/trailers');
      }
      obj.getTrailerById = function(id){
        return $http.get('http://localhost/T/trailerByID?id='+id);
      }
      obj.postTrailer = function(trailer){
        alert(JSON.stringify(trailer));
        return $http.post('http://localhost/T/insertTrailer', trailer).then(function(data){
          trailer.trailerMoviename = "";
          trailer.trailerUrl = "";
        });
      }
      obj.deleteTrailer = function(id){
        return $http.delete('http://localhost/T/deleteTrailer?id='+id);
      }
      return obj;
    }]);


    //controllers
    //this controller for getting the list of news ### Used in news.html


    //update, delete, save news item ### used in edit-news.html
    TApp.controller('editNewsCtrl', function($scope, $rootScope, $location, $routeParams, services, newsItem){
      alert("fasd");

      // var nID = ($rootScope.nID) ? parseInt($routeParams.nID) : 0;
      // $rootScope.nTitle = (nID > 0) ? 'Edit item' : 'Add item';
      // $scope.buttonText = (nID > 0) ? 'Update item' : 'Add New item';
      // var original = newsParameter.data;
      // original._id = nID;
      // $scope.newsParameter = angular.copy(original);
      // $scope.newsParameter._id = nID;
      //

      // $scope.deleteItem = function(newsItem) {
      //   var index = newsItem.nID;
      //   //$location.path('/');
      //   alert(newsItem);
      //   if(confirm("Are you sure to delete news id number: "+$scope.newsItem.nID)==true)
      //   services.deleteCustomer(newsItem.nID);
      // };

      // $scope.saveNewsItem = function(newsItem) {
      // $location.path('/');
      // if (newsItemID <= 0) {
      // services.insertNewsItem(newsItem);
      // }
      // else {
      // services.updateNewsItem(newsItemID, newsItem);
      // }
      // };

    });

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

    // create the controller and inject Angular's $scope
    TApp.controller('mainController', function($scope) {

        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    TApp.controller('newsListCtrl', function( $scope , services){
      $scope.deleteItem = function(id){
        alert("ctrl"+id);
        services.deleteNewsItem(id);
      };

      services.getNews().then(function(data){
        $scope.newsList = data.data;
      });
    });
    //save news item-- addnewsctrl --
    TApp.controller('addNewsCtrl',function($scope,services){
      $scope.addNewsItem = function(newsItem){
        services.insertNewsItem(newsItem);
      }
    });

    TApp.controller('reviewCtlr', function($scope,services){
      //get list of reviews
      services.getReviews().then(function(data){
        $scope.reviews = data.data;
        //alert("ctlr"+JSON.stringify(data)+JSON.stringify(JSON.stringify($scope.reviews)));
      });

      $scope.getThisReview = function (id){
        services.getReviewByID(id).then(function(d){
          $scope.movieReview = d.data;
            //alert("ctlr"+JSON.stringify($scope.movieReview)+JSON.stringify(d));
        });
      }

      $scope.deleteReviewItem = function(id){
        var deleteAlert = $window.confirm('Are you absolutely sure you want to delete it?');
   if (deleteAlert) {
     services.deleteReviewByID(id);
   }

      }
    });

    TApp.controller('addReviewsCtlr', function($scope,services){
      $scope.addReviewItem = function(review){
        services.insertReviewItem(review);
      }
    });

    //################for trailers ########################
    TApp.controller('trailersCtrl', function($scope,services){

      function refreshTrailers(){
        $("#video").remove();
        $("#parent_video").append("<div id='video'></div>");

      services.getAllTrailer().then(function(data){
        //$scope.trailer = data.data
        $scope.showTrailers = data.data;
         var x = JSON.stringify(data.data.length);
         for(var i=0; i<data.data.length; i++){
          // $scope.showTrailers[i].trailerUrl = "http://www.youtube.com/embed/"+data.data[i].trailerUrl;
           var z = "http://www.youtube.com/embed/"+(data.data[i].trailerUrl);
           $("#video").append("<div class='col-md-4 ng-scope'>"+"ID:"+(data.data[i].trailerId)+"<br>Title:"+(data.data[i].trailerMoviename)
           +"<iframe src="+z+"></iframe>"
           +" <button class='btn btn-primary' ng-click='deleteTrailer("+data.data[i].trailerId+")'>Delete</button>"+"</div><br>");

          // $("#video").append("<iframe src="+z+"></iframe>");
          // $("#deleteTrailerButton").append(" <button class='btn btn-primary' ng-click='deleteTrailer('"+data.data[i].trailerId+"')'>Delete</button>");
         }

      });
    }

    refreshTrailers();


      $scope.addTrailer = function(tra){
        //alert(JSON.stringify(tra));

        services.postTrailer(tra);
        $scope.apply;
        // $scope.showTrailers = {}
        // refreshTrailers();
      }

      $scope.deleteTrailer = function(id){
        var deleteAlert2 = confirm('Are you absolutely sure you want to delete it?');
           if (deleteAlert2) {
             services.deleteTrailer(id);
             $scope.showTrailers = {}
             refreshTrailers();
           }
           refreshTrailers();
      }

    });
script.js
Open with
Displaying script.js.
