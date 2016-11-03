<?php

include('partials/header.php');

//header('location: http://www.ebay.de/');
  if(!empty($_GET)){
    if(isset($_GET['1'])){
      include('partials/schlossplatz.php');
    }
    elseif (isset($_GET['2'])) {
      include('partials/werdersche_markt.php');
    }
    elseif(isset($_GET['3'])){
      include('partials/fuerstenhaus.php');
    }
    elseif(isset($_GET['4'])){
      include('partials/bauakademie.php');
    }
    elseif(isset($_GET['5'])){
      include('partials/schlossfreiheit.php');
    }
    elseif(isset($_GET['6'])){
      include('partials/stadtschloss.php');
    }
  }
    else{
       include('partials/schlossplatz.php');
    }

  
?>
