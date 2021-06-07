<?php
    include_once("database.php");
    $postdata = file_get_contents("php://input");
    if(isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata);
        $Email = trim($request->Email);
        $Password = mysqli_real_escape_string($con, trim($request->Password));
        $ConfirmPassword = mysqli_real_escape_string($con, trim($request->ConfirmPassword));
        $query = "select * from temporycompanylogin where Email = '$Email'";
        $run = mysqli_query($con,$query);
        $row = mysqli_num_rows($run);
        if($row==0){
            $email_err = "email id does not exist";
        }
        else if($Password==''){
            $pwd_err="please enter your new password";
        }
        else if($ConfirmPassword==''){
            $pwd_err="please re-enter your new password";
        }
        else if($Password!=$ConfirmPassword){
            $match_err="password do not match";
        }
        else{
            $sql = "Update temporycompanylogin set Password = '$Password' where Email = '$Email'";
            $run = mysqli_query($con,$sql);
            if($run){
                $msg="Password changed successfully";
            }
            else{
                $error = "unable to change password";
            }
        }
       
    } else{
        echo('error');
    }
 ?>
