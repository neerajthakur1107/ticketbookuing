<?php
    ini_set("SMTP","ssl://smtp.gmail.com");
    ini_set("smtp_port","25");
    include_once("database.php");
    $postdata = file_get_contents("php://input");

    if(isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata);
        $CompanyName = trim($request->CompanyName);
        $Name = trim($request->Name);
        $Designation = trim($request->Designation);
        $Email = mysqli_real_escape_string($con, trim($request->Email));
        $MobileNo = mysqli_real_escape_string($con, trim($request->MobileNo));
        $Address = trim($request->Address);
        $ColdStorage = $request->ColdStorage;
        $Energy = $request->Energy;
        $Password = mysqli_real_escape_string($con, trim($request->Password));
        $ConfirmPassword = mysqli_real_escape_string($con, trim($request->ConfirmPassword));
        
        if($Password==$ConfirmPassword){
            $sql = "INSERT INTO temporycompanylogin(CompanyName, Name, Designation, Email, MobileNo, Address, ColdStorage, Energy, Password) VALUES ('$CompanyName', '$Name', '$Designation', '$Email', '$MobileNo', '$Address', '$ColdStorage', '$Energy', '$Password')";

            if ($con->query($sql) === TRUE) {
                $authdata = [
                    'CompanyName' => $CompanyName,
                    'Email' => $Email,
                    'TempID' => mysqli_insert_id($con)
                    ];
                echo json_encode($authdata);
            } else {
                
                echo('yaha error hai');
            }
        }
    }
        else{
            echo('waha error hai');
        }
?>