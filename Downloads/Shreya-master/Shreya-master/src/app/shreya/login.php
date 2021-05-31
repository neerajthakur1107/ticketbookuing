<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
    $Password = mysqli_real_escape_string($con, trim($request->Password));
    $Email = mysqli_real_escape_string($con, trim($request->Email));
    $sql = "SELECT * FROM temporycompanylogin where Email='$Email' and Password = '$Password'";
    if($result = mysqli_query($con,$sql))
    {
        $rows = array();
        while($row = mysqli_fetch_assoc($result))
        {
            $rows[] = $row;
        }
        echo json_encode($rows);
    }
    else{
        http_response_code(401);
        
    }
}
?>
