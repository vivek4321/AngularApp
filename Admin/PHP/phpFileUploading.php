<!DOCTYPE html>
<html>
<head>
  <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.11.3.min.js"></script>
  <script>
  var directoryPath = "<?php echo ($_POST["directoryPath"]); ?>";
  var fileName = "<?php echo basename($_FILES["fileToUpload"]["name"]); ?>";
  var galleryName = "<?php echo $_POST["galleryName"]; ?>";

  var obj = {
    'imageName' : fileName ,
    'rootPath' : "http://localhost/Admin/PHP/images/"+fileName ,
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

</head>
<body>

<h1>My first PHP page</h1>

<?php
$dir = $_POST["directoryPath"];
$crDirec = '../';
echo "asdaf".is_dir($dir ==1);
if (is_dir($dir ==1)){
  $target_file = "images/".$_POST["directoryPath"] . basename($_FILES["fileToUpload"]["name"]);
  move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file);
}
else {
  $target_file = "images/".$_POST["directoryPath"] . basename($_FILES["fileToUpload"]["name"]);
  move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file);
}

$galleryName = $_POST["galleryName"];
echo $galleryName;
echo "<script type='text/javascript'>alert('$galleryName');</script>";


?>
</html>
