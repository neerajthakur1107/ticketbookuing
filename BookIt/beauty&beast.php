<html>
<head>
<link rel="stylesheet" type="text/css" href="stylesheet.css">
<script src="https://kit.fontawesome.com/6236e2151f.js" crossorigin="anonymous"></script>
</head>
  <body>
    <!--Header-->
    <?php include('header.php');  ?>
    <div class = "image">
      <img src="https://i.ytimg.com/vi/fBo_mpD2T-8/maxresdefault.jpg">
    </div>
    <div class = "info">
      <h1>BEAUTY AND THE BEAST</h1>
      <p>FAMILY | 2h 10m</p>
    </div>
    <div class= "trailer">
      <table class="buttons">
      <tr>
        <td>
      <input type=button class = "button button2" onClick="parent.location='https://www.youtube.com/watch?v=e3Nl_TCQXuw'" value='VIEW TRAILER'>
        </td>
        </tr>
        
        <tr>
          <td style="vertical-align:middle;">
          <button class="button button1" onclick=<?php
          shell_exec("javac booking.java");
          echo shell_exec("java booking");
        ?>>BOOK NOW</button>
          </td>
        </tr>
      </table>
    </div>
    </div>
     <div class ="about">
       <h2>About</h2>
       <p>
        Belle, a village girl, embarks on a journey to save her father from a creature that has locked him in his dungeon. Eventually, she learns that the creature is an enchanted prince who has been cursed.
       </p>
       <h2>Disclaimer</h2>
       <p>
         <ul>
           <li>The views expressed by the individual artists and performers ("Artist(s)"), either in course of their performance, or on their social media channels, or any third party channels and platforms, online or offline or otherwise (collectively, "Channels"), are solely their own and neither do they represent those of BookMyShow nor are they endorsed in any manner by BookMyShow, its associates and affiliates. </li>
           <li>Artists at all times remain fully and solely liable and responsible for their actions, expressions and/or views. BookMyShow will not be responsible for their actions, expressions and/or views, and any claims, damages, outrage arising due to the comments, pictures or videos posted by the Artists on the Channels. </li>
           <li>Additionally, BookMyShow shall not be held liable or responsible for any violation of intellectual property rights that may arise out of any Artist performance.</li>
           <li>By registering yourself on BookMyShow, you hereby expressly agree to the above terms.</li>
       </ul>
       <h2>Terms and Conditions</h2>
       <ul>
         <li>Please be at the location atleast 15 minutes befor the show time</li>
         <li>Recording the movie is strictly prohibited</li>
         <li>No snacks can be carried in the theatre</li>
         <li>Do not disturb anyone in the theater</li>
       </ul>
    </div>
       
     <!--Footer-->
    <footer style="background-color:black">
      <div class = "footer-list">    
        <h2>Connect with us</h2>
        <table style="margin-left:auto;margin-right:auto;border:none">
          <tr>
              <td><a href="https://www.facebook.com/>"><i class="fab fa-facebook" style="font-size: 40px;color:blue"></i></a></td>
              <td><a href="https://www.instagram.com/"><i class="fab fa-instagram" style="font-size: 40px;color:red"></i></a></td>
              <td><a href="https://twitter.com/"><i class="fab fa-twitter" style="font-size: 40px;color:lightskyblue"></i></a></td>
              <td><a href="https://www.youtube.com/>"><i class="fab fa-youtube" style="font-size: 40px;color:red"></i></a></td>
          </tr>
        </table>                 
      </div>
  </footer>      
           
      
  </body>
  
</html>
