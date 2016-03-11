
function myFunction(value,id){
  alert(value);
  $("#video").remove();
  $("#parent_video").append("<div id='video'></div>");
   var z = "http://www.youtube.com/embed/"+value;
  $("#video").append("<div class='ng-scope'><center>"+"<p>ID:"+id+"</p><br><p>URL:"+value+"</p><center><br><br>"
  +"<iframe width='640' height='360' src="+z+"></iframe>"
  +" <center><button class='btn col-md-10 btn-primary form-control' ng-click='deleteTrailer("+id+")'>Delete</button></center>"+"</div>");

}
