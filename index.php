<?php 
$firstname= $_REQUEST['first name'];
$lasttname= $_REQUEST['last name'];
$email= $_REQUEST['email'];
$password= $_REQUEST['password'];
$gender= $_REQUEST['gender'];
$days= $_REQUEST['Days'];
$Monthes= $_REQUEST['Monthes'];
$years= $_REQUEST['Years'];
if(isset($_POST['submit']))
{

$host="localhost";
$user = "root";
$password="";
$db_name="project";
$conn = mysqli_connect($host,$user,$password,$db_name);

$insert= "insert into creat values('$firstname','$lasttname','$email','$password','$gender','$days','$Monthes','$years') ";

mysqli_query($conn , $insert);

if($conn){
    echo("<h1 style='color:green;'> your rrgestration is done</h1>");
}
else{
    echo("<h1 style='color:green;'> your rrgestration is failed</h1>");
}
}
?>