       <?php
       use PHPMailer\PHPMailer;
      require_once 'Exception.php';
      require_once 'PHPMailer.php';
      require_once 'SMTP.php';
      $mail= new PHPMailer(true);
       $alert='';
      try{
              $mail->isSMTP();
              $mail->Host='smtp.gmail.com';
              $mail->SMTPAuth=true;
              $mail->Username='shreyadabbawar@gmail.com';
              $mail->Password='shreya@26';
              $mail->SMTPSecure=PHPMailer::ENCRYPTION_STARTTLS;
              $mail->Port='587';
              
              $mail->setFrom('shreyadabbawar@gmail');
              $mail->addAddress('shreyadabbawar@gmail');
              
              $mail->isHTML(true);
              $mail->Subject='Any Subject';
              $mail->Body='Any Message';
              
              $mail->send();
              $alert='<div class="alert-success"><span>Check Your Email For Verification.</span></div>';
          }catch(Exception $e){
              $alert='<div class="alert-error"><span>'.$e->getMessage().'</span></div>';
          }

   // ini_set("SMTP","ssl://smtp.gmail.com");
   // ini_set("smtp_port","587");
  //  include_once("database.php");
  //  $postdata = file_get_contents("php://input");
   // if(isset($postdata) && !empty($postdata)) {
   //     $request = json_decode($postdata);
   //     $Email = trim($request->Email);
   //     $rndno=rand(100000, 999999);//OTP generate
    //    $to_email = $Email;
   //     $subject = "OTP for email validation";
    //    $body = "OTP: ".$rndno."";
    //    $headers = "From: shreyadabbawar@gmail.com";
    //    if(mail($to_email,$subject,$body,$headers)){
     //       echo "Email successfully sent to $to_email...";
           // echo json_encode($rndno);
     //   }
      //  else{
       //     echo "Email sending failed...";
      //  }

        
  //  }
?>
