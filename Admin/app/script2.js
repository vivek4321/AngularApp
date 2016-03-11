// create the module and name it scotchApp
    var TApp = angular.module('TApp', ['ngRoute']);

    //services
    TApp.factory("services", ['$http', function($http){
      //var baseService ='/##/T/'
      var obj = {};


      obj.getNews = function(){
        return $http.get('http://localhost/T/news');
      };
      obj.insertNewsItem = function(newsItem){
        return $http.post('http://localhost/T/insertN', newsItem).then(function(results){
          return results;
        });
      }
      obj.deleteNewsItem = function(id){
        return $http.delete('http://localhost/T/deleteNews?id='+id).then(function(status){
        //  alert("service"+id);
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
      //  alert(JSON.stringify(trailer));
        return $http.post('http://localhost/T/insertTrailer', trailer).then(function(data){
          trailer.trailerMoviename = "";
          trailer.trailerUrl = "";
        });
      }
      obj.deleteTrailer = function(id){
        return $http.delete('http://localhost/T/deleteTrailer?id='+id);
      }

      //****************** for images ******************

      obj.getAllImages = function(){
        return $http.get('http://localhost/T/imagesas');
      }
      obj.getImageById = function(id){
        return $http.get('http://localhost/T/imageByID?id='+id);
      }
      // obj.postTrailer = function(trailer){
      //   alert(JSON.stringify(trailer));
      //   return $http.post('http://localhost/T/insertTrailer', trailer).then(function(data){
      //     trailer.trailerMoviename = "";
      //     trailer.trailerUrl = "";
      //   });
      // }
      obj.deleteImage = function(id){
        return $http.delete('http://localhost/T/deleteImages?id='+id);
      }

      //****************** for Up Comming Movies ******************

      obj.getAllUCMovies = function(){
        return $http.get('http://localhost/T/upInMovies');
      }
      obj.getUCMovieById = function(id){
        return $http.get('http://localhost/T/movieByID?id='+id);
      }
      obj.postUCMovie = function(upMovie){
      //  alert(JSON.stringify(upMovie));
        return $http.post('http://localhost/T/insertUpMovie', upMovie).then(function(data){
      //    alert(JSON.stringify(data.data));
        });
      }
      obj.deleteUCMovie = function(id){
        return $http.delete('http://localhost/T/deleteUpMovie?id='+id);
      }


      //****************** for events ******************

      obj.getAllEvents = function(){
        return $http.get('http://localhost/T/event');
      }
      obj.getEventById = function(id){
        return $http.get('http://localhost/T/eventByID?id='+id);
      }
      obj.postEvent = function(event){
      //  alert(JSON.stringify(event));
        return $http.post('http://localhost/T/insertEvent', event).then(function(data){
          //alert(JSON.stringify(data.data));
        });
      }
      obj.deleteEvent = function(id){
        return $http.delete('http://localhost/T/deleteEvent?id='+id);
      }


      //****************** for ITheater ******************

      obj.getAllITheater = function(){
        return $http.get('http://localhost/T/inTheater');
      }
      obj.getITheaterById = function(id){
        return $http.get('http://localhost/T/inTheaterByID?id='+id);
      }
      obj.postITheater = function(event){
        //alert(JSON.stringify(event));
        return $http.post('http://localhost/T/insertinTheater', event);
        // .then(function(data){
        //   //alert(JSON.stringify(data.data));
        // });
      }
      obj.deleteITheater = function(id){
        return $http.delete('http://localhost/T/deleteInTheater?id='+id);
      }

      return obj;
    }]);
