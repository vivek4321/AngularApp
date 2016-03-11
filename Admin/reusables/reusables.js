if (file_exists($dir)) {
  echo "<script type='text/javascript'>alert(file_exists($dir));</script>";
} else {
  echo "<script type='text/javascript'>alert('dirnone');</script>";
}

if (file_exists($fileName)) {
    echo "<script type='text/javascript'>alert('$fileName');</script>";

} else {
  echo "<script type='text/javascript'>alert('filenone');</script>";
}





<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.11.3.min.js"></script>
<script>
var directoryPath = "<?php echo ($_POST["directoryPath"]); ?>";
var fileName = "<?php echo basename($_FILES["fileToUpload"]["name"]); ?>";
var galleryName = "<?php echo $_POST["galleryName"]; ?>";

var obj = {
  'imageName' : fileName ,
  'rootPath' : "http://localhost/Admin/PHP/images/"+directoryPath ,
  'galleryName' : galleryName
};
$.ajax({
  url: "http://localhost/T/insertImages",
  data : JSON.stringify(obj),
  type : 'POST',
   success: function(result){
      console.log(result);
  },
  error: function(){
    console.log(result);
  }
});
console.log(obj);
</script>




obj.getAllUCMovies = function(){
  return $http.get('http://localhost/T/upInMovies');
}
obj.getUCMovieById = function(id){
  return $http.get('http://localhost/T/movieByID?id='+id);
}
obj.postUCMovie = function(upMovie){
  alert(JSON.stringify(upMovie));
  return $http.post('http://localhost/T/insertUpMovie', upMovie).then(function(data){
    trailer.trailerMoviename = "";
    trailer.trailerUrl = "";
  });
}
obj.deleteUCMovie = function(id){
  return $http.delete('http://localhost/T/deleteUpMovie?id='+id);
}
