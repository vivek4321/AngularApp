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
