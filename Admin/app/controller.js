//controllers
//this controller for getting the list of news ### Used in news.html


//update, delete, save news item ### used in edit-news.html
TApp.controller('editNewsCtrl', function($scope, $rootScope, $location, $routeParams, services, newsItem){
  //alert("fasd");

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



// create the controller and inject Angular's $scope
TApp.controller('mainController', function($scope) {
      // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

TApp.controller('newsListCtrl', function( $scope , services){
  $scope.deleteItem = function(id){
    services.deleteNewsItem(id);
    refreshNews();
  };
  function refreshNews(){
    services.getNews().then(function(data){
      $scope.newsList = {}
      $scope.newsList = data.data;
    });
  }
  refreshNews();
  $scope.addNewsItem = function(newsItem){
    services.insertNewsItem(newsItem);
    refreshNews();
    $scope.newsItem = {}
  }
});
//save news item-- addnewsctrl --

TApp.controller('reviewCtlr', function($scope,services){
  //get list of reviews
  function refreshReview(){
      services.getReviews().then(function(data){
        $scope.reviews = {};
        $scope.reviews = data.data;
        //alert("ctlr"+JSON.stringify(data)+JSON.stringify(JSON.stringify($scope.reviews)));
      });
  }
  refreshReview();

  $scope.getThisReview = function (id){
    services.getReviewByID(id).then(function(d){
      $scope.movieReview = d.data;
      refreshReview();
        //alert("ctlr"+JSON.stringify($scope.movieReview)+JSON.stringify(d));
    });
  }

  $scope.deleteReviewItem = function(id){
    var deleteAlert = confirm('Are you absolutely sure you want to delete it?');
      if (deleteAlert) {
       services.deleteReviewByID(id);
       refreshReview();
      }
    }
});

TApp.controller('addReviewsCtlr', function($scope,services){
  $scope.addReviewItem = function(review){
    services.insertReviewItem(review).then(function(data){
      if(data.status === "Success" ){
        alert(data.msg);
        $scope.review = {};
      }else {
        alert(data.msg);
      }
      alert(JSON.stringify(data));
    })
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
    $scope.showTrailers = {}
    refreshTrailers();
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

//################for Images ########################
TApp.controller('imagesCtrl', function($scope,services){
  function refreshImages(){
    // $("#video").remove();
    // $("#parent_video").append("<div id='video'></div>");
    services.getAllImages().then(function(data){
      //  alert(JSON.stringify(data.data));
    //$scope.trailer = data.data
    $scope.showImages = data.data;
     var x = JSON.stringify(data.data.length);
     for(var i=0; i<data.data.length; i++){
      // $scope.showTrailers[i].trailerUrl = "http://www.youtube.com/embed/"+data.data[i].trailerUrl;
       var z = "http://www.youtube.com/embed/"+(data.data[i].trailerUrl);
       $("#video").append("<div class='col-md-4 ng-scope'>"+"ID:"+(data.data[i].trailerId)+"<br>Title:"+(data.data[i].trailerMoviename)
       +"<iframe src="+z+"></iframe>"
       +" <button class='btn btn-primary' ng-click='deleteTrailer("+data.data[i].trailerId+")'>Delete</button>"+"</div><br>");
     }

  });
}

refreshImages();


  $scope.addImages = function(imageData){
  //alert(JSON.stringify(imageData));
    services.postImages(imageData);
    $scope.showImages = {}
    refreshImages();
  }

  $scope.deleteImage = function(id){
    var deleteAlert2 = confirm('Are you absolutely sure you want to delete it?');
       if (deleteAlert2) {
         services.deleteImage(id);
         $scope.showImages = {}
         refreshImages();
       }
       refreshImages();
  }

});


//################for Up Coming films ########################
TApp.controller('upComingCtrl', function($scope,services){
  function refreshUCMovie(){
    services.getAllUCMovies().then(function(data){
    // alert(JSON.stringify(data.data));
    //$scope.trailer = data.data
    $scope.upMovies = data.data;
     var x = JSON.stringify(data.data.length);
   });
  }
refreshUCMovie();

$scope.getUCMovieById = function(id){
  services.getUCMovieById(id).then(function(data){
    $scope.UpCommingMovie = data.data;
  });
}

  $scope.addUCMovie = function(upMovieData){
    //alert(JSON.stringify(upMovieData));
    services.postUCMovie(upMovieData);
    //$scope.upMovies = {}
    refreshUCMovie();
  }

  $scope.deleteUCMovie = function(id){
    var deleteAlert2 = confirm('Are you absolutely sure you want to delete it?');
       if (deleteAlert2) {
         services.deleteUCMovie(id);
         //$scope.showImages = {}
         refreshUCMovie();
       }
       refreshUCMovie();
  }


});


//################for Up events  ########################
TApp.controller('eventsCtrl', function($scope,services){
  function refreshEvents(){
    services.getAllEvents().then(function(data){
    $scope.events = {}
    $scope.events = data.data;
   });
  }
refreshEvents();

$scope.getEventById = function(id){
  services.getEventById(id).then(function(data){
    $scope.SingleEvent = data.data;
  });
}

  $scope.addEvent = function(event){
    services.postEvent(event);
    refreshEvents();
  }

  $scope.clearIT  = function(){
    $scope.event = {};
  }
  $scope.deletevent = function(id){
    var deleteAlert = confirm('Are you absolutely sure you want to delete it?');
       if (deleteAlert) {
         services.deleteEvent(id);
       }
       refreshEvents();
  }

});
//################end of events  ########################

//################for Up  InTheatersCtrl ########################
TApp.controller('InTheatersCtrl', function($scope,services){
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
$scope.clearIT  = function(){
  $scope.IT = {};
}
  $scope.addITheater = function(ITMovie){
    services.postITheater(ITMovie).then(function(data){
      //alert(JSON.stringify(data.data));
    });
    refreshITheater();
  }

  $scope.deleteITheater = function(id){
    var deleteAlert = confirm('Are you absolutely sure you want to delete it?');
       if (deleteAlert) {
         services.deleteITheater(id);
       }
       refreshITheater();
  }

});
//################end of InTheatersCtrl  ########################
