
function myFunction(value,id){
  //alert(value);
  $("#video").remove();
  $("#parent_video").append("<div id='video'></div>");
   var z = "http://www.youtube.com/embed/"+value;
  $("#video").append("<div class='col-md-12 embed-responsive embed-responsive-16by9 ng-scope'><center>"+"ID:"+id+"<br>Title:"+value+"<center><br><br>"
  +"<iframe class='col-md-12' class='enlargedImg'  src="+z+"></iframe>"
  +"</div>");

}


function ImageFunc(a){
//  alert(a);
  $("#img").remove();
  $("#parent_img").append("<div id='img'></div>");
  $("#img").append("<img class='img-responsive enlargedImg img-rounded' src="+a+" />");
}

$('#myModal').on('shown', function () {
  $('body').on('click', function(e) {
    alert("outside clicked");
    e.stopPropagation();
  });
})
$('#myModal').on('hidden', function () {
  $('body').off('click');
});

$('#myModal').click(function(){
  alert("outside clicked");
});
